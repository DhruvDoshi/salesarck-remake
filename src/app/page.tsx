"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/AnimatedButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { SvgBackground } from "@/components/ui/SvgBackground";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Futuristic Backgrounds */}
        <SvgBackground />
        <ParticleNetwork />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-10 perspective-[2000px]">
          <motion.div
            initial={{ opacity: 0, rotateX: 20, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-glow">
              Powering <span className="text-gradient">Customer Loyalty</span><br className="hidden md:block"/> & Modern Workplace Transformation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              SalesArck builds state-of-the-art white-label loyalty software and provides expert Microsoft 365 cloud consulting to elevate your business.
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/loyalty-rewards">
                <Button variant="primary" size="lg" className="w-full sm:w-auto shadow-[0_0_30px_-5px_rgba(59,130,246,0.5)]">
                  Explore Loyalty Rules <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Get a Free Audit
                </Button>
              </Link>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground font-medium"
            >
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Top Rated by Clients</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Enterprise Grade Security</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Microsoft 365 Experts</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative z-10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Core Services" 
            subtitle="Helping your business grow with flexible loyalty programs and secure Microsoft 365 solutions." 
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard className="p-8" gradient>
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Loyalty Rewards Platform</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Launch branded loyalty programs that boost repeat customers and lifetime value. 
                Configure points, rewards, and campaigns with full control—no custom development required.
              </p>
              <Link href="/loyalty-rewards">
                <Button variant="ghost" className="p-0 hover:bg-transparent text-primary hover:text-primary/80">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </GlassCard>

            <GlassCard className="p-8" gradient>
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <ShieldCheck className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Microsoft 365 Consulting</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Securely assess, migrate, and manage Microsoft 365 for smooth digital transformation. 
                Simplify and strengthen your cloud workplace supported by our team of experts.
              </p>
              <Link href="/microsoft-365-consulting">
                <Button variant="ghost" className="p-0 hover:bg-transparent text-accent hover:text-accent/80">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Platform Capabilities" 
            subtitle="Built with scalability and security at its core, designed to grow with your business." 
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fully White-Label", desc: "Your brand front and center.", icon: ShieldCheck },
              { title: "Points & Tiers", desc: "Flexible reward structures.", icon: Zap },
              { title: "Personalized Offers", desc: "Targeted campaigns that convert.", icon: Zap },
              { title: "Mobile Experience", desc: "Engage customers anywhere.", icon: Zap },
              { title: "Rich Analytics", desc: "Data-driven insights to grow.", icon: BarChart3 },
              { title: "POS Integrations", desc: "Seamless operational flow.", icon: Zap },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 border border-border/50 rounded-2xl bg-background hover:border-primary/50 transition-colors"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition / About Snippet */}
      <section className="py-24 bg-gradient-to-b from-transparent to-primary/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Flexible Programs Built for Real Businesses</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            SalesArck enables businesses to turn everyday transactions into lasting customer relationships. Whether you operate one location or multiple stores, get full control over points, rewards, and campaigns without complexity or vendor lock-in.
          </p>
          <div className="flex justify-center items-center gap-2 text-yellow-500 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            ))}
          </div>
          <Link href="/about-us">
            <Button variant="outline" className="glass">Read Our Story</Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          
          <div className="space-y-4">
            {[
              {
                q: "What is Sales Arck?",
                a: "Sales Arck is a technology-driven company specializing in white-label loyalty rewards software and Microsoft 365 consulting services."
              },
              {
                q: "How does your product/service work?",
                a: "Our loyalty solutions enable organizations to launch fully branded programs that increase customer retention, engagement, and lifetime value."
              },
              {
                q: "How much does it cost?",
                a: "Our pricing varies depending on the nature of work & count of POS. We offer a variety of options to fit your needs and budget."
              },
              {
                q: "Do you offer Microsoft 365?",
                a: "Yes, our Microsoft 365 consulting services help businesses assess, migrate, secure, and optimize their cloud environments with confidence."
              },
              {
                q: "What industries do you cater to?",
                a: "We help grocery stores, pharmacies, convenient stores & any business looking to grow their customer base through loyalty."
              }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Request a Free Trial Today or get updates on loyalty programs and Microsoft 365 tips.
          </p>
          <Link href="/contact-us">
            <Button size="lg" className="px-10 text-lg">Contact Us Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={false}
      className="border border-border/50 rounded-xl overflow-hidden glass hover:border-primary/30 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="font-semibold text-white/90 pr-8">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </button>
      <motion.div
        initial="collapsed"
        animate={isOpen ? "open" : "collapsed"}
        variants={{
          open: { opacity: 1, height: "auto", marginBottom: 24 },
          collapsed: { opacity: 0, height: 0, marginBottom: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="px-6 text-muted-foreground"
      >
        {answer}
      </motion.div>
    </motion.div>
  );
}
