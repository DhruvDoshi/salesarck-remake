import Link from 'next/link';
import { Button } from './ui/AnimatedButton';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-shadow duration-300">
                S
              </div>
              <span className="font-bold text-2xl tracking-tight text-foreground">Sales<span className="text-primary">Arck</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/loyalty-rewards" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Loyalty Rewards
            </Link>
            <Link href="/microsoft-365-consulting" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              Microsoft 365
            </Link>
            <Link href="/about-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">
              About Us
            </Link>
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link href="/contact-us">
                <Button variant="primary">Book a Demo</Button>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button type="button" className="text-muted-foreground hover:text-foreground p-2">
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
