'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Monitor, Globe, Code2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';


const ColorBends = dynamic(() => import('./ColorBends'), { ssr: false });
import ProjectCard from './ProjectCard';


import { projects } from '@/lib/data';

// Show first 6 projects on homepage
const featuredProjects = projects.slice(0, 6);


export default function ProjectsGallary() {
    return (
        <section id="projects" className="relative w-full py-10 md:py-20 bg-[#030014] overflow-hidden selection:bg-[#7FFFD4] selection:text-black">

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
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-16 pb-8 md:pb-16 text-center lg:text-left"
                >
                    {/* Bottom Horizontal Separator (Signature Mint) */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7FFFD4]/50 to-transparent shadow-[0_0_15px_rgba(127,255,212,0.2)]" />
                    <div className="space-y-6">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-[#7FFFD4] text-[10px] font-black tracking-[0.3em] uppercase"
                        >
                            <Monitor className="w-3 h-3" />
                            Work / Selected Projects
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter uppercase leading-[0.9] lg:leading-[0.8]"
                        >
                            PROJECTS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">GALLARY</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-white/30 text-base md:text-lg max-w-sm mx-auto lg:mx-0 leading-relaxed uppercase tracking-wider font-medium"
                    >
                        A curated selection of digital architectural solutions built with precision.
                    </motion.p>
                </motion.div>


                {/* Modern Unified Grid - Equal Height Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch">
                    {featuredProjects.map((project, index) => (
                        <motion.div 
                            key={project.id} 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group flex flex-col h-full"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>


                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 flex justify-center"
                >
                    <div className="group relative">
                        <Link
                            href="/gallery"
                            className="relative px-12 py-6 bg-transparent border border-[#7FFFD4]/30 hover:border-[#7FFFD4] rounded-full transition-all duration-700 hover:shadow-[0_0_60px_rgba(127,255,212,0.25)] flex items-center gap-8 overflow-hidden"
                        >
                            {/* High-Performance Liquid Fill */}
                            <div className="absolute inset-0 bg-[#7FFFD4] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                            
                            <div className="relative z-10 flex items-center gap-6">
                                <span className="text-[#7FFFD4] group-hover:text-[#030014] text-[13px] font-black uppercase tracking-[0.3em] transition-colors duration-500">
                                    View All Of My Work
                                </span>
                                <div className="w-10 h-10 rounded-full border border-[#7FFFD4]/20 group-hover:border-[#030014]/20 bg-[#7FFFD4]/5 group-hover:bg-[#030014]/10 flex items-center justify-center transition-all duration-500">
                                    <ArrowUpRight className="w-5 h-5 text-[#7FFFD4] group-hover:text-[#030014] transition-all duration-500 group-hover:rotate-45" />
                                </div>
                            </div>
                        </Link>
                        
                        {/* Floating Project Count Badge */}
                        <div className="absolute -top-4 -right-4 px-4 py-2 bg-[#030014] border border-[#7FFFD4]/50 text-[#7FFFD4] text-[10px] font-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-[0_0_20px_rgba(127,255,212,0.2)]">
                            {projects.length}+ PROJECTS
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}