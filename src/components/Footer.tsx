import Link from 'next/link';
import { Button } from './ui/AnimatedButton';

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <span className="font-bold text-2xl tracking-tight text-white">Sales<span className="text-primary">Arck</span></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Powering customer loyalty and modern workplace transformation with enterprise-grade reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 shrink-0">
              <li>
                <Link href="/loyalty-rewards" className="text-muted-foreground hover:text-white transition-colors text-sm">Loyalty Rewards</Link>
              </li>
              <li>
                <Link href="/microsoft-365-consulting" className="text-muted-foreground hover:text-white transition-colors text-sm">Microsoft 365</Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-white transition-colors text-sm">Managed Services</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-muted-foreground hover:text-white transition-colors text-sm">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-muted-foreground hover:text-white transition-colors text-sm">Contact Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-white transition-colors text-sm">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get updates on loyalty programs and Microsoft 365 tips.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-background border border-border rounded-lg px-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <Button variant="primary" className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SalesArck. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="mailto:info@salesarck.com" className="text-muted-foreground hover:text-white transition-colors text-sm">
              info@salesarck.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
