"use client";

import Link from 'next/link';
import { Button } from './ui/AnimatedButton';
import { Menu } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Transition from transparent to white glassmorphism
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          className: 'bg-white/80 backdrop-blur-md border-border/20 text-moss shadow-lg',
          targets: navRef.current
        },
        onToggle: (self) => {
          if (navRef.current) {
            if (self.isActive) {
              gsap.to(navRef.current, { color: '#2E4036', duration: 0.3 });
            } else {
              gsap.to(navRef.current, { color: '#ffffff', duration: 0.3 });
            }
          }
        }
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header 
        ref={navRef}
        className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-4 rounded-[3rem] transition-all duration-300 border border-transparent text-white bg-transparent"
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-xl tracking-tight">Sales<span className="opacity-70">Arck</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/loyalty-rewards" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity">
            Intelligence
          </Link>
          <Link href="/microsoft-365-consulting" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity">
            Protocols
          </Link>
          <Link href="/about-us" className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity">
            Manifesto
          </Link>
        </nav>

        {/* CTA & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact-us">
              <Button className="bg-clay text-cream hover:bg-clay/90 rounded-full px-6 py-2 border-none">
                Join Waitlist
              </Button>
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button type="button" className="p-2 opacity-80 hover:opacity-100">
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
