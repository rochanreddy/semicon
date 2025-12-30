"use client";

import { motion } from "framer-motion";
import { 
  Cpu, 
  Layers, 
  Microchip, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Users, 
  Trophy, 
  Globe2,
  ArrowRight
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { Banner } from "@/components/Banner";
import { TopCourses } from "@/components/TopCourses";
import { ServiceCard } from "@/components/ServiceCard";
import { ExpertCard } from "@/components/ExpertCard";
import { StatCounter } from "@/components/StatCounter";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Semiconductor Solutions",
    description: "End-to-end chip design from concept to tape-out, focusing on performance, power, and area (PPA) optimization.",
    icon: Microchip,
  },
  {
    title: "VLSI Design & Verification",
    description: "Cutting-edge RTL design, functional verification, and physical implementation for complex digital systems.",
    icon: Layers,
  },
  {
    title: "Embedded Systems",
    description: "Robust firmware and driver development for IoT, automotive, and industrial automation platforms.",
    icon: Cpu,
  },
  {
    title: "Software Development",
    description: "High-performance software engineering for hardware-software co-design and system integration.",
    icon: Code2,
  },
  {
    title: "Testing & Validation",
    description: "Rigorous post-silicon validation and compliance testing to ensure zero-defect quality.",
    icon: ShieldCheck,
  },
];

const reasons = [
  {
    title: "Expertise",
    description: "Decades of collective experience in advanced node technologies (7nm, 5nm, 3nm).",
    icon: Trophy,
  },
  {
    title: "Innovation",
    description: "Proprietary methodologies that reduce time-to-market by up to 30%.",
    icon: Zap,
  },
  {
    title: "Global Scale",
    description: "Serving tier-1 semiconductor giants across North America, Europe, and Asia.",
    icon: Globe2,
  },
  {
    title: "Client-Centric",
    description: "Customized engagement models tailored to your specific project needs and timelines.",
    icon: Users,
  },
];

const experts = [
  {
    name: "Dr. Sarah Chen",
    role: "Head of VLSI Design",
    expertise: "7nm/5nm FinFET Optimization",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Verification Engineer",
    expertise: "UVM & Formal Verification",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Dr. James Wilson",
    role: "Embedded Systems Architect",
    expertise: "RTOS & Automotive Safety",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    name: "Elena Petrova",
    role: "Physical Design Manager",
    expertise: "STA & Clock Tree Synthesis",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    linkedin: "#",
  },
];

const stats = [
  { value: 15, label: "Years of Experience", suffix: "+" },
  { value: 500, label: "Engineers", suffix: "+" },
  { value: 200, label: "Projects Delivered", suffix: "+" },
  { value: 50, label: "Global Clients", suffix: "+" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background">
      <Hero />
      <Banner />

      {/* Top Courses Section */}
      <TopCourses />

      {/* Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-navy mb-4"
            >
              Our Core <span className="text-electric">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-navy/60 max-w-2xl mx-auto"
            >
              Comprehensive engineering solutions spanning the entire semiconductor lifecycle.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                {...service} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-lite-blue/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="mb-6 w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Our VLSI <span className="text-electric">Experts</span></h2>
            <p className="text-navy/60 max-w-2xl mx-auto">Meet the visionaries engineering the next generation of semiconductor technology.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <ExpertCard 
                key={expert.name} 
                {...expert} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-lite-blue/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter 
                key={stat.label} 
                {...stat} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-electric/5 blur-3xl rounded-full translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-white backdrop-blur-xl border border-electric/10 rounded-[2.5rem] shadow-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8">
              Let&apos;s Build the <span className="text-electric">Next Generation</span> of Semiconductor Solutions
            </h2>
            <Button size="lg" className="bg-electric text-white hover:bg-electric/90 font-bold rounded-full px-12 h-16 text-xl shadow-[0_10px_30px_rgba(0,102,255,0.2)]">
              Contact Our Team <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
