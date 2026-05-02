'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
    const [tilt, setTilt] = useState({ x: 0, y: 0, active: false });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (disableTilt) return;
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        // Normalised -1 → 1
        const px = (e.clientX - cx) / (rect.width / 2);
        const py = (e.clientY - cy) / (rect.height / 2);
        setTilt({ x: py * -8, y: px * 8, active: true });
    }, [disableTilt]);

    const handleMouseLeave = useCallback(() => {
        if (disableTilt) return;
        setTilt({ x: 0, y: 0, active: false });
    }, [disableTilt]);


    return (
        <div
            className="group h-full w-full"
            style={{ perspective: '900px' }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: tilt.active
                        ? 'transform 0.1s ease-out'
                        : 'transform 0.6s cubic-bezier(.22,1,.36,1)',
                    transformStyle: 'preserve-3d',
                }}
                className="h-full w-full"
            >
                <ElectricBorder
                    color="#7FFFD4"
                    speed={0.4}
                    chaos={0.08}
                    borderRadius={16}
                    className="h-full w-full bg-[#030014]/60 backdrop-blur-3xl transition-all duration-700 group-hover:bg-[#030014]/80"
                >
                    <div className="relative h-full overflow-hidden rounded-[inherit]" style={{ transformStyle: 'preserve-3d' }}>

                        {/* ═══ LAYER 0: Ambient glow that follows tilt ═══ */}
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[inherit] pointer-events-none z-0"
                            style={{
                                background: `radial-gradient(600px circle at ${50 + tilt.y * 3}% ${50 + tilt.x * -3}%, rgba(127,255,212,0.06), transparent 60%)`,
                            }}
                        />

                        {/* ═══ LAYER 1: Image — parallax depth ═══ */}
                        <div
                            className="relative aspect-[16/12] m-3 mb-0 rounded-xl overflow-hidden"
                            style={{
                                transform: `translateZ(20px) translate(${tilt.y * 2}px, ${tilt.x * -2}px)`,
                                transition: tilt.active ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(.22,1,.36,1)',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-[1.08]"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/70 via-transparent to-transparent" />

                            {/* ── Link puck ── */}
                            <div
                                className="absolute top-3 right-3 z-10"
                                style={{ transform: `translateZ(40px)` }}
                            >
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} project`}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#7FFFD4] hover:text-[#030014] hover:border-[#7FFFD4] transition-all duration-400 shadow-[0_8px_32px_rgba(0,0,0,.3)]"
                                >
                                    <ArrowUpRight aria-hidden="true" className="w-[18px] h-[18px]" />
                                </Link>
                            </div>

                            {/* ── Category tag floating ── */}
                            <div
                                className="absolute bottom-3 left-3"
                                style={{ transform: `translateZ(35px)` }}
                            >
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 text-[#7FFFD4] text-[9px] font-black uppercase tracking-[0.2em]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4] shadow-[0_0_6px_rgba(127,255,212,.6)]" />
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* ═══ LAYER 2: Content — higher Z depth ═══ */}
                        <div
                            className="relative flex flex-col flex-1 px-5 pt-5 pb-5"
                            style={{
                                transform: `translateZ(40px) translate(${tilt.y * 1}px, ${tilt.x * -1}px)`,
                                transition: tilt.active ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(.22,1,.36,1)',
                            }}
                        >
                            {/* Title */}
                            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight leading-[1.1] mb-2 group-hover:text-[#7FFFD4] transition-colors duration-500">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/35 text-[13px] leading-relaxed line-clamp-2 mb-auto group-hover:text-white/50 transition-colors duration-500">
                                {project.description}
                            </p>

                            {/* Skills row */}
                            <div
                                className="flex flex-wrap items-center gap-1.5 pt-4 mt-4 border-t border-white/[0.05]"
                                style={{
                                    transform: `translateZ(10px)`,
                                }}
                            >
                                {project.skills.map((skill, idx) => (
                                    <span
                                        key={`${skill}-${idx}`}
                                        className="px-2 py-0.5 rounded-[4px] bg-white/[0.03] border border-white/[0.06] text-white/25 text-[9px] font-bold uppercase tracking-[0.12em] group-hover:text-white/45 group-hover:border-[#7FFFD4]/10 group-hover:bg-[#7FFFD4]/[0.03] transition-all duration-500"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ═══ LAYER 3: Bottom glow accent ═══ */}
                        <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] z-10 bg-gradient-to-r from-transparent via-[#7FFFD4]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[0_0_12px_rgba(127,255,212,.3)]" />
                    </div>
                </ElectricBorder>
            </div>
        </div>
    );
}
