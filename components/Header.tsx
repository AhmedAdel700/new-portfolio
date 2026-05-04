'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// ─── Static data ───────────────────────────────────────────────────────────────
const NAV_LINKS = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Gallery', href: '/gallery', id: 'gallery' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
] as const;

type NavLink = typeof NAV_LINKS[number];
const HOME_SECTION_IDS = ['home', 'about', 'projects', 'contact'] as const;

// ─── Scroll helper ─────────────────────────────────────────────────────────────
const HEADER_OFFSET = 100; // keep in sync with header height

function scrollToSection(id: string): void {
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    const el = document.getElementById(id);
    if (!el) return;

    const scrollMargin = parseInt(getComputedStyle(el).scrollMarginTop, 10) || 0;
    if (scrollMargin > 0) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const pendingSectionRef = useRef<string | null>(null);
    const suppressObserverUntil = useRef(0);

    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState<string>('home');

    // Route-aware base active state
    useEffect(() => {
        if (pathname === '/gallery') {
            setActiveId('gallery');
            return;
        }
        if (pathname !== '/') {
            setActiveId('home');
            return;
        }

        const pendingSection = pendingSectionRef.current;
        if (pendingSection) {
            setActiveId(pendingSection);
            suppressObserverUntil.current = Date.now() + 900;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => scrollToSection(pendingSection));
            });
            pendingSectionRef.current = null;
            return;
        }

        if (window.scrollY < 24) {
            setActiveId('home');
        }
    }, [pathname]);

    // Scroll-position active state for home sections (switches earlier than observer)
    useEffect(() => {
        if (pathname !== '/') return;

        const ANCHOR_OFFSET = 140;

        const updateActiveFromScroll = () => {
            if (Date.now() < suppressObserverUntil.current) return;

            const anchorY = window.scrollY + ANCHOR_OFFSET;
            let nextActive: string = 'home';

            for (const id of HOME_SECTION_IDS) {
                if (id === 'home') continue;
                const section = document.getElementById(id);
                if (!section) continue;
                if (section.offsetTop <= anchorY) {
                    nextActive = id;
                }
            }

            setActiveId((prev) => (prev === nextActive ? prev : nextActive));
        };

        updateActiveFromScroll();
        window.addEventListener('scroll', updateActiveFromScroll, { passive: true });
        window.addEventListener('resize', updateActiveFromScroll);
        return () => {
            window.removeEventListener('scroll', updateActiveFromScroll);
            window.removeEventListener('resize', updateActiveFromScroll);
        };
    }, [pathname]);

    // ── Scroll shadow ─────────────────────────────────────────────────────────
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // ── Lock body scroll when mobile menu is open ─────────────────────────────
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    // ── Navigation handler ────────────────────────────────────────────────────
    const handleNavClick = useCallback(
        (e: MouseEvent<HTMLAnchorElement>, link: NavLink) => {
            setIsMenuOpen(false);

            if (link.id === 'gallery') {
                setActiveId('gallery');
                pendingSectionRef.current = null;
                return;
            }

            e.preventDefault();
            setActiveId(link.id);
            suppressObserverUntil.current = Date.now() + 900;

            if (link.id === 'home') {
                pendingSectionRef.current = null;
                if (pathname !== '/') {
                    router.push('/');
                } else {
                    scrollToSection('home');
                }
                return;
            }

            if (pathname === '/') {
                scrollToSection(link.id);
            } else {
                pendingSectionRef.current = link.id;
                router.push('/');
            }
        },
        [pathname, router],
    );

    // ─── Render ───────────────────────────────────────────────────────────────
    return (
        <header
            className={`
                fixed top-0 left-0 right-0 z-[200] flex justify-center pointer-events-none
                transition-all duration-700
                ${isMenuOpen ? 'pt-0' : scrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-8'}
            `}
        >
            {/* ── Mobile fullscreen overlay ── */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-[150] lg:hidden bg-[#030014]/98 flex flex-col pointer-events-auto"
                    >
                        <div className="h-[80px] md:h-[112px]" />

                        <div className="flex-1 flex flex-col justify-center px-10 gap-8">
                            <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mb-4">
                                Navigation
                            </p>

                            {NAV_LINKS.map((link, index) => {
                                const isActive = activeId === link.id;
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
                                                relative text-5xl md:text-7xl font-black tracking-tighter uppercase
                                                transition-all duration-300 flex items-center group
                                                ${isActive ? 'text-white' : 'text-white/20 hover:text-white/60'}
                                            `}
                                            onClick={(e) => handleNavClick(e, link)}
                                        >
                                            <div className={`
                                                w-0 h-[3px] bg-[#7FFFD4] transition-all duration-500 mr-0 opacity-0
                                                ${isActive
                                                    ? 'w-12 mr-6 opacity-100'
                                                    : 'group-hover:w-8 group-hover:mr-4 group-hover:opacity-50'
                                                }
                                            `} />
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="p-10 border-t border-white/5 bg-white/[0.02]"
                        >
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                <div>
                                    <p className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase mb-4">
                                        Availability
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="w-2 h-2 rounded-full bg-[#7FFFD4] animate-pulse shadow-[0_0_8px_#7FFFD4]" />
                                        <span className="text-white text-xs font-bold uppercase tracking-widest">
                                            Available for new projects
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    {[
                                        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-adel-232272283' },
                                        { label: 'GitHub', href: 'https://github.com/AhmedAdel700' },
                                        { label: 'WhatsApp', href: 'https://wa.me/201283910247' },
                                    ].map(({ label, href }) => (
                                        <Link
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/40 hover:text-[#7FFFD4] text-xs font-bold uppercase tracking-widest transition-colors"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Nav bar ── */}
            <nav
                aria-label="Main Navigation"
                className={`
                    relative w-full transition-all duration-700 pointer-events-auto
                    flex items-center justify-between z-[210]
                    ${isMenuOpen
                        ? 'bg-[#030014] border-b border-white/10 px-6 py-6 md:px-10 md:py-8'
                        : `mx-4 md:mx-6 max-w-[1450px] px-6 md:px-10 py-3 md:py-4 ${scrolled
                            ? 'bg-[#030014]/90 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]'
                            : 'bg-transparent border-transparent'
                        }`
                    }
                `}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="pointer-events-auto flex items-center"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="text-white text-xl md:text-2xl font-bold tracking-tight me-1">Ahmed </span>
                    <span className="text-[#7FFFD4] text-xl md:text-2xl font-bold tracking-tight">Adel</span>
                </Link>

                {/* Desktop pill nav */}
                <div className="hidden lg:flex items-center gap-2 p-1.5 bg-white/[0.05] border border-white/5 rounded-full shadow-inner">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeId === link.id;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={`
                                    relative px-6 py-2.5 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase
                                    transition-all duration-500
                                    ${isActive ? 'text-white' : 'text-white/40 hover:text-white'}
                                `}
                                onClick={(e) => handleNavClick(e, link)}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavIndicator"
                                        className="absolute inset-0 rounded-full border border-[#7FFFD4]/30 bg-white/5 shadow-[0_0_15px_rgba(127,255,212,0.15)]"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile toggle */}
                <button
                    aria-label="Toggle Navigation Menu"
                    aria-expanded={isMenuOpen}
                    className="lg:hidden text-white/70 hover:text-[#7FFFD4] transition-colors p-2"
                    onClick={() => setIsMenuOpen((o) => !o)}
                >
                    {isMenuOpen
                        ? <X aria-hidden="true" className="w-6 h-6" />
                        : <Menu aria-hidden="true" className="w-6 h-6" />
                    }
                </button>
            </nav>
        </header>
    );
}