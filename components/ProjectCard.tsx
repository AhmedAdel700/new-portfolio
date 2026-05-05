'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code } from 'lucide-react';

interface ProjectCardProps {
    project: {
        id: number;
        title: string;
        category: string;
        description: string;
        image: string;
        skills: string[];
        link: string;
    };
    disableTilt?: boolean;
}

export default function ProjectCard({ project, disableTilt = false }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (disableTilt || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
    };

    return (
        <motion.div
            layout
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={false}
            className="group relative h-[480px] md:h-full md:min-h-[540px] w-full cursor-pointer select-none overflow-hidden rounded-2xl bg-[#080320] border border-white/10 transition-all duration-500 hover:border-[#7FFFD4]/40 hover:shadow-[0_0_30px_rgba(127,255,212,0.1)]"
            style={{ perspective: '1200px' }}
        >
            {/* Inner Glow / Rim Light */}
            <div className="absolute inset-0 z-40 rounded-2xl border border-white/5 pointer-events-none" />
            <div className="absolute inset-[1px] z-40 rounded-2xl border border-white/[0.03] pointer-events-none" />

            {/* 1. BACKGROUND IMAGE LAYER */}
            <div className="absolute inset-0 z-0 overflow-hidden transform translate-z-0">
                <motion.div
                    className="w-full h-full relative"
                    animate={{
                        scale: isHovered ? 1.1 : 1.05,
                        rotate: isHovered ? (mousePos.x - 0.5) * 2 : 0,
                        opacity: isHovered ? 0.7 : 0.85
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700"
                        priority
                    />
                </motion.div>
                
                {/* Complex Gradient Overlays */}
                <div className="absolute inset-0 z-10">
                    {/* Stronger bottom gradient for text legibility but clearer top */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040115] via-[#040115]/30 to-transparent opacity-90" />
                    
                    {/* Tint Overlay */}
                    <motion.div 
                        className="absolute inset-0 bg-[#040115]/10"
                        animate={{ opacity: isHovered ? 0.3 : 0.1 }}
                    />
                    
                    {/* Radial "Spotlight" effect */}
                    <motion.div 
                        className="absolute inset-0 pointer-events-none"
                        animate={{ 
                            background: isHovered 
                                ? `radial-gradient(800px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(127,255,212,0.2), transparent 70%)` 
                                : 'radial-gradient(1000px circle at 50% 50%, rgba(127,255,212,0.08), transparent 70%)' 
                        }}
                    />
                </div>

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 z-10 opacity-[0.08] pointer-events-none" 
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
                />
            </div>

            {/* 2. CONTENT LAYER */}
            <motion.div layout className="relative h-full z-20 p-6 md:p-8 flex flex-col justify-end">
                
                {/* Header Section */}
                <motion.div layout className="mb-2">
                    <div className="flex items-center justify-between w-full mb-4">
                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#7FFFD4] shadow-[0_0_10px_#7FFFD4]" />
                            <span className="text-[10px] md:text-[11px] font-bold text-[#7FFFD4] uppercase tracking-[0.3em] drop-shadow-[0_0_5px_rgba(127,255,212,0.5)]">
                                {project.category}
                            </span>
                        </div>
                        
                        <motion.div
                            animate={{ 
                                x: isHovered ? 0 : 5, 
                                opacity: isHovered ? 1 : 0.8
                            }}
                        >
                            <Link
                                href={project.link}
                                target="_blank"
                                className="group/link flex w-9 h-9 md:w-11 md:h-11 items-center justify-center bg-white/10 border border-white/20 text-white rounded-xl hover:bg-[#7FFFD4] hover:text-[#040115] hover:border-[#7FFFD4] transition-all duration-300 backdrop-blur-none"
                            >
                                <ArrowUpRight className="w-4.5 h-4.5 md:w-5.5 md:h-5.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </Link>
                        </motion.div>
                    </div>
                    
                    <motion.div layout>
                        <h3 className="text-2xl md:text-4xl font-black text-white leading-none tracking-tighter uppercase mb-2 drop-shadow-md">
                            {project.title}
                        </h3>
                        <div className="h-0.5 w-12 md:w-16 bg-[#7FFFD4] group-hover:w-full transition-all duration-700 shadow-[0_0_10px_rgba(127,255,212,0.5)]" />
                    </motion.div>
                </motion.div>

                {/* Expandable Content */}
                <AnimatePresence mode="wait">
                    {isHovered && (
                        <motion.div
                            key="content"
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                            transition={{ 
                                duration: 0.6, 
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                            className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6"
                        >
                            <p className="text-sm md:text-[15px] text-white/80 leading-relaxed font-semibold drop-shadow-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-2">
                                    <Code className="w-4 h-4 text-[#7FFFD4]" />
                                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Stack Architecture</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 md:px-3 md:py-1.5 text-[9px] md:text-[10px] font-bold text-[#7FFFD4] bg-[#7FFFD4]/10 border border-[#7FFFD4]/30 rounded-lg"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* HUD Decorative Elements */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {/* Borders - Brighter */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Corner Accents - Brighter and Larger */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-6 h-6 border-t-2 border-l-2 border-white/30 group-hover:border-[#7FFFD4]/70 transition-all duration-500" />
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-6 h-6 border-t-2 border-r-2 border-white/30 group-hover:border-[#7FFFD4]/70 transition-all duration-500" />
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-6 h-6 border-b-2 border-l-2 border-white/30 group-hover:border-[#7FFFD4]/70 transition-all duration-500" />
                <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-6 h-6 border-b-2 border-r-2 border-white/30 group-hover:border-[#7FFFD4]/70 transition-all duration-500" />

                {/* Scanline Effect */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent h-[15%] w-full z-10"
                    animate={{ 
                        top: isHovered ? ['-20%', '120%'] : '-20%',
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ 
                        duration: 2.5, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                />
            </div>

            {/* Side Labels */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 rotate-90 flex items-center gap-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                <span className="text-[8px] font-mono text-white tracking-[0.5em] uppercase">Project_System_v2.0</span>
                <div className="w-12 h-[1px] bg-white" />
            </div>
        </motion.div>
    );
}