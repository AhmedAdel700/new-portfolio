'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
    </svg>
);

import Image from 'next/image';
import { motion } from 'framer-motion';


const PlasmaWave = dynamic(() => import('./PlasmaWave'), { ssr: false });

export default function Contact() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

    const validate = () => {
        const newErrors: { [key: string]: boolean } = {};
        if (!formData.name.trim()) newErrors.name = true;
        if (!formData.email.trim()) newErrors.email = true;
        if (!formData.subject.trim()) newErrors.subject = true;
        if (!formData.message.trim()) newErrors.message = true;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: false });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validate()) return;
        
        setFormStatus('submitting');
        
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_KEY || '', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setErrors({});
                setTimeout(() => setFormStatus('idle'), 3000);
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error(error);
            alert("Failed To Send Message. Please Try Again Later.");
            setFormStatus('idle');
        }
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
            
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(127,255,212,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />

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
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-white/40 text-[11px] md:text-xs font-black tracking-widest uppercase group/badge transition-colors duration-500 hover:border-[#7FFFD4]/30 mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
                        Contact / Get In Touch
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-white text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.85] uppercase mb-8"
                    >
                        GOT A PROJECT<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">IN MIND?</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed text-left"
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
                        <div className="bg-gradient-to-br from-[#0a0d1a] via-[#030014] to-[#030014] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 hover:border-white/20 transition-all duration-500 relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                            {/* Reflective Glass Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(127,255,212,0.05)_0%,transparent_70%)] -translate-y-1/2 translate-x-1/2 group-hover:bg-[radial-gradient(circle,rgba(127,255,212,0.1)_0%,transparent_70%)] transition-colors duration-500" />
                            
                            <h3 className="text-2xl font-semibold text-white mb-10 relative z-10">Contact Information</h3>
                            
                            <div className="space-y-8 relative z-10">
                                <a href="mailto:ahmedadel.engineer1@gmail.com" className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:bg-[#7FFFD4]/10 group-hover/item:border-[#7FFFD4]/30 group-hover/item:text-[#7FFFD4] text-white/70 transition-all duration-300 shrink-0 shadow-lg">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-[10px] md:text-sm mb-1 uppercase tracking-wider font-medium">Email</p>
                                        <p className="text-white text-sm md:text-base lg:text-lg group-hover/item:text-[#7FFFD4] font-medium transition-colors break-all">ahmedadel.engineer1@gmail.com</p>
                                    </div>
                                </a>
                                
                                <a href="tel:+2001283910247" className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:bg-[#7FFFD4]/10 group-hover/item:border-[#7FFFD4]/30 group-hover/item:text-[#7FFFD4] text-white/70 transition-all duration-300 shrink-0 shadow-lg">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-[10px] md:text-sm mb-1 uppercase tracking-wider font-medium">Phone</p>
                                        <p className="text-white text-sm md:text-base lg:text-lg group-hover/item:text-[#7FFFD4] font-medium transition-colors">+20 128 391 0247</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white/70 shrink-0 shadow-lg">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-[10px] md:text-sm mb-1 uppercase tracking-wider font-medium">Location</p>
                                        <p className="text-white text-sm md:text-base lg:text-lg font-medium">Cairo, Egypt <span className="text-white/40 text-xs md:text-sm font-normal ml-2">Available Worldwide</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Digital Presence Card */}
                        <div className="bg-gradient-to-br from-[#0a0d1a] via-[#030014] to-[#030014] border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                            {/* Reflective Glass Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                            <h3 className="text-xl font-semibold text-white mb-8 uppercase tracking-widest text-sm opacity-70">Digital Presence</h3>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { 
                                        type: 'icon',
                                        icon: LinkedInIcon, 
                                        label: 'LinkedIn', 
                                        href: 'https://www.linkedin.com/in/ahmed-adel-232272283'
                                    },
                                    { 
                                        type: 'icon',
                                        icon: FacebookIcon, 
                                        label: 'Facebook', 
                                        href: 'https://www.facebook.com/ahmed.adel.804171?rdid=o8m9JtSE3PC9XZR1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Hb9xJefuP%2F#'
                                    },
                                    { 
                                        type: 'image',
                                        image: '/assets/github-logo.png', 
                                        label: 'GitHub', 
                                        href: 'https://github.com/AhmedAdel700' 
                                    },
                                    { 
                                        type: 'image',
                                        image: '/assets/whatsapp.png', 
                                        label: 'WhatsApp', 
                                        href: 'https://wa.me/201283910247' 
                                    }
                                ].map((social, i) => {
                                    const IconComponent = social.type === 'icon' ? social.icon : null;
                                    return (
                                        <a 
                                            key={i} 
                                            href={social.href} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label} 
                                            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                        >
                                            {social.type === 'icon' && IconComponent ? (
                                                <IconComponent className="w-8 h-8" />
                                            ) : social.type === 'image' && 'image' in social ? (
                                                <Image 
                                                    src={social.image as string} 
                                                    alt={social.label} 
                                                    width={32} 
                                                    height={32} 
                                                    className="w-8 h-8 object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-all"
                                                />
                                            ) : null}
                                        </a>
                                    );
                                })}
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
                        <div className="bg-gradient-to-br from-[#0a0d1a] via-[#030014] to-[#030014] border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden shadow-2xl">
                            {/* Reflective Glass Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />
                            {/* Top Horizontal Separator (Signature Mint) */}
                            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7FFFD4]/50 to-transparent shadow-[0_0_15px_rgba(127,255,212,0.2)]" />
                            
                            <div className="mb-10">
                                <h3 className="text-3xl font-semibold text-white mb-2 uppercase tracking-tight">Get <span className="text-[#7FFFD4]">In</span> Touch</h3>
                                <p className="text-white/30 text-sm tracking-wide">Ready to build something extraordinary? Drop a line and I'll get back to you within 24 hours.</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label htmlFor="name" className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${errors.name ? 'text-red-400' : 'text-white/40 group-focus-within:text-[#7FFFD4]'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${errors.name ? 'bg-red-400' : 'bg-[#7FFFD4]/20 group-focus-within:bg-[#7FFFD4]'}`} />
                                            Name
                                            {errors.name && <span className="ml-auto text-[8px] font-black tracking-widest text-red-400/50">REQUIRED</span>}
                                        </label>
                                        <input 
                                            id="name"
                                            type="text" 
                                            value={formData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            suppressHydrationWarning
                                            placeholder="Your name..." 
                                            className={`w-full bg-white/[0.03] border rounded-xl px-6 py-4 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:ring-1 transition-all focus:bg-white/[0.05] ${errors.name ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50' : 'border-white/10 focus:ring-[#7FFFD4]/30 focus:border-[#7FFFD4]/30'}`}
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label htmlFor="subject" className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${errors.subject ? 'text-red-400' : 'text-white/40 group-focus-within:text-[#7FFFD4]'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${errors.subject ? 'bg-red-400' : 'bg-[#7FFFD4]/20 group-focus-within:bg-[#7FFFD4]'}`} />
                                            Subject
                                            {errors.subject && <span className="ml-auto text-[8px] font-black tracking-widest text-red-400/50">REQUIRED</span>}
                                        </label>
                                        <input 
                                            id="subject"
                                            type="text" 
                                            value={formData.subject}
                                            onChange={(e) => handleInputChange('subject', e.target.value)}
                                            suppressHydrationWarning
                                            placeholder="What's this about?" 
                                            className={`w-full bg-white/[0.03] border rounded-xl px-6 py-4 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:ring-1 transition-all focus:bg-white/[0.05] ${errors.subject ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50' : 'border-white/10 focus:ring-[#7FFFD4]/30 focus:border-[#7FFFD4]/30'}`}
                                        />
                                    </div>
                                </div>
 
                                 <div className="space-y-2 group">
                                     <label htmlFor="email" className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${errors.email ? 'text-red-400' : 'text-white/40 group-focus-within:text-[#7FFFD4]'}`}>
                                         <span className={`w-1.5 h-1.5 rounded-full transition-colors ${errors.email ? 'bg-red-400' : 'bg-[#7FFFD4]/20 group-focus-within:bg-[#7FFFD4]'}`} />
                                         Email Address
                                         {errors.email && <span className="ml-auto text-[8px] font-black tracking-widest text-red-400/50">REQUIRED</span>}
                                     </label>
                                     <input 
                                         id="email"
                                         type="email" 
                                         value={formData.email}
                                         onChange={(e) => handleInputChange('email', e.target.value)}
                                         suppressHydrationWarning
                                         placeholder="your@email.com" 
                                         className={`w-full bg-white/[0.03] border rounded-xl px-6 py-4 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:ring-1 transition-all focus:bg-white/[0.05] ${errors.email ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50' : 'border-white/10 focus:ring-[#7FFFD4]/30 focus:border-[#7FFFD4]/30'}`}
                                     />
                                 </div>
 
                                 <div className="space-y-2 group">
                                     <label htmlFor="message" className={`flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold ml-1 transition-colors ${errors.message ? 'text-red-400' : 'text-white/40 group-focus-within:text-[#7FFFD4]'}`}>
                                         <span className={`w-1.5 h-1.5 rounded-full transition-colors ${errors.message ? 'bg-red-400' : 'bg-[#7FFFD4]/20 group-focus-within:bg-[#7FFFD4]'}`} />
                                         Message
                                         {errors.message && <span className="ml-auto text-[8px] font-black tracking-widest text-red-400/50">REQUIRED</span>}
                                     </label>
                                     <textarea 
                                         id="message"
                                         value={formData.message}
                                         onChange={(e) => handleInputChange('message', e.target.value)}
                                         suppressHydrationWarning
                                         rows={5} 
                                         placeholder="Tell me about your vision..." 
                                         className={`w-full bg-white/[0.03] border rounded-xl px-6 py-4 text-white text-[15px] placeholder:text-white/25 focus:outline-none focus:ring-1 transition-all resize-none focus:bg-white/[0.05] ${errors.message ? 'border-red-500/50 focus:ring-red-500/30 focus:border-red-500/50' : 'border-white/10 focus:ring-[#7FFFD4]/30 focus:border-[#7FFFD4]/30'}`}
                                     />
                                 </div>

                                <button 
                                    type="submit" 
                                    aria-label="Send Message"
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
