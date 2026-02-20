"use client";

import { useEffect, useRef } from 'react';
import Link from "next/link";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/AnimatedButton';
// We will build the Micro-UI Dashboard and Sticky Protocol sections in subsequent steps
import { MicroDashboard } from '@/components/ui/MicroDashboard';
import { StickyArchive } from '@/components/ui/StickyArchive';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Staggered Cinematic Fade Up
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.fromTo(bgRef.current, 
        { scale: 1.1, filter: "blur(10px)", opacity: 0 }, 
        { scale: 1, filter: "blur(0px)", opacity: 1, duration: 2, ease: "power2.out" }
      )
      .fromTo([text1Ref.current, text2Ref.current], 
        { y: 50, opacity: 0, rotationX: 10 }, 
        { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.2 },
        "-=1.0"
      )
      .fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-cream text-charcoal selection:bg-moss/20">
      {/* 
        HERO SECTION: "Nature is the Algorithm"
        Height: 100dvh 
        Background: Moody dark forest image with heavy Moss -> Black overlay
      */}
      <section ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden flex items-end">
        {/* Background Image & Overlay */}
        <div 
          ref={bgRef}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-[#2E4036]/80 to-transparent" />
        <div className="absolute inset-0 z-0 bg-black/30" /> {/* Extra darkening */}

        {/* Content aligned bottom-left third */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32 pt-32 md:pt-40">
          <div className="max-w-3xl">
            <h1 ref={text1Ref} className="font-drama text-5xl md:text-8xl tracking-tighter mb-6 text-cream leading-tight">
              Powering Customer Loyalty & <br/> 
              <span className="text-moss">Modern Workplace Transformation.</span>
            </h1>
            <p ref={text2Ref} className="text-xl md:text-2xl text-cream/70 max-w-2xl font-light mb-12">
              Power your business with a data-driven loyalty platform designed to increase retention, engagement, and revenue.
            </p>
            <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row gap-6">
              <Link href="/contact-us">
                <Button variant="primary" size="lg" className="bg-moss hover:bg-moss/80 text-cream border-none shadow-[0_0_30px_rgba(46,64,54,0.4)]">
                  Book a Free Demo
                </Button>
              </Link>
              <div className="flex items-center gap-3 text-cream/70 font-telemetry text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clay opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-clay"></span>
                </span>
                SYSTEM LIVE // v2.0.4
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholders for subsequent GSAP sections */}
      <MicroDashboard />
      <StickyArchive />
      
      {/* Philosophy Section */}
      <section className="relative py-40 bg-charcoal text-cream overflow-hidden overflow-hidden rounded-t-[3rem] -mt-[3rem] z-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-drama text-5xl md:text-7xl mb-12 text-center text-clay">
            About SalesArck
          </h2>
          <div className="space-y-8 text-xl md:text-2xl text-cream/80 font-light leading-relaxed">
            <p>
              SalesArck helps businesses turn everyday transactions into lasting customer relationships through modern, flexible loyalty programs designed for retail stores, restaurants, and pharmacies.
            </p>
            <p>
              Our loyalty platform enables businesses to reward repeat customers, run targeted offers, and understand customer behavior—all from a single, easy-to-use system. Whether you operate one location or multiple stores, SalesArck gives you full control over points, rewards, and campaigns without complexity or vendor lock-in.
            </p>
            <p>
              Built with scalability and security at its core, our loyalty solutions are designed to grow with your business while delivering clear, measurable results. Customers can see their rewards, redeem offers, and stay engaged—while businesses gain visibility into what drives repeat visits.
            </p>
            <p className="text-cream">
              In addition to customer engagement platforms, SalesArck also delivers <span className="text-moss font-medium">Microsoft 365 services</span>, helping organizations secure, manage, and optimize their cloud environments. This expertise ensures the same enterprise-grade reliability, security, and operational discipline behind every SalesArck solution.
            </p>
            <p className="font-medium text-cream text-2xl pt-4 border-t border-white/10 mt-8 text-center pt-8">
              SalesArck empowers businesses to increase retention, strengthen engagement, and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#EBE9E0] text-charcoal rounded-t-[3rem] -mt-[3rem] z-30 relative px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center text-moss">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="border-b border-black/10 pb-6">
              <h3 className="text-xl font-bold mb-3">What is Sales Arck?</h3>
              <p className="text-charcoal/70 text-lg">Sales Arck is a technology-driven company specializing in white-label loyalty rewards software and Microsoft 365 consulting services.</p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="text-xl font-bold mb-3">How does your product/service work?</h3>
              <p className="text-charcoal/70 text-lg">Our loyalty solutions enable organizations to launch fully branded programs that increase customer retention, engagement, and lifetime value.</p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="text-xl font-bold mb-3">How much does it cost?</h3>
              <p className="text-charcoal/70 text-lg">Our pricing varies depending on nature of work &amp; count of POS. We offer a variety of options to fit your needs and budget. Please visit here for more information.</p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="text-xl font-bold mb-3">Do you offer Microsoft 365?</h3>
              <p className="text-charcoal/70 text-lg">Yes, our Microsoft 365 consulting services help businesses assess, migrate, secure, and optimize their cloud environments with confidence.</p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="text-xl font-bold mb-3">How can I contact you?</h3>
              <p className="text-charcoal/70 text-lg">You can reach us by phone number/email address or click here. We are always happy to answer your questions.</p>
            </div>
            <div className="border-b border-black/10 pb-6">
              <h3 className="text-xl font-bold mb-3">What industries do you cater to?</h3>
              <p className="text-charcoal/70 text-lg">We help grocery stores, pharmacy, convenient stores &amp; any business which is looking to grow their customer base through loyalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Section */}
      <section className="py-32 bg-moss text-cream relative z-40 px-6 rounded-t-[3rem] overflow-hidden -mt-[3rem]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Request a Free Trial Today</h2>
          <p className="text-xl text-cream/80 mb-12">Get updates on loyalty programs and Microsoft 365 tips</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-cream focus:outline-none focus:border-clay transition-colors"
              required
            />
            <button type="submit" className="bg-clay hover:bg-clay/90 text-cream font-semibold px-8 py-4 rounded-full transition-colors">
              Send
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
