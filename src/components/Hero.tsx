"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-lite-blue/80 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-electric/10 border border-electric/20 rounded-full px-4 py-1 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
              <span className="text-electric text-xs font-bold tracking-widest uppercase">Next-Gen VLSI Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6 leading-[1.1]">
              Engineering the <span className="text-electric">Future</span> of Semiconductor Innovation
            </h1>
            
            <p className="text-lg md:text-xl text-navy/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Advanced Semiconductor, VLSI, Embedded & Software Engineering solutions for the next generation of technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-electric text-white hover:bg-electric/90 font-bold rounded-full px-8 h-14 text-lg shadow-lg shadow-electric/20">
                Talk to Our Experts <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-electric/20 text-electric hover:bg-electric/5 font-bold rounded-full px-8 h-14 text-lg">
                Explore Our Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                 alt="Semiconductor Chip" 
                 className="rounded-2xl w-full h-auto"
               />
               <button className="absolute inset-0 m-auto w-20 h-20 bg-electric rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,102,255,0.4)] hover:scale-110 transition-transform">
                 <Play className="w-8 h-8 fill-current" />
               </button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-electric/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan/10 rounded-full blur-3xl animate-pulse delay-700" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-navy/40 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-electric to-transparent" />
      </motion.div>
    </section>
  );
}
