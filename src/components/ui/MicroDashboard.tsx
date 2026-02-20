"use client";

import { useEffect, useRef, useState } from 'react';
import { MousePointer2 } from 'lucide-react';
import gsap from 'gsap';

// --- Card 1: Diagnostic Shuffler ---
function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: "LTV Optimization", metric: "+42%", color: "text-clay" },
    { id: 2, label: "Fraud Detection", metric: "Active", color: "text-moss" },
    { id: 3, label: "Tier Upgrades", metric: "2,491", color: "text-charcoal" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newCards = [...prev];
        const last = newCards.pop();
        if (last) newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-48 w-full flex items-center justify-center perspective-[1000px]">
      {cards.map((card, i) => {
        const isTop = i === 0;
        return (
          <div
            key={card.id}
            className={`absolute w-11/12 bg-white rounded-2xl p-6 shadow-xl border border-black/5 flex justify-between items-center transition-all duration-700`}
            style={{
              transform: `translateY(${i * 12}px) scale(${1 - i * 0.05}) translateZ(${-i * 50}px)`,
              opacity: 1 - i * 0.2,
              zIndex: 10 - i,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <span className="font-semibold text-sm">{card.label}</span>
            <span className={`font-telemetry font-bold ${card.color} ${isTop ? 'opacity-100' : 'opacity-0'}`}>
              {card.metric}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// --- Card 2: Telemetry Typewriter ---
function TelemetryTypewriter() {
  const [text, setText] = useState("");
  const messages = [
    "Compiling MS365 Migration Protocol...",
    "Analyzing Transaction Delta...",
    "Securing Cloud Infrastructure...",
    "Calculating Point Multipliers..."
  ];
  
  useEffect(() => {
    let msgIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentMsg = messages[msgIndex];
      
      if (isDeleting) {
        setText(currentMsg.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentMsg.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 30 : 50;

      if (!isDeleting && charIndex === currentMsg.length) {
        speed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
        speed = 500;
      }

      timeout = setTimeout(type, speed);
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-48 w-full bg-[#111] rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-telemetry text-green-500 tracking-wider">LIVE FEED</span>
      </div>
      <div className="font-telemetry text-sm text-cream/90 h-10 mt-auto">
        {text}
        <span className="animate-pulse inline-block w-2 bg-clay ml-1 h-4 align-middle" />
      </div>
    </div>
  );
}

// --- Card 3: Adaptive Regimen (Scheduler) ---
function ProtocolScheduler() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<SVGSVGElement>(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState<number | null>(null);

  useEffect(() => {
    if (!cursorRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Enter
      tl.set(cursorRef.current, { x: 150, y: 150, opacity: 0 })
        .to(cursorRef.current, { x: 100, y: 100, opacity: 1, duration: 0.8, ease: "power2.out" })
        // Move to Tuesday (index 2)
        .to(cursorRef.current, { x: 80, y: 60, duration: 1, ease: "power2.inOut" })
        // Click down
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, onComplete: () => setActiveDay(2) })
        // Click up
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        // Wait
        .to(cursorRef.current, { x: 80, y: 60, duration: 0.5 })
        // Move to Save button
        .to(cursorRef.current, { x: 120, y: 130, duration: 1, ease: "power2.inOut" })
        // Click Save
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, onComplete: () => setActiveDay(null) })
        .to(cursorRef.current, { scale: 1, duration: 0.1 })
        // Exit
        .to(cursorRef.current, { y: 200, opacity: 0, duration: 0.8, ease: "power2.in" });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="h-48 w-full bg-moss rounded-2xl p-6 relative overflow-hidden border border-white/10 flex flex-col justify-between">
      <div className="flex justify-between items-center w-full max-w-[200px] mx-auto">
        {days.map((d, i) => (
          <div 
            key={i} 
            className={`w-6 h-6 rounded flex items-center justify-center text-xs font-semibold font-telemetry transition-colors duration-300 ${activeDay === i ? 'bg-clay text-cream' : 'text-cream/40'}`}
          >
            {d}
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-auto">
        <div className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-cream">
          Save Protocol
        </div>
      </div>

      <MousePointer2 
        ref={cursorRef} 
        className="absolute w-5 h-5 text-cream drop-shadow-md z-10" 
        style={{ fill: "white" }}
      />
    </div>
  );
}


export function MicroDashboard() {
  return (
    <section className="py-32 bg-cream text-charcoal rounded-t-[3rem] -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            The Precision Micro-UI Dashboard
          </h2>
          <p className="font-drama italic text-2xl text-charcoal/70">
            Interactive functional artifacts orchestrating loyalty intelligence and workspace telemetry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#EBE9E0] p-6 pb-0 rounded-[2rem] flex flex-col gap-8 shadow-sm border border-black/5 hover:border-black/10 transition-colors">
            <div>
              <h3 className="text-lg font-semibold mb-1">Loyalty Intelligence</h3>
              <p className="text-sm text-charcoal/60">Dynamic rule engine orchestration.</p>
            </div>
            <DiagnosticShuffler />
          </div>

          {/* Card 2 */}
          <div className="bg-[#EBE9E0] p-6 pb-0 rounded-[2rem] flex flex-col gap-8 shadow-sm border border-black/5 hover:border-black/10 transition-colors">
            <div>
              <h3 className="text-lg font-semibold mb-1">System Telemetry</h3>
              <p className="text-sm text-charcoal/60">Live Microsoft 365 cloud monitoring.</p>
            </div>
            <div className="pb-6">
              <TelemetryTypewriter />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#EBE9E0] p-6 pb-0 rounded-[2rem] flex flex-col gap-8 shadow-sm border border-black/5 hover:border-black/10 transition-colors">
            <div>
              <h3 className="text-lg font-semibold mb-1">Adaptive Regimen</h3>
              <p className="text-sm text-charcoal/60">Automated campaign scheduler.</p>
            </div>
            <div className="pb-6">
              <ProtocolScheduler />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
