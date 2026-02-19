"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/AnimatedButton";
import Link from "next/link";
import { ShieldCheck, Zap, BarChart3, Smartphone, Award, Settings } from "lucide-react";

export default function LoyaltyRewards() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Launch Branded <span className="text-gradient">Loyalty Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Power your business with a data-driven loyalty platform designed to increase retention, engagement, and revenue. Mobile-friendly and easy to use.
            </p>
            <Link href="/contact-us">
              <Button size="lg" className="px-10 text-lg">Book a Loyalty Demo</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Flexible Loyalty for Real Businesses"
            subtitle="Design, launch, and manage loyalty programs that match how your customers buy—no custom development required."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Points & Tiers", icon: Award, desc: "Create flexible rules to reward your best customers and drive repeat visits." },
              { title: "Campaign Management", icon: Zap, desc: "Launch targeted offers and campaigns in minutes across one or many stores." },
              { title: "Mobile Optimized", icon: Smartphone, desc: "A seamless customer experience where users can see rewards and redeem easily." },
              { title: "White-Label Branding", icon: ShieldCheck, desc: "Your brand front and center. Keep customer relationships native to your business." },
              { title: "Advanced Analytics", icon: BarChart3, desc: "Gain deep visibility into what drives behavior and understand true customer lifetime value." },
              { title: "Easy Configuration", icon: Settings, desc: "Full control over program rules without the complexity or vendor lock-in." },
            ].map((feature, i) => (
              <GlassCard key={i} className="p-8 group">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-secondary/30 mt-auto border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Rewarding Your Customers</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join the businesses turning everyday transactions into lasting relationships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="w-full sm:w-auto">Get Started Today</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
