import Link from 'next/link';
import { Button } from './ui/AnimatedButton';

export default function Footer() {
  return (
    <footer className="footer bg-charcoal text-cream relative rounded-t-[4rem] px-8 pt-24 pb-12 mt-20 z-50 shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.5)]">
      
      {/* Visual noise overlay specific to footer */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none rounded-t-[4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-bold text-3xl tracking-tight mb-6">Sales<span className="opacity-70">Arck</span></h3>
            <p className="font-drama text-2xl text-cream/70 italic max-w-sm">
              Architecting precision loyalty rules and digital infrastructure for modern enterprises.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-moss">INTELLIGENCE</h4>
            <ul className="space-y-4">
              <li><Link href="/loyalty-rewards" className="text-cream/70 hover:text-clay transition-colors">Rule Engines</Link></li>
              <li><Link href="/loyalty-rewards" className="text-cream/70 hover:text-clay transition-colors">Tier Orchestration</Link></li>
              <li><Link href="/microsoft-365-consulting" className="text-cream/70 hover:text-clay transition-colors">Cloud Audit</Link></li>
              <li><Link href="/about-us" className="text-cream/70 hover:text-clay transition-colors">Manifesto</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 tracking-wide text-moss">SYSTEM</h4>
            <ul className="space-y-4">
              <li><Link href="/contact-us" className="text-cream/70 hover:text-clay transition-colors">Documentation</Link></li>
              <li><Link href="/contact-us" className="text-cream/70 hover:text-clay transition-colors">Support Matrix</Link></li>
            </ul>
            <div className="mt-8 flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-telemetry tracking-widest text-green-500">SYSTEM OPERATIONAL</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-cream/50">&copy; {new Date().getFullYear()} SalesArck. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-cream/50 hover:text-cream transition-colors">Privacy Lexicon</Link>
            <Link href="/terms" className="text-sm text-cream/50 hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
