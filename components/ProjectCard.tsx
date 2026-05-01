'use client';

import React from 'react';
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
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group h-full w-full">
            <ElectricBorder
                color="#7FFFD4"
                speed={0.4}
                chaos={0.08}
                borderRadius={16}
                className="h-full w-full bg-[#030014]/60 backdrop-blur-3xl transition-all duration-700 group-hover:bg-[#030014]/80"
            >
                <div className="relative h-full flex flex-col justify-between overflow-hidden p-4">
                    {/* Top Section: Image & Category */}
                    <div className="space-y-8">
                        <div className="relative aspect-[16/11] rounded-xl overflow-hidden">
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
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                            {project.skills.map((skill, idx) => (
                                <span key={`${skill}-${idx}`} className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </ElectricBorder>
        </div>
    );
}
