"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Target, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              About <span className="text-primary">SalesArck</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We help businesses turn everyday transactions into lasting customer relationships through modern, flexible loyalty programs and secure Microsoft 365 cloud environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our loyalty platform enables businesses to reward repeat customers, run targeted offers, and understand customer behavior—all from a single, easy-to-use system. We believe that technology should empower physical businesses to compete and thrive in the modern economy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In addition to customer engagement platforms, SalesArck delivers Microsoft 365 services, helping organizations secure, manage, and optimize their cloud environments. This dual expertise ensures enterprise-grade reliability, security, and operational discipline behind every solution.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {[
                { title: "Customer-Centric", icon: Users, desc: "Everything we build is designed to strengthen the bond between businesses and their customers." },
                { title: "Data-Driven Results", icon: Target, desc: "We focus on clear, measurable outcomes like increased retention and higher lifetime value." },
                { title: "Enterprise Reliability", icon: ShieldCheck, desc: "Our M365 expertise means our loyalty solutions are built with security and scale in mind." },
              ].map((value, i) => (
                <GlassCard key={i} className="p-6 flex gap-6 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-secondary/30 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading title="Our Story" subtitle="Built for scale, designed for simplicity." />
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            SalesArck was founded by technology veterans who saw a gap in the market: enterprise-grade tools were too complex for mid-market retail and hospitality, while small business tools lacked the power needed to truly scale. We bridge that gap, providing sophisticated, white-label loyalty software without the typical vendor lock-in or custom development overhead. 
            <br/><br/>
            Today, our platform processes countless transactions while our consulting arm secures Microsoft 365 environments for businesses looking to modernize their operations end-to-end.
          </p>
        </div>
      </section>
    </div>
  );
}
