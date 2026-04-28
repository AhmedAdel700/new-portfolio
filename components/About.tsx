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

                {/* 2. Dynamic Tech Wall Layout */}
                <div className="overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/5 pb-8">
                        <div className="space-y-4 text-center lg:text-left px-6">
                            <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase">Technical Stack</h3>
                            <p className="text-white/30 text-xs md:text-sm max-w-md uppercase tracking-[0.2em] font-bold">The tools and technologies driving my engineering process.</p>
                        </div>
                    </div>

                    <div className="relative flex flex-col gap-6 py-10">
                        {/* First Row: Moving Left */}
                        <div className="flex gap-6 animate-marquee-left hover:pause-marquee">
                            {[
                                "React.Js", "Next.Js", "TypeScript", "JavaScript",
                                "Tailwind CSS", "Node.Js", "Express.Js", "Redux Toolkit",
                                "Framer Motion", "Three.js", "WebGL", "SCSS",
                                // Duplicate for seamless loop
                                "React.Js", "Next.Js", "TypeScript", "JavaScript",
                                "Tailwind CSS", "Node.Js", "Express.Js", "Redux Toolkit",
                                "Framer Motion", "Three.js", "WebGL", "SCSS"
                            ].map((skill, i) => (
                                <div
                                    key={`${skill}-${i}`}
                                    className="px-8 py-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/10 text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-500 hover:bg-[#7FFFD4] hover:text-[#030014] hover:border-[#7FFFD4] hover:scale-110 cursor-default shadow-xl"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>

                        {/* Second Row: Moving Right */}
                        <div className="flex gap-6 animate-marquee-right hover:pause-marquee">
                            {[
                                "ShadCN", "Figma", "Git", "Agile", "REST APIs", "GSAP",
                                "MongoDB", "PostgreSQL", "Firebase", "AWS", "Vercel", "Docker",
                                // Duplicate for seamless loop
                                "ShadCN", "Figma", "Git", "Agile", "REST APIs", "GSAP",
                                "MongoDB", "PostgreSQL", "Firebase", "AWS", "Vercel", "Docker"
                            ].map((skill, i) => (
                                <div
                                    key={`${skill}-${i}`}
                                    className="px-8 py-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/10 text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-500 hover:bg-[#7FFFD4] hover:text-[#030014] hover:border-[#7FFFD4] hover:scale-110 cursor-default shadow-xl"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                <style jsx>{`
                    @keyframes marquee-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marquee-right {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-marquee-left {
                        animation: marquee-left 40s linear infinite;
                        width: fit-content;
                    }
                    .animate-marquee-right {
                        animation: marquee-right 40s linear infinite;
                        width: fit-content;
                    }
                    .hover\:pause-marquee:hover {
                        animation-play-state: paused;
                    }
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        </section>
    );
}
