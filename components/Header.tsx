'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            if (window.scrollY < 100) {
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
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex justify-center pointer-events-none ${scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-8'}`}>
            <nav className={`
                relative w-full max-w-[1450px] mx-4 md:mx-6 flex items-center justify-between px-6 md:px-10 py-3 md:py-4 transition-all duration-700 pointer-events-auto
                ${scrolled 
                    ? 'bg-[#030014]/60 backdrop-blur-[20px] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]' 
                    : 'bg-transparent border-transparent'}
            `}>
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative">
                        <span className="text-white font-black text-xl md:text-2xl tracking-tighter transition-all duration-500 group-hover:tracking-normal">DEV</span>
                        <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#7FFFD4] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </div>
                    <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#7FFFD4] shadow-[0_0_15px_#7FFFD4] animate-pulse" />
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

                {/* Mobile Menu Drawer */}
                <div className={`
                    absolute top-full left-0 right-0 mt-4 p-8 lg:hidden
                    bg-[#030014]/95 backdrop-blur-2xl rounded-[2rem] border border-white/10
                    transition-all duration-500 transform origin-top
                    ${isMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}
                `}>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.name;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        text-lg font-bold tracking-[0.2em] uppercase transition-all duration-300
                                        ${isActive ? 'text-[#7FFFD4]' : 'text-white/40 hover:text-white'}
                                    `}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/5">
                        <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mb-4">Availability</p>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#7FFFD4] animate-pulse shadow-[0_0_8px_#7FFFD4]" />
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Available for projects</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}