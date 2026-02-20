"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/AnimatedButton';
// We will build the Micro-UI Dashboard and Sticky Protocol sections in subsequent steps
import { MicroDashboard } from '@/components/ui/MicroDashboard';
import { StickyArchive } from '@/components/ui/StickyArchive';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

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
      <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden flex items-end">
        {/* Background Image & Overlay */}
        <div 
          ref={bgRef}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2000&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-[#2E4036]/80 to-transparent" />
        <div className="absolute inset-0 z-0 bg-black/30" /> {/* Extra darkening */}

        {/* Content aligned bottom-left third */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 md:pb-32">
          <div className="max-w-3xl">
            <h1 className="flex flex-col text-cream">
              <span ref={text1Ref} className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight opacity-90 mb-2">
                Nature is the
              </span>
              <div ref={text2Ref} className="font-drama text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-cream drop-shadow-2xl font-bold">
                Algorithm.
              </div>
            </h1>
            
            <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row gap-6">
              <Button className="bg-clay text-cream hover:bg-clay/90 rounded-[2rem] px-8 py-4 text-lg font-medium tracking-wide transition-all border-none">
                Initialize Protocol
              </Button>
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
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="font-drama text-5xl md:text-7xl mb-8">
              Modern medicine asks: <span className="text-white/50">What is wrong?</span>
            </h2>
            <h2 className="font-drama text-5xl md:text-7xl text-clay">
              We ask: What is optimal?
            </h2>
        </div>
      </section>
    </div>
  );
}
