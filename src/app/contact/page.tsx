"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "contact@semicoretech.com",
    subDetails: "support@semicoretech.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    subDetails: "Mon-Fri, 9am - 6pm PST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Silicon Valley Way",
    subDetails: "San Jose, CA 95134, USA",
  },
];

export default function ContactPage() {
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
              Get in <span className="text-cyan">Touch</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Ready to engineer the future? Our team of experts is standing by to help you solve your most complex semiconductor challenges.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl"
            >
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/80 ml-1">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-navy/50 border-white/10 h-14 rounded-xl focus:border-cyan focus:ring-1 focus:ring-cyan text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white/80 ml-1">Work Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-navy/50 border-white/10 h-14 rounded-xl focus:border-cyan focus:ring-1 focus:ring-cyan text-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white/80 ml-1">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Tech Innovations Inc." 
                      className="bg-navy/50 border-white/10 h-14 rounded-xl focus:border-cyan focus:ring-1 focus:ring-cyan text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white/80 ml-1">Interested Service</Label>
                    <select 
                      id="service"
                      className="w-full bg-navy/50 border border-white/10 h-14 rounded-xl focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan text-white px-4 appearance-none"
                    >
                      <option value="vlsi">VLSI Design & Verification</option>
                      <option value="embedded">Embedded Systems</option>
                      <option value="semiconductor">Semiconductor Solutions</option>
                      <option value="software">Software Development</option>
                      <option value="testing">Testing & Validation</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/80 ml-1">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project goals and requirements..." 
                    className="bg-navy/50 border-white/10 min-h-[160px] rounded-xl focus:border-cyan focus:ring-1 focus:ring-cyan text-white resize-none"
                  />
                </div>

                <Button className="w-full md:w-auto px-12 h-14 bg-cyan text-navy hover:bg-cyan/90 font-bold rounded-full text-lg shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <div className="space-y-8">
               {contactInfo.map((info, index) => (
                 <motion.div
                   key={info.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan/30 transition-colors group"
                 >
                   <div className="w-12 h-12 rounded-lg bg-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyan group-hover:text-navy transition-all">
                     <info.icon className="w-6 h-6 text-cyan group-hover:text-navy" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                   <p className="text-cyan text-sm mb-1">{info.details}</p>
                   <p className="text-white/40 text-xs">{info.subDetails}</p>
                 </motion.div>
               ))}

               {/* Map Placeholder */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="relative h-64 bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
               >
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" />
                 <div className="absolute inset-0 bg-navy/60" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <MapPin className="w-8 h-8 text-cyan mx-auto mb-2" />
                      <span className="text-white text-sm font-bold">View on Google Maps</span>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-white mb-12">Global <span className="text-cyan">Presence</span></h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { city: "San Jose", region: "North America" },
                { city: "Munich", region: "Europe" },
                { city: "Bangalore", region: "Asia" },
                { city: "Hsinchu", region: "Asia" }
              ].map((location) => (
                <div key={location.city} className="space-y-1">
                  <p className="text-white font-bold text-lg">{location.city}</p>
                  <p className="text-white/40 text-sm">{location.region}</p>
                </div>
              ))}
           </div>
         </div>
      </section>
    </div>
  );
}
