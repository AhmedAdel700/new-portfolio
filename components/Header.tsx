'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Fallback for Home section when at the very top
            if (window.scrollY < 100) {
                setActiveSection('Home');
            }
        };

        // Intersection Observer for sections
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle of the screen
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
        
        // Target sections
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
        <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 flex justify-center pointer-events-none ${scrolled ? 'pt-4' : 'pt-8'}`}>
            <nav className={`
                w-full max-w-[1450px] mx-6 flex items-center justify-between px-10 py-4 transition-all duration-700 pointer-events-auto
                ${scrolled 
                    ? 'bg-[#030014]/60 backdrop-blur-[20px] rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]' 
                    : 'bg-transparent border-transparent'}
            `}>
                {/* Logo - Sleek & Modern */}
                <Link href="/" className="group flex items-center gap-2">
                    <div className="relative">
                        <span className="text-white font-black text-2xl tracking-tighter transition-all duration-500 group-hover:tracking-normal">DEV</span>
                        <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-[#7FFFD4] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7FFFD4] shadow-[0_0_15px_#7FFFD4] animate-pulse" />
                </Link>

                {/* Modern Nav Island */}
                <div className="flex items-center gap-2 p-1.5 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-sm shadow-inner">
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

                {/* Mobile Menu Icon (Refined) */}
                <button className="lg:hidden flex flex-col gap-1.5 group p-2">
                    <div className="w-6 h-[1.5px] bg-white group-hover:bg-[#7FFFD4] transition-colors" />
                    <div className="w-4 h-[1.5px] bg-[#7FFFD4] ml-auto group-hover:w-6 transition-all" />
                </button>
            </nav>
        </header>
    );
}