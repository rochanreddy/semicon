"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Management", href: "/management" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "enroll courses", href: "/enroll" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-electric/10 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-electric p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-electric/20">
          </div>
          <span
            className={cn(
              "font-heading font-bold text-xl tracking-tighter transition-colors",
              scrolled ? "text-electric" : "text-electric"
            )}
          >
            SEMICONTECH<span className="text-white"></span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-electric",
                pathname === item.href ? "text-electric" : "text-electric/80"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button className="bg-electric text-white hover:bg-electric/90 font-bold rounded-full px-6 shadow-md shadow-electric/10">
            Talk to Experts
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-electric"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-electric/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-bold py-2 border-b border-slate-100",
                  pathname === item.href ? "text-electric" : "text-electric/80"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-electric text-white hover:bg-electric/90 font-bold w-full mt-2 rounded-full py-6">
              Talk to Experts
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
