"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem, Award, Users2, Rocket } from "lucide-react";

const timeline = [
  { year: "2010", event: "SemicoreTech founded in Silicon Valley with a focus on RTL design." },
  { year: "2013", event: "Expanded services to include Physical Design & Verification." },
  { year: "2016", event: "Established global design centers in Europe and Asia." },
  { year: "2019", event: "Successfully delivered first 7nm FinFET SoC project." },
  { year: "2022", event: "Launched AI-driven verification automation platform." },
  { year: "2024", event: "Leading 3nm node physical implementation for tier-1 clients." },
];

const values = [
  { title: "Excellence", icon: Award, description: "Uncompromising quality in every gate and every line of code." },
  { title: "Innovation", icon: Rocket, description: "Constantly pushing the boundaries of what's possible in silicon." },
  { title: "Integrity", icon: Gem, description: "Transparent, honest partnerships built on mutual trust." },
  { title: "Collaboration", icon: Users2, description: "Working as one team with our clients to achieve success." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-navy">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan">Story</span>
            </h1>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              For over a decade, SemicoreTech has been at the forefront of semiconductor engineering, enabling the world's most innovative companies to bring complex silicon to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-navy border border-white/10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye className="w-32 h-32 text-white" />
            </div>
            <Eye className="w-12 h-12 text-cyan mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/60 leading-relaxed">
              To be the global benchmark for engineering excellence in the semiconductor industry, powering the next generation of intelligent systems that transform human life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 bg-navy border border-white/10 rounded-3xl relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-32 h-32 text-white" />
            </div>
            <Target className="w-12 h-12 text-cyan mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/60 leading-relaxed">
              To deliver high-performance, zero-defect engineering solutions through cutting-edge methodology, unparalleled expertise, and a relentless commitment to client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our <span className="text-cyan">Journey</span></h2>
          <div className="relative">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
             <div className="space-y-12 relative">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className="flex-1 text-center md:text-left hidden md:block" />
                    <div className="w-16 h-16 rounded-full bg-navy border-4 border-cyan flex items-center justify-center relative z-10 shrink-0 shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                      <span className="text-cyan font-bold text-sm">{item.year}</span>
                    </div>
                    <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10">
                      <p className="text-white/70">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-16">Our Core <span className="text-cyan">Values</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {values.map((value, index) => (
               <motion.div
                 key={value.title}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan/50 transition-colors"
               >
                 <value.icon className="w-10 h-10 text-cyan mx-auto mb-6" />
                 <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                 <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
