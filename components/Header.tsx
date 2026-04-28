'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';


export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/gallery') {
            setActiveSection('Gallery');
        }

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            if (window.scrollY < 100 && pathname !== '/gallery') {
                setActiveSection('Home');
            }
        };

        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    if (id === 'about') setActiveSection('About');
                    if (id === 'projects') setActiveSection('Projects');
                    if (id === 'contact') setActiveSection('Contact');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        ['about', 'projects', 'contact'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [pathname]);


    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Projects', href: '/#projects' },
        { name: 'Contact', href: '/#contact' },
        ...(pathname === '/gallery' ? [{ name: 'Gallery', href: '/gallery' }] : [])
    ];

    return (
        <header className={`
            fixed top-0 left-0 right-0 z-[200] transition-all duration-700 flex justify-center pointer-events-none 
            ${isMenuOpen ? 'pt-0' : scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-8'}
        `}>
            {/* Mobile Menu Overlay - Fullscreen immersion */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[150] lg:hidden bg-[#030014]/95 backdrop-blur-2xl flex flex-col pointer-events-auto"
                    >
                        {/* Spacer for the expanded header above */}
                        <div className="h-[80px] md:h-[112px]" />

                        {/* Menu Links */}
                        <div className="flex-1 flex flex-col justify-center px-10 gap-8">
                            <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mb-4">Navigation</p>
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.name;
                                return (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`
                                                relative text-5xl md:text-7xl font-black tracking-tighter uppercase transition-all duration-300 flex items-center group
                                                ${isActive ? 'text-white' : 'text-white/20 hover:text-white/60'}
                                            `}
                                            onClick={() => {
                                                setActiveSection(link.name);
                                                setIsMenuOpen(false);
                                            }}
                                        >
                                            {/* Sophisticated "Before" Line */}
                                            <div className={`
                                                w-0 h-[3px] bg-[#7FFFD4] transition-all duration-500 mr-0 opacity-0
                                                ${isActive ? 'w-12 mr-6 opacity-100' : 'group-hover:w-8 group-hover:mr-4 group-hover:opacity-50'}
                                            `} />
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                        
                        {/* Footer Info */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="p-10 border-t border-white/5 bg-white/[0.02]"
                        >
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                <div>
                                    <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mb-4">Availability</p>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#7FFFD4] animate-pulse shadow-[0_0_8px_#7FFFD4]" />
                                        <span className="text-white text-xs font-bold uppercase tracking-widest">Available for new projects</span>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <Link href="#" className="text-white/40 hover:text-[#7FFFD4] text-xs font-bold uppercase tracking-widest transition-colors">LinkedIn</Link>
                                    <Link href="#" className="text-white/40 hover:text-[#7FFFD4] text-xs font-bold uppercase tracking-widest transition-colors">Twitter</Link>
                                    <Link href="#" className="text-white/40 hover:text-[#7FFFD4] text-xs font-bold uppercase tracking-widest transition-colors">GitHub</Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className={`
                relative w-full transition-all duration-700 pointer-events-auto flex items-center justify-between z-[210]
                ${isMenuOpen 
                    ? 'bg-[#030014] border-b border-white/10 px-6 py-6 md:px-10 md:py-8' 
                    : `mx-4 md:mx-6 max-w-[1450px] px-6 md:px-10 py-3 md:py-4 ${scrolled 
                        ? 'bg-[#030014]/60 backdrop-blur-[20px] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]' 
                        : 'bg-transparent border-transparent'}`
                }
            `}>
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative">
                        <span className={`text-white font-black tracking-tighter transition-all duration-500 group-hover:tracking-normal ${isMenuOpen ? 'text-2xl' : 'text-xl md:text-2xl'}`}>DEV</span>
                        <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#7FFFD4] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </div>
                    <span className={`rounded-full bg-[#7FFFD4] shadow-[0_0_15px_#7FFFD4] animate-pulse ${isMenuOpen ? 'w-2.5 h-2.5' : 'w-2 md:w-2.5 h-2 md:h-2.5'}`} />
                </Link>

                {/* Desktop Nav Island */}
                <div className="hidden lg:flex items-center gap-2 p-1.5 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-sm shadow-inner">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.name;
                        return (
                            <Link 
                                key={link.name} 
                                href={link.href}
                                className={`
                                    relative px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-500
                                    ${isActive 
                                        ? 'text-white bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)]' 
                                        : 'text-white/40 hover:text-white hover:bg-white/[0.02]'}
                                `}
                                onClick={() => setActiveSection(link.name)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <div className="absolute inset-0 rounded-full border border-[#7FFFD4]/20 shadow-[inset_0_0_10px_rgba(127,255,212,0.1)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="lg:hidden text-white/70 hover:text-[#7FFFD4] transition-colors p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>
        </header>
    );
}