'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Monitor, Globe, Code2, Zap } from 'lucide-react';

const ColorBends = dynamic(() => import('./ColorBends'), { ssr: false });
const ElectricBorder = dynamic(() => import('./ElectricBorder'), { ssr: false });

const projects = [
    {
        id: 1,
        title: "Zenith Portfolio",
        category: "Creative Dev",
        description: "Interactive 3D portfolio experience with advanced WebGL animations and seamless transitions.",
        image: "/project-1.png",
        skills: ["Next.js", "Three.js"],
        link: "#"
    },
    {
        id: 2,
        title: "Nexus Dashboard",
        category: "Enterprise",
        description: "Real-time analytics platform for enterprise scale, featuring complex data visualization.",
        image: "/project-2.png",
        skills: ["React", "TS"],
        link: "#"
    },
    {
        id: 3,
        title: "Luxe E-Comm",
        category: "E-Commerce",
        description: "High-end shopping experience with elegant motion design and lightning-fast performance.",
        image: "/project-3.png",
        skills: ["Nuxt", "Stripe"],
        link: "#"
    },
    {
        id: 4,
        title: "Skyline Analytics",
        category: "Big Data",
        description: "Big data processing engine and visualization tool for complex information systems.",
        image: "/project-1.png",
        skills: ["Python", "AWS"],
        link: "#"
    },
    {
        id: 5,
        title: "Crypto Vault",
        category: "Fintech",
        description: "Secure digital asset management interface with a focus on high-fidelity security UI.",
        image: "/project-2.png",
        skills: ["Solidity", "Ether.js"],
        link: "#"
    },
    {
        id: 6,
        title: "Nova Engine",
        category: "Gaming",
        description: "Community platform for immersive gaming experiences and player-driven marketplaces.",
        image: "/project-3.png",
        skills: ["Unity", "React"],
        link: "#"
    }
];

export default function ProjectsGallary() {
    return (
        <section id="projects" className="relative w-full py-40 bg-[#030014] overflow-hidden selection:bg-[#7FFFD4] selection:text-black">
            
            {/* Ambient Background ColorBends - Matched to About section */}
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

            {/* Top Fade to blend with previous section */}
            <div className="absolute top-0 left-0 right-0 h-[20vh] bg-gradient-to-b from-[#030014] to-transparent z-1 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-[1450px] relative z-10">
                
                {/* Header: Left Aligned, High-End Minimalist */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-32 border-b border-white/5 pb-16">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-[#7FFFD4] text-[10px] font-black tracking-[0.3em] uppercase">
                            <Monitor className="w-3 h-3" />
                            Work / Selected Projects
                        </div>
                        <h2 className="text-white text-7xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8]">
                            PROJECT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">ARCHIVE.</span>
                        </h2>
                    </div>
                    <p className="text-white/30 text-lg max-w-sm leading-relaxed uppercase tracking-wider font-medium">
                        A curated selection of digital architectural solutions built with precision.
                    </p>
                </div>

                {/* Modern Unified Grid - Equal Height Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                    {projects.map((project) => (
                        <div key={project.id} className="group flex flex-col h-full">
                            <ElectricBorder
                                color="#7FFFD4"
                                speed={0.4}
                                chaos={0.08}
                                borderRadius={40}
                                className="h-full"
                                style={{ height: '100%' }}
                            >
                                <div className="relative h-full bg-[#030014]/60 backdrop-blur-3xl rounded-[40px] p-4 flex flex-col justify-between overflow-hidden transition-all duration-700 hover:bg-[#030014]/80">

                                    {/* Top Section: Image & Category */}
                                    <div className="space-y-8">
                                        <div className="relative aspect-[16/11] rounded-[32px] overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-all duration-1000 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/60 via-transparent to-transparent opacity-40" />

                                            {/* Minimal Link Puck */}
                                            <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                                                <Link
                                                    href={project.link}
                                                    className="w-12 h-12 rounded-full bg-white text-[#030014] flex items-center justify-center hover:bg-[#7FFFD4] transition-colors shadow-2xl"
                                                >
                                                    <ArrowUpRight className="w-6 h-6" />
                                                </Link>
                                            </div>

                                            <div className="absolute bottom-6 left-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#7FFFD4] text-[9px] font-black uppercase tracking-widest">
                                                {project.category}
                                            </div>
                                        </div>

                                        {/* Title & Description */}
                                        <div className="px-6 space-y-4">
                                            <h3 className="text-white text-3xl font-black tracking-tight leading-none group-hover:text-[#7FFFD4] transition-colors duration-500">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/40 text-sm leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Section: Skills - Pushed to Bottom */}
                                    <div className="px-6 pb-6 pt-10 mt-auto">
                                        <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                                            {project.skills.map(skill => (
                                                <span key={skill} className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ElectricBorder>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}