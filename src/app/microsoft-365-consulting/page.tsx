"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/AnimatedButton";
import Link from "next/link";
import { Cloud, Lock, Users, RefreshCw, LayoutDashboard, Headphones } from "lucide-react";

export default function Microsoft365() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Modern Workplace <span className="text-gradient">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Securely assess, migrate, and manage Microsoft 365. Simplify and strengthen your cloud workplace with our team of experts.
            </p>
            <Link href="/contact-us">
              <Button size="lg" className="px-10 text-lg">Consult an Expert</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Microsoft 365 Consulting Services"
            subtitle="Enterprise-grade reliability, security, and operational discipline for your cloud environment."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Cloud Migration", icon: Cloud, desc: "Smooth, zero-downtime migrations to Microsoft 365 tailored to your business needs." },
              { title: "Security & Compliance", icon: Lock, desc: "Implement best practices to secure your data and ensure regulatory compliance." },
              { title: "Adoption & Training", icon: Users, desc: "Ensure your team gets the most out of M365 tools with comprehensive training." },
              { title: "Environment Assessment", icon: LayoutDashboard, desc: "Deep dive into your current setup to identify optimization opportunities." },
              { title: "Lifecycle Management", icon: RefreshCw, desc: "Ongoing management of licenses, users, and policies to keep costs in check." },
              { title: "Dedicated Support", icon: Headphones, desc: "Expert troubleshooting and support to keep your operations running smoothly." },
            ].map((service, i) => (
              <GlassCard key={i} className="p-8 group" gradient>
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-secondary/30 mt-auto border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Optimize Your Cloud Environment</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let our experts handle your Microsoft 365 infrastructure so you can focus on your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us">
              <Button size="lg" className="w-full sm:w-auto">Contact SalesArck IT</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
