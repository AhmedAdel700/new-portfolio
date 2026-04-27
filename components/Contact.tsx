'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Link, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const PlasmaWave = dynamic(() => import('./PlasmaWave'), { ssr: false });

export default function Contact() {
    const [isHovered, setIsHovered] = useState(false);
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
        <section id="contact" className="relative w-full py-32 bg-[#030014] overflow-hidden selection:bg-[#7FFFD4] selection:text-black">
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
                <div className="flex flex-col items-center text-center mb-20 md:mb-28">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md shadow-xl shadow-black/50">
                        <Sparkles className="w-4 h-4 text-[#7FFFD4]" />
                        <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Let's Connect</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                        Got a project in <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">mind?</span>
                    </h2>
                    <p className="text-white/50 text-lg md:text-xl max-w-2xl font-light">
                        Whether you have a specific project or just want to explore possibilities, 
                        I'm always open to discussing new ideas and opportunities.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Left: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {/* Main Contact Card */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500 relative overflow-hidden group">
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
                        <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500">
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
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                            {/* Decorative top gradient line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7FFFD4]/50 to-transparent opacity-50" />
                            
                            <div className="mb-10">
                                <h3 className="text-3xl font-semibold text-white mb-2">Send a Message</h3>
                                <p className="text-white/40">Fill out the form below and I'll get back to you shortly.</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-white/60 text-sm font-medium ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Name</label>
                                        <input 
                                            type="text" 
                                            required
                                            placeholder="John Doe" 
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all focus:bg-white/[0.07]"
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-white/60 text-sm font-medium ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Email</label>
                                        <input 
                                            type="email" 
                                            required
                                            placeholder="john@example.com" 
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all focus:bg-white/[0.07]"
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2 group">
                                    <label className="text-white/60 text-sm font-medium ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Subject</label>
                                    <input 
                                        type="text" 
                                        required
                                        placeholder="Project Inquiry" 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all focus:bg-white/[0.07]"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-white/60 text-sm font-medium ml-1 transition-colors group-focus-within:text-[#7FFFD4]">Message</label>
                                    <textarea 
                                        required
                                        rows={5} 
                                        placeholder="Tell me about your project..." 
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-[#7FFFD4]/50 focus:border-[#7FFFD4]/50 transition-all resize-none focus:bg-white/[0.07]"
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={formStatus !== 'idle'}
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className={`w-full relative group overflow-hidden rounded-2xl p-[1px] transition-all duration-300 mt-4 ${formStatus === 'success' ? 'bg-emerald-500' : 'bg-gradient-to-r from-[#7FFFD4]/50 via-emerald-500/50 to-[#7FFFD4]/50 hover:from-[#7FFFD4] hover:via-emerald-400 hover:to-[#7FFFD4]'}`}
                                >
                                    <div className={`relative flex items-center justify-center gap-3 px-8 py-5 rounded-[15px] transition-all duration-300 ${formStatus === 'success' ? 'bg-emerald-500' : 'bg-[#030014] group-hover:bg-opacity-0'}`}>
                                        {formStatus === 'idle' && (
                                            <>
                                                <span className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${isHovered ? 'text-black' : 'text-white'}`}>
                                                    Send Message
                                                </span>
                                                <Send className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'text-black translate-x-1 -translate-y-1' : 'text-[#7FFFD4]'}`} />
                                            </>
                                        )}
                                        {formStatus === 'submitting' && (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-[#7FFFD4] rounded-full animate-spin" />
                                        )}
                                        {formStatus === 'success' && (
                                            <>
                                                <span className="text-black text-lg font-semibold tracking-wide">Message Sent Successfully!</span>
                                                <CheckCircle2 className="w-6 h-6 text-black" />
                                            </>
                                        )}
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
