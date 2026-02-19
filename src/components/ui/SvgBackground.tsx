"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function SvgBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.15]">
      {/* Huge subtle glowing orb */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute -top-[30vh] -left-[20vw] w-[80vw] h-[80vw] rounded-full blur-[120px] bg-primary/20" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40vh] -right-[20vw] w-[60vw] h-[60vw] rounded-full blur-[100px] bg-accent/20" 
      />
      
      {/* Futuristic Isometric Grid */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(3)',
          transformOrigin: 'top center',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)'
        }}
      />
      
      {/* Topographic Lines Overlay (D3 vibe) */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path d="M-100 200c150 50, 300 -100, 500 0c200 100, 400 -50, 600 -100" stroke="#3b82f6" fill="none" strokeWidth="1" filter="url(#glow)"/>
        <path d="M0 400c200 -150, 400 100, 700 50c300 -50, 500 150, 800 50" stroke="#8b5cf6" fill="none" strokeWidth="0.5" filter="url(#glow)"/>
      </svg>
    </div>
  );
}
