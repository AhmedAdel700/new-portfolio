'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Link, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';


const PlasmaWave = dynamic(() => import('./PlasmaWave'), { ssr: false });

export default function Contact() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="relative w-full py-10 md:py-20 bg-[#030014] overflow-hidden selection:bg-[#7FFFD4] selection:text-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
                <PlasmaWave
                    colors={['#7FFFD4', '#030014']}
                    speed1={0.005}
                    speed2={0.01}
                    focalLength={0.8}
                />
            </div>
            
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#7FFFD4]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-start text-left mb-12"
                >
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-3 px-3 py-1 md:px-4 md:py-1.5 mb-8 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
                        Let's Connect
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-7xl lg:text-9xl font-black text-white tracking-tight mb-8 leading-[0.9] uppercase"
                    >
                        GOT A PROJECT<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">IN MIND?</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/50 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed"
                    >
                        Whether you have a specific project or just want to explore possibilities, 
                        I'm always open to discussing new ideas and opportunities. Let's build something exceptional together.
                    </motion.p>
                </motion.div>


                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left: Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="lg:col-span-5 flex flex-col gap-8"
                    >
                        {/* Main Contact Card */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7FFFD4]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#7FFFD4]/10 transition-colors duration-500" />
                            
                            <h3 className="text-2xl font-semibold text-white mb-10 relative z-10">Contact Information</h3>
                            
                            <div className="space-y-8 relative z-10">
                                <a href="mailto:hello@example.com" className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:bg-[#7FFFD4]/10 group-hover/item:border-[#7FFFD4]/30 group-hover/item:text-[#7FFFD4] text-white/70 transition-all duration-300 shrink-0 shadow-lg">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm mb-1 uppercase tracking-wider font-medium">Email</p>
                                        <p className="text-white text-lg group-hover/item:text-[#7FFFD4] font-medium transition-colors">hello@example.com</p>
                                    </div>
                                </a>
                                
                                <a href="tel:+201234567890" className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:bg-[#7FFFD4]/10 group-hover/item:border-[#7FFFD4]/30 group-hover/item:text-[#7FFFD4] text-white/70 transition-all duration-300 shrink-0 shadow-lg">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm mb-1 uppercase tracking-wider font-medium">Phone</p>
                                        <p className="text-white text-lg group-hover/item:text-[#7FFFD4] font-medium transition-colors">+20 123 456 7890</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white/70 shrink-0 shadow-lg">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-sm mb-1 uppercase tracking-wider font-medium">Location</p>
                                        <p className="text-white text-lg font-medium">Cairo, Egypt <span className="text-white/40 text-sm font-normal ml-2">Available Worldwide</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Card */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500">
                            <h3 className="text-xl font-semibold text-white mb-8">Follow Me</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: Link, label: 'GitHub', href: '#' },
                                    { icon: Link, label: 'Twitter', href: '#' },
                                    { icon: Link, label: 'LinkedIn', href: '#' },
                                    { icon: Link, label: 'Instagram', href: '#' }
                                ].map((social, i) => (
                                    <a 
                                        key={i} 
                                        href={social.href} 
                                        aria-label={social.label} 
                                        className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-[#7FFFD4] hover:border-[#7FFFD4] hover:text-black text-white/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(127,255,212,0.4)]"
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                        </motion.div>

                    {/* Right: Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                            {/* Decorative top gradient line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7FFFD4]/50 to-transparent opacity-50" />
                            
                            <div className="mb-10">
                                <h3 className="text-3xl font-semibold text-white mb-2">Send a Message</h3>
                                <p className="text-white/40">Fill out the form below and I'll get back to you shortly.</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-white/60 text-[10px] uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Name</label>
                                        <input 
                                            type="text" 
                                            required
                                            suppressHydrationWarning
                                            placeholder="John Doe" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all focus:bg-white/[0.08]"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-white/60 text-[10px] uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Subject</label>
                                        <input 
                                            type="text" 
                                            required
                                            suppressHydrationWarning
                                            placeholder="Project Inquiry" 
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all focus:bg-white/[0.08]"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-white/60 text-[10px] uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Email Address</label>
                                    <input 
                                        type="email" 
                                        required
                                        suppressHydrationWarning
                                        placeholder="john@example.com" 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all focus:bg-white/[0.08]"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-white/60 text-[10px] uppercase tracking-wider font-bold ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Message</label>
                                    <textarea 
                                        required
                                        suppressHydrationWarning
                                        rows={5} 
                                        placeholder="Tell me about your project..." 
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all resize-none focus:bg-white/[0.08]"
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={formStatus !== 'idle'}
                                    suppressHydrationWarning
                                    className={`w-full relative group px-8 py-4 rounded-xl font-bold tracking-wide transition-all duration-300 active:scale-[0.98] cursor-pointer mt-4 overflow-hidden
                                        ${formStatus === 'success' 
                                            ? 'bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)]' 
                                            : 'bg-[#7FFFD4] text-[#030014] shadow-[0_0_20px_rgba(127,255,212,0.2)] hover:shadow-[0_0_40px_rgba(127,255,212,0.4)] hover:-translate-y-0.5'}`}
                                >
                                    {/* Subtle Overlay on hover */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="relative flex items-center justify-center gap-3">
                                        {formStatus === 'idle' && (
                                            <>
                                                <span className="text-base md:text-lg">Send Message</span>
                                                <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </>
                                        )}
                                        {formStatus === 'submitting' && (
                                            <div className="w-6 h-6 border-2 border-[#030014]/30 border-t-[#030014] rounded-full animate-spin" />
                                        )}
                                        {formStatus === 'success' && (
                                            <>
                                                <span className="text-base md:text-lg">Message Sent!</span>
                                                <CheckCircle2 className="w-6 h-6" />
                                            </>
                                        )}
                                    </div>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
