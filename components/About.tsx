'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import {
    Code2,
    Terminal,
    Layers,
    Layout,
    Server,
    GitBranch,
    Palette,
    Command,
    Zap,
    Star,
    Activity,
    Monitor,
    ShieldCheck,
    Cpu
} from 'lucide-react';

const ColorBends = dynamic(() => import('./ColorBends'), { ssr: false });

export default function About() {
    const technicalPillars = [
        {
            title: "Frontend Architecture",
            subtitle: "Frameworks & Ecosystem",
            icon: <Layout className="w-8 h-8 text-[#7FFFD4]" />,
            description: "Architecting high-performance interfaces with modern React frameworks and state management systems.",
            skills: ["React.Js", "Next.Js", "Vue.Js", "Redux Toolkit", "React Router"],
            accent: "from-[#7FFFD4] to-emerald-500"
        },
        {
            title: "Core Engineering",
            subtitle: "Languages & Logic",
            icon: <Terminal className="w-8 h-8 text-[#7FFFD4]" />,
            description: "Developing type-safe, scalable logic using modern JavaScript and TypeScript standards.",
            skills: ["JavaScript (ES6+)", "TypeScript", "Node.Js", "Express.Js"],
            accent: "from-blue-400 to-cyan-500"
        },
        {
            title: "UI Design & Ops",
            subtitle: "Styling & Workflow",
            icon: <Palette className="w-8 h-8 text-[#7FFFD4]" />,
            description: "Crafting beautiful, responsive UI systems and managing delivery with agile methodologies.",
            skills: ["Tailwind CSS", "SCSS", "ShadCN", "Figma", "Git / GitLab", "Agile (Scrum)"],
            accent: "from-purple-400 to-pink-500"
        }
    ];

    return (
        <section id="about" className="relative w-full py-10 md:py-20 bg-[#030014] overflow-hidden selection:bg-[#7FFFD4] selection:text-black">

            {/* Ambient Background ColorBends */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <ColorBends
                    colors={['#7FFFD4', '#030014', '#030014']}
                    rotation={90}
                    speed={0.2}
                    frequency={1}
                    warpStrength={1}
                    mouseInfluence={1}
                    noise={0.15}
                    parallax={0.5}
                    iterations={1}
                    intensity={1.5}
                    bandWidth={6}
                    transparent
                    autoRotate={0}
                    scale={2}
                />
            </div>

            {/* Top Fade to blend with Hero */}
            <div className="absolute top-0 left-0 right-0 h-[20vh] bg-gradient-to-b from-[#030014] to-transparent z-1 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1450px] relative z-10">

                {/* 1. High-Impact Intro Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-20 mb-10 lg:mb-20 items-start">
                    
                    {/* Left: Identity (Col 1-7) */}
                    <div className="col-span-1 lg:col-span-7 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-white/40 text-[11px] md:text-xs font-black tracking-widest uppercase">
                            <Star className="w-3.5 h-3.5 text-[#7FFFD4]" />
                            Profile / Ahmed Adel
                        </div>
                        
                        <h2 className="text-white text-7xl lg:text-8xl 2xl:text-9xl font-black tracking-tighter leading-[0.95] lg:leading-[0.85] uppercase">
                            CREATIVE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">PIONEER</span>
                        </h2>

                        <div className="flex justify-center lg:justify-start gap-12 pt-4">
                            <div className="space-y-1">
                                <p className="text-[#7FFFD4] text-4xl font-black">2+</p>
                                <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase">Years Exp</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-white text-4xl font-black">24/7</p>
                                <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase">Passion</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Narrative Bio (Col 8-12) */}
                    <div className="col-span-1 lg:col-span-5 space-y-10 pt-4 lg:pt-16">
                        <div className="space-y-8">
                            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light text-center lg:text-left">
                                I specialize in building <span className="text-[#7FFFD4] font-medium">high-performance web solutions</span> where technical precision meets modern aesthetics.
                            </p>
                            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                                Focused on the modern React ecosystem, I solve critical technical challenges with clean architecture and human-centric design.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/5">
                            <div className="space-y-3 text-center lg:text-left">
                                <h4 className="text-[#7FFFD4] font-bold text-[10px] uppercase tracking-[0.2em]">Communication</h4>
                                <p className="text-white/30 text-xs leading-relaxed">Collaborative storytelling and cross-functional team alignment.</p>
                            </div>
                            <div className="space-y-3 text-center lg:text-left">
                                <h4 className="text-[#7FFFD4] font-bold text-[10px] uppercase tracking-[0.2em]">Problem Solving</h4>
                                <p className="text-white/30 text-xs leading-relaxed">Analytical approach to complex engineering obstacles.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Simplified Technical Pillars */}
                <div className="space-y-12 md:space-y-20">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <div className="space-y-4 text-center lg:text-left">
                            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase">Technical Arsenal</h3>
                            <p className="text-white/30 text-[10px] sm:text-xs md:text-sm max-w-md uppercase tracking-wider font-medium">Categorized expertise for high-performance delivery.</p>
                        </div>
                        <div className="hidden lg:block h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-20 mb-5" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {technicalPillars.map((pillar, i) => (
                            <div
                                key={i}
                                className="group relative p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] bg-white/[0.02] border border-white/5 transition-all duration-700 hover:bg-white/[0.04] overflow-hidden flex flex-col justify-between h-full"
                            >
                                {/* Moving Border Beam Effect */}
                                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#7FFFD4_360deg)] animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-20 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-12">
                                        <div className="p-4 rounded-3xl bg-[#7FFFD4]/5 text-[#7FFFD4] border border-[#7FFFD4]/20 group-hover:scale-110 group-hover:bg-[#7FFFD4]/10 transition-all duration-500">
                                            {pillar.icon}
                                        </div>
                                        <ShieldCheck className="text-white/5 w-12 h-12 group-hover:text-[#7FFFD4]/20 transition-colors" />
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <p className="text-[#7FFFD4] text-xs font-black tracking-[0.3em] uppercase">{pillar.subtitle}</p>
                                        <h4 className="text-white text-2xl font-black tracking-tight">{pillar.title}</h4>
                                    </div>

                                    <p className="text-white/40 text-sm leading-relaxed mb-10 group-hover:text-white/60 transition-colors">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div className="relative z-10 flex flex-wrap gap-2 pt-8 border-t border-white/5">
                                    {pillar.skills.map((skill, si) => (
                                        <span key={si} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-white/50 text-[10px] font-bold uppercase tracking-widest hover:border-[#7FFFD4]/40 hover:text-white transition-all cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom corner decorative element */}
                                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.accent} opacity-5 blur-[60px] group-hover:opacity-20 transition-opacity`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}
