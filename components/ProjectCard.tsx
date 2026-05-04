'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Code, ExternalLink } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

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

    const idLabel = String(project.id).padStart(2, '0');

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={false}
            className="group relative min-h-[520px] h-full w-full cursor-pointer select-none"
            style={{ perspective: '1200px' }}
        >
            <ElectricBorder
                color="#7FFFD4"
                speed={0.4}
                chaos={0.1}
                borderRadius={16}
                className="h-full w-full bg-[#040115]"
            >
                {/* 3px Glowing Border Overlay */}
                <div 
                    className="absolute inset-0 z-50 rounded-[inherit] border-[3px] border-[#7FFFD4]/30 pointer-events-none transition-all duration-500 group-hover:border-[#7FFFD4]/60 group-hover:shadow-[inset_0_0_15px_rgba(127,255,212,0.3),0_0_20px_rgba(127,255,212,0.2)]" 
                />

                {/* 1. BACKGROUND IMAGE LAYER - Fixed Overflow */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[inherit] isolation-isolate transform translate-z-0">
                    <motion.div
                        className="w-full h-full relative"
                        animate={{
                            scale: isHovered ? 1.18 : 1.05, // Increased scale to guarantee no edge bleed
                            rotate: isHovered ? (mousePos.x - 0.5) * 3 : 0,
                            filter: isHovered ? 'blur(4px) brightness(0.3)' : 'blur(0px) brightness(0.85)'
                        }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                    
                    {/* Dynamic Overlay Gradient */}
                    <motion.div 
                        className="absolute inset-0 z-10 bg-gradient-to-t from-[#040115] via-[#040115]/30 to-transparent"
                        animate={{ opacity: isHovered ? 0.98 : 0.65 }}
                    />
                </div>

                {/* 2. CONTENT LAYER */}
                <div className="relative h-full z-20 p-8 flex flex-col justify-end">
                    
                    {/* ALWAYS VISIBLE: Header (Badge & Icon) + Title */}
                    <motion.div layout className="mb-2 z-30">
                        <div className="flex items-center justify-between w-full mb-3">
                            <span className="inline-block px-3 py-1 rounded-full bg-[#7FFFD4]/10 border border-[#7FFFD4]/30 text-[10px] font-bold text-[#7FFFD4] uppercase tracking-widest">
                                {project.category}
                            </span>
                            
                            <motion.div
                                animate={{ 
                                    x: isHovered ? 0 : 20, 
                                    opacity: isHovered ? 1 : 0 
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="flex w-9 h-9 items-center justify-center bg-[#7FFFD4] text-[#040115] rounded-full shadow-[0_0_15px_rgba(127,255,212,0.2)] hover:scale-105 active:scale-95 transition-all duration-300"
                                    aria-label="Open Project"
                                >
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </div>
                        
                        <motion.div layout className="flex flex-col items-start">
                            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight uppercase group-hover:text-[#7FFFD4] transition-colors duration-500">
                                {project.title}
                            </h3>
                        </motion.div>
                    </motion.div>

                    {/* REVEAL ON HOVER: Description & Tech */}
                    <AnimatePresence mode="wait">
                        {isHovered && (
                            <motion.div
                                key="content-reveal"
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col gap-6 overflow-hidden"
                            >
                                <p className="text-[15px] text-white/70 leading-relaxed max-w-[95%] font-medium">
                                    {project.description}
                                </p>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Code className="w-4 h-4 text-[#7FFFD4]/70" />
                                        <span className="text-[11px] font-mono text-white/50 uppercase tracking-[0.2em]">Technology Stack</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 text-[10px] font-bold text-white/60 bg-white/5 border border-white/15 rounded-lg"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* DECORATIVE: Glass Shimmer */}
                <motion.div 
                    className="absolute inset-0 pointer-events-none z-30"
                    animate={{ 
                        background: isHovered 
                            ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(127,255,212,0.08), transparent 40%)` 
                            : 'none' 
                    }}
                />

                {/* HUD Corners */}
                <div className="absolute inset-0 z-40 pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-[#7FFFD4]" />
                    <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-[#7FFFD4]" />
                </div>
            </ElectricBorder>
        </motion.div>
    );
}