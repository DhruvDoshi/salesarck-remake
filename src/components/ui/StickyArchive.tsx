"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, ShieldCheck, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function StickyArchive() {
  const containerRef = useRef<HTMLElement>(null);
  
  // We need to store refs to individual cards to apply the stacking effect
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  // SVG Artifact refs
  const gearRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const ekgRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Artifact 1: Rotating Gear (The Logic Engine)
      gsap.to(gearRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 20,
        ease: "linear"
      });

      // Artifact 2: Scanning Laser (The Audit Matrix)
      gsap.to(laserRef.current, {
        y: 200,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
      });

      // Artifact 3: Pulsing Waveform (The Performance Pulse)
      gsap.to(ekgRef.current, {
        strokeDashoffset: 0,
        repeat: -1,
        duration: 3,
        ease: "none"
      });

      // STACKING LOGIC
      // Card 1 pins when top reaches top, and stays pinned. When Card 2 arrives, Card 1 scales down and blurs.
      
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
      
      cards.forEach((card, index) => {
        if (!card) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "+=200%", // Keeps it pinned for roughly 2 screen heights
        });

        // If there's a next card, we want the current card to scale and blur as the next card scrolls up
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top bottom",
              end: "top top",
              scrub: true,
            }
          });
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-charcoal text-cream relative z-10">
      
      {/* CARD 1: The Logic Engine */}
      <div 
        ref={card1Ref} 
        className="h-screen w-full flex items-center justify-center p-6 bg-charcoal border-b border-white/5 relative z-[11] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-moss/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-telemetry text-sm text-moss tracking-widest mb-4 block">01 / ARCHIVE</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">The Logic Engine.</h2>
            <p className="font-drama italic text-2xl text-cream/70 leading-relaxed max-w-lg">
              Precision rule orchestration. We build bespoke white-label loyalty software capable of handling multi-tier VIP status and complex point multipliers at scale.
            </p>
          </div>
          <div className="flex justify-center items-center h-96 relative">
            {/* Artifact 1: Rotating Gear */}
            <div className="absolute w-[300px] h-[300px] rounded-full border border-white/10 flex items-center justify-center">
              <div className="absolute w-[200px] h-[200px] rounded-full border border-white/20 border-dashed" />
              <div ref={gearRef} className="w-32 h-32 text-moss opacity-80">
                <Settings className="w-full h-full" strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2: The Audit Matrix */}
      <div 
        ref={card2Ref} 
        className="h-screen w-full flex items-center justify-center p-6 bg-charcoal border-b border-white/5 relative z-[12] top-0 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-clay/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-telemetry text-sm text-clay tracking-widest mb-4 block">02 / ARCHIVE</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">The Audit Matrix.</h2>
            <p className="font-drama italic text-2xl text-cream/70 leading-relaxed max-w-lg">
              Uncompromising cloud infrastructure. Our Microsoft 365 consulting ensures enterprise-grade security and deep compliance scanning across your entire digital surface.
            </p>
          </div>
          <div className="flex justify-center items-center h-96 relative w-full">
            {/* Artifact 2: Scanning Laser over Grid */}
            <div className="relative w-full max-w-[300px] h-[300px] border border-white/10 rounded-3xl overflow-hidden bg-black/50">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
              <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-white/20" strokeWidth={1} />
              <div ref={laserRef} className="absolute top-0 left-0 w-full h-[2px] bg-clay shadow-[0_0_15px_rgba(204,88,51,0.8)]" />
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3: The Performance Pulse */}
      <div 
        ref={card3Ref} 
        className="h-screen w-full flex items-center justify-center p-6 bg-charcoal border-none relative z-[13] top-0 shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-telemetry text-sm text-cream/50 tracking-widest mb-4 block">03 / ARCHIVE</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">The Performance Pulse.</h2>
            <p className="font-drama italic text-2xl text-cream/70 leading-relaxed max-w-lg">
              Data is lifeblood. Real-time API telemetry and dynamic customer lifetime value modeling built directly into your native applications.
            </p>
          </div>
          <div className="flex justify-center items-center h-96 relative w-full">
            {/* Artifact 3: Pulsing Waveform */}
            <div className="relative w-full max-w-[400px] h-[200px] flex items-center justify-center">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                {/* Background faint path */}
                <path d="M 0 100 L 100 100 L 120 50 L 140 150 L 160 30 L 180 180 L 200 80 L 220 120 L 240 100 L 400 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                {/* Animated path */}
                <path 
                  ref={ekgRef}
                  d="M 0 100 L 100 100 L 120 50 L 140 150 L 160 30 L 180 180 L 200 80 L 220 120 L 240 100 L 400 100" 
                  fill="none" 
                  stroke="#2E4036" 
                  strokeWidth="4" 
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                  style={{ filter: "drop-shadow(0 0 8px rgba(46,64,54,0.8))" }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
