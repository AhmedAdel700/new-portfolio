'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Filter, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const ColorBends = dynamic(() => import('./ColorBends'), { ssr: false });
import ProjectCard from './ProjectCard';

const categories = ["All", "Creative Dev", "Enterprise", "E-Commerce", "Big Data", "Fintech", "Gaming"];

const projects = [
    {
        id: 1,
        title: "Zenith Portfolio",
        category: "Creative Dev",
        description: "Interactive 3D portfolio experience with advanced WebGL animations and seamless transitions.",
        image: "/project-1.png",
        skills: ["Next.js", "Three.js", "WebGL"],
        link: "#"
    },
    {
        id: 2,
        title: "Nexus Dashboard",
        category: "Enterprise",
        description: "Real-time analytics platform for enterprise scale, featuring complex data visualization.",
        image: "/project-2.png",
        skills: ["React", "TS", "D3.js"],
        link: "#"
    },
    {
        id: 3,
        title: "Luxe E-Comm",
        category: "E-Commerce",
        description: "High-end shopping experience with elegant motion design and lightning-fast performance.",
        image: "/project-3.png",
        skills: ["Next.js", "Stripe", "GSAP"],
        link: "#"
    },
    {
        id: 4,
        title: "Skyline Analytics",
        category: "Big Data",
        description: "Big data processing engine and visualization tool for complex information systems.",
        image: "/project-1.png",
        skills: ["Python", "AWS", "FastAPI"],
        link: "#"
    },
    {
        id: 5,
        title: "Crypto Vault",
        category: "Fintech",
        description: "Secure digital asset management interface with a focus on high-fidelity security UI.",
        image: "/project-2.png",
        skills: ["Solidity", "Ether.js", "React"],
        link: "#"
    },
    {
        id: 6,
        title: "Nova Engine",
        category: "Gaming",
        description: "Community platform for immersive gaming experiences and player-driven marketplaces.",
        image: "/project-3.png",
        skills: ["Unity", "React", "Node.js"],
        link: "#"
    },
    {
        id: 7,
        title: "Aura AI",
        category: "Creative Dev",
        description: "Generative AI interface for artists, focusing on fluid prompt engineering workflows.",
        image: "/project-1.png",
        skills: ["PyTorch", "Next.js", "Tailwind"],
        link: "#"
    },
    {
        id: 8,
        title: "Velocity OS",
        category: "Enterprise",
        description: "Cloud-native operating system dashboard for distributed server clusters.",
        image: "/project-2.png",
        skills: ["Go", "Kubernetes", "React"],
        link: "#"
    },
    {
        id: 9,
        title: "Prism Shop",
        category: "E-Commerce",
        description: "Multi-vendor marketplace with real-time inventory tracking and dynamic pricing.",
        image: "/project-3.png",
        skills: ["Shopify", "React", "GraphQL"],
        link: "#"
    }
];

interface GalleryProps {
    isFullPage?: boolean;
    id?: string;
}

export default function Gallery({ isFullPage = false, id = "gallery" }: GalleryProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeCategory === "All" || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id={id} className={`relative w-full ${isFullPage ? 'min-h-screen pt-32 pb-20' : 'py-20'} bg-[#030014] overflow-hidden selection:bg-[#7FFFD4] selection:text-black font-sans`}>
            
            {/* Ambient Background */}
            <div className={`absolute inset-0 z-0 opacity-20 pointer-events-none ${isFullPage ? 'fixed' : ''}`}>
                <ColorBends
                    colors={['#7FFFD4', '#030014', '#030014']}
                    rotation={isFullPage ? 45 : 90}
                    speed={0.15}
                    frequency={0.8}
                    warpStrength={1.2}
                    mouseInfluence={0.8}
                    noise={0.1}
                    parallax={0.3}
                    intensity={1.2}
                    transparent
                    autoRotate={0.05}
                    scale={1.5}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                <div className="container mx-auto px-6 max-w-[1450px]">
                    
                    {/* Header Section */}
                    <div className="flex flex-col gap-8 lg:gap-12 mb-10 lg:mb-20">
                        {isFullPage && (
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link 
                                    href="/" 
                                    className="inline-flex items-center gap-3 text-white/40 hover:text-[#7FFFD4] transition-colors group text-sm font-bold uppercase tracking-widest"
                                >
                                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                    Back to Headquarters
                                </Link>
                            </motion.div>
                        )}

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/5 pb-16">
                            <div className="space-y-6">
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-[#7FFFD4] text-[10px] font-black tracking-[0.3em] uppercase"
                                >
                                    <Monitor className="w-3 h-3" />
                                   MY GALLERY / WORK
                                </motion.div>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className={`text-white font-black tracking-tighter uppercase leading-[0.85] ${isFullPage ? 'text-7xl md:text-8xl lg:text-[10rem]' : 'text-5xl md:text-7xl lg:text-8xl'}`}
                                >
                                    THE <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">GALLERY</span>
                                </motion.h2>

                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="max-w-md space-y-8"
                            >
                                <p className="text-white/30 text-lg leading-relaxed uppercase tracking-wider font-medium">
                                    A comprehensive catalog of digital explorations, technical benchmarks, and creative milestones.
                                </p>
                                
                                {/* Search Bar */}
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-focus-within:text-[#7FFFD4] transition-colors" />
                                    <input 
                                        type="text" 
                                        placeholder="Search artifacts..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white/[0.03] border border-white/20 rounded-xl py-4 pl-12 pr-6 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#7FFFD4]/30 focus:bg-white/[0.05] transition-all"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-4 mb-12 px-2"
                    >
                        <div className="flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-widest mr-2">
                            <Filter className="w-4 h-4" />
                            Filter:
                        </div>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`relative px-5 py-2 md:px-7 md:py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${
                                        activeCategory === cat 
                                        ? 'text-[#030014]' 
                                        : 'text-white/40 hover:text-white'
                                    }`}
                                >
                                    <span className="relative z-10">{cat}</span>
                                    {activeCategory === cat && (
                                        <motion.div 
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-[#7FFFD4] rounded-full shadow-[0_0_20px_rgba(127,255,212,0.4)]"
                                            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                        />
                                    )}
                                    {activeCategory !== cat && (
                                        <div className="absolute inset-0 border border-white/5 bg-white/[0.02] rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Grid */}
                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch overflow-visible"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project, index) => (
                                <motion.div 
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                                    transition={{ 
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        opacity: { duration: 0.4 },
                                        layout: { duration: 0.4 }
                                    }}
                                    className="group flex flex-col h-full overflow-visible"
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-40 text-center space-y-6"
                        >
                            <p className="text-white/20 text-2xl font-medium">No artifacts found matching your query.</p>
                            <button 
                                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                className="text-[#7FFFD4] text-xs font-black uppercase tracking-widest hover:underline"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
