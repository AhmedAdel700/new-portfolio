'use client';

import dynamic from 'next/dynamic';
import {
    Terminal,
    Layout,
    Palette,
} from 'lucide-react';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const ColorBends = dynamic(() => import('./ColorBends'), { ssr: false });

export default function About() {
    const technicalPillars = [
        {
            title: "Frontend Architecture",
            subtitle: "Frameworks & Ecosystem",
            icon: <Layout className="w-8 h-8 text-[#7FFFD4]" />,
            description: "Architecting high-performance interfaces with modern React frameworks and state management systems.",
            skills: ["React.Js", "Next.Js", "Bootstrap", "Redux Toolkit", "React Router"],
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

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="container mx-auto px-6 max-w-[1450px] relative z-10"
            >

                {/* 1. High-Impact Intro Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-20 mb-10 lg:mb-20 items-start">

                    {/* Left: Identity (Col 1-7) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="col-span-1 lg:col-span-7 space-y-8 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-white/40 text-[11px] md:text-xs font-black tracking-widest uppercase group/badge transition-colors duration-500 hover:border-[#7FFFD4]/30">
                            <span className="w-2 h-2 rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
                            Ahmed Adel / Identity
                        </div>

                        <h2 className="text-white text-7xl lg:text-8xl 2xl:text-9xl font-black tracking-tighter leading-[0.95] lg:leading-[0.85] uppercase">
                            CREATIVE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">PIONEER</span>
                        </h2>

                        <div className="flex justify-center lg:justify-start gap-16 pt-8">
                            <div className="space-y-2">
                                <p className="text-[#7FFFD4] text-5xl md:text-6xl font-black tracking-tighter">3+</p>
                                <p className="text-white/30 text-[13px] font-black tracking-[0.2em] uppercase">Years Exp</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-white text-5xl md:text-6xl font-black tracking-tighter">24/7</p>
                                <p className="text-white/30 text-[13px] font-black tracking-[0.2em] uppercase">Passion</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Narrative Bio (Col 8-12) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="col-span-1 lg:col-span-5 space-y-10 pt-4 lg:pt-16"
                    >
                        <div className="space-y-8">
                            <p className="text-white/80 text-xl md:text-2xl leading-relaxed font-light text-center lg:text-left">
                                I specialize in building <span className="text-[#7FFFD4] font-medium">high-performance web solutions</span> where technical precision meets modern aesthetics.
                            </p>
                            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                                Mastering the synergy of React and Next.js, I architect resilient digital infrastructures that balance sophisticated engineering with refined, human-centric interactions.
                            </p>
                        </div>
 
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-16 relative">
                             {/* Top Horizontal Separator (Signature Mint) */}
                             <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7FFFD4]/50 to-transparent shadow-[0_0_15px_rgba(127,255,212,0.2)]" />
                             
                             <div className="space-y-4 text-center lg:text-left">
                                 <h4 className="text-[#7FFFD4] font-black text-xs uppercase tracking-[0.3em]">Strategic Synergy</h4>
                                 <p className="text-white/40 text-[13px] md:text-sm leading-relaxed font-medium">Translating complex technical roadmaps into clear, collaborative narratives to drive seamless cross-functional alignment.</p>
                             </div>
                             <div className="space-y-4 text-center lg:text-left">
                                 <h4 className="text-[#7FFFD4] font-black text-xs uppercase tracking-[0.3em]">Architectural Logic</h4>
                                 <p className="text-white/40 text-[13px] md:text-sm leading-relaxed font-medium">Deconstructing intricate system bottlenecks with surgical precision and scalable engineering solutions.</p>
                             </div>
                         </div>
                    </motion.div>
                </div>

                {/* 2. Dynamic Tech Wall Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="overflow-hidden"
                >
                    <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12">
                        {/* Bottom Horizontal Separator (Signature Mint) */}
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7FFFD4]/50 to-transparent shadow-[0_0_15px_rgba(127,255,212,0.2)]" />
                        
                        <div className="space-y-4 text-center lg:text-left px-6">
                            <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase">Technical Stack</h3>
                            <p className="text-white/30 text-xs md:text-sm max-w-md uppercase tracking-[0.2em] font-bold">The tools and technologies driving my engineering process.</p>
                        </div>
                    </div>

                    <div className="relative flex flex-col gap-6 py-10 swiper-marquee">
                        {/* First Row: Moving Left */}
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                            }}
                            slidesPerView="auto"
                            spaceBetween={24}


                            allowTouchMove={false}
                            className="w-full"
                        >
                            {[
                                "React.Js", "Next.Js", "TypeScript", "JavaScript",
                                "Tailwind CSS", "Node.Js", "FastAPI", "Redux Toolkit",
                                "Framer Motion", "SCSS", "HTML", "CSS", "Next-Intl", "C++" , "Python",
                                "React.Js", "Next.Js", "TypeScript", "JavaScript",
                                "Tailwind CSS", "Node.Js", "FastAPI", "Redux Toolkit",
                                "Framer Motion", "SCSS", "HTML", "CSS", "Next-Intl", "C++", "Python",
                                "React.Js", "Next.Js", "TypeScript", "JavaScript",
                                "Tailwind CSS", "Node.Js", "FastAPI", "Redux Toolkit",
                                "Framer Motion", "SCSS", "HTML", "CSS", "Next-Intl", "C++", "Python",
                            ].map((skill, i) => (
                                <SwiperSlide key={`${skill}-${i}`} style={{ width: 'auto' }}>
                                    <div className="px-8 py-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/10 text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-500 cursor-default shadow-xl">
                                        {skill}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Second Row: Moving Right */}
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: true
                            }}
                            slidesPerView="auto"
                            spaceBetween={24}


                            allowTouchMove={false}
                            className="w-full"
                        >
                            {[
                                "ShadCN", "Figma", "Git", "Agile", "REST APIs", "GSAP", "GitHub", "GitLab", "MUI",
                                "Vercel", "AntDesign", "Bootstrap",
                                "ShadCN", "Figma", "Git", "Agile", "REST APIs", "GSAP", "GitHub", "GitLab", "MUI",
                                "Vercel", "AntDesign", "Bootstrap",
                                "ShadCN", "Figma", "Git", "Agile", "REST APIs", "GSAP", "GitHub", "GitLab", "MUI",
                                "Vercel", "AntDesign", "Bootstrap",
                            ].map((skill, i) => (
                                <SwiperSlide key={`${skill}-${i}`} style={{ width: 'auto' }}>
                                    <div className="px-8 py-4 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/10 text-white/60 text-xs md:text-sm font-bold uppercase tracking-[0.3em] whitespace-nowrap transition-all duration-500 cursor-default shadow-xl">
                                        {skill}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
