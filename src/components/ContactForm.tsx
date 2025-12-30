"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <img src="/images/undraw_project-complete_1zw5.svg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Get in <span className="text-electric">Touch</span>
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto text-lg">
            Have questions or ready to start your next project? Reach out to our team of experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-electric/10 shadow-lg hover:shadow-xl hover:border-electric/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric/10 to-electric/5 flex items-center justify-center group-hover:from-electric group-hover:to-electric/80 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-electric group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-sm font-bold text-electric mb-2">Bengaluru Office</p>
                    <p className="text-sm text-navy/70 leading-relaxed">
                      Solitaire Building, 110/37, 1st Floor<br />
                      Marathahalli Outer Ring Rd, Marathahalli<br />
                      Bengaluru, Karnataka 560037
                    </p>
                  </div>
                  <div className="pt-2 border-t border-electric/5">
                    <p className="text-sm font-bold text-electric mb-2">Hyderabad Office</p>
                    <p className="text-sm text-navy/70 leading-relaxed">
                      Swathi Plaza Plot No. 1 & 25<br />
                      Madeenaguda Village, Serilingampalle Mandal<br />
                      Hyderabad, Telangana 500049
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-electric/10 shadow-lg hover:shadow-xl hover:border-electric/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric/10 to-electric/5 flex items-center justify-center group-hover:from-electric group-hover:to-electric/80 transition-all duration-300">
                  <Mail className="w-6 h-6 text-electric group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">Email</p>
                  <a href="mailto:info@semicontechs.com" className="text-sm text-electric hover:text-electric/80 transition-colors font-medium">
                    info@semicontechs.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-electric/10 shadow-lg hover:shadow-xl hover:border-electric/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric/10 to-electric/5 flex items-center justify-center group-hover:from-electric group-hover:to-electric/80 transition-all duration-300">
                  <Phone className="w-6 h-6 text-electric group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy mb-1">Phone</p>
                  <a href="tel:+919057880578" className="text-sm text-electric hover:text-electric/80 transition-colors font-medium">
                    +91 90578 80578
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-electric/10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-navy font-semibold text-sm">
                      Full Name <span className="text-electric">*</span>
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="h-12 bg-white border-electric/20 focus:border-electric focus:ring-2 focus:ring-electric/20 rounded-xl transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-navy font-semibold text-sm">
                      Email <span className="text-electric">*</span>
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="h-12 bg-white border-electric/20 focus:border-electric focus:ring-2 focus:ring-electric/20 rounded-xl transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone" className="text-navy font-semibold text-sm">
                    Phone Number
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 90578 80578"
                    className="h-12 bg-white border-electric/20 focus:border-electric focus:ring-2 focus:ring-electric/20 rounded-xl transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-navy font-semibold text-sm">
                    Message <span className="text-electric">*</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-36 bg-white border-electric/20 focus:border-electric focus:ring-2 focus:ring-electric/20 rounded-xl resize-none transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric to-electric/90 text-white hover:from-electric/90 hover:to-electric font-bold rounded-xl px-8 h-14 text-base shadow-lg shadow-electric/25 hover:shadow-xl hover:shadow-electric/30 transition-all duration-300"
                >
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
