'use client';

import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowLeft, ArrowRight, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


const ColorBends = dynamic(() => import('./ColorBends'), { ssr: false });
import ProjectCard from './ProjectCard';


import { projects } from '@/lib/data';

// Show all projects on homepage
const featuredProjects = projects;


export default function ProjectsGallary() {
    const swiperRef = useRef<SwiperType | null>(null);

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

                {/* Header with nav controls top-right */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-8 sm:mb-16 pb-8 md:pb-16 text-left"
                >
                    {/* Bottom Horizontal Separator (Signature Mint) */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#7FFFD4]/50 to-transparent shadow-[0_0_15px_rgba(127,255,212,0.2)]" />
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-white/40 text-[11px] md:text-xs font-black tracking-widest uppercase group/badge transition-colors duration-500 hover:border-[#7FFFD4]/30"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
                            Work / Selected Projects
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.85] uppercase"
                        >
                            PROJECTS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-emerald-400">GALLARY</span>
                        </motion.h2>
                    </div>

                    {/* Right column: description + slider controls */}
                    <div className="flex flex-col items-start lg:items-end gap-6">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-white/30 text-base md:text-lg max-w-sm lg:mx-0 leading-relaxed uppercase tracking-wider font-medium text-left lg:text-right"
                        >
                            A curated selection of digital architectural solutions built with precision.
                        </motion.p>

                        {/* Custom Nav Controls */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center justify-center lg:justify-end w-full lg:w-auto gap-3"
                        >
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                aria-label="Previous project"
                                className="group/btn w-12 h-12 rounded-full border border-white/20 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-white/40 hover:border-[#7FFFD4] hover:text-[#030014] hover:bg-[#7FFFD4] transition-all duration-500 cursor-pointer"
                            >
                                <ArrowLeft className="w-5 h-5 transition-transform duration-300" />
                            </button>
                            <div className="w-8 h-[1px] bg-gradient-to-r from-white/10 via-[#7FFFD4]/30 to-white/10" />
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                aria-label="Next project"
                                className="group/btn w-12 h-12 rounded-full border border-white/20 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-white/40 hover:border-[#7FFFD4] hover:text-[#030014] hover:bg-[#7FFFD4] transition-all duration-500 cursor-pointer"
                            >
                                <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                            </button>
                        </motion.div>
                    </div>
                </motion.div>


                {/* Centered Swiper Slider with Coverflow Effect */}
                <motion.div 
                    initial={{ opacity: 0, y: 100, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 60, damping: 20, duration: 1 }}
                    style={{ perspective: 1200 }}
                    className="projects-swiper-wrapper relative overflow-visible px-4 md:px-10"
                    onViewportEnter={() => {
                        if (swiperRef.current && swiperRef.current.autoplay) {
                            swiperRef.current.autoplay.start();
                        }
                    }}
                >
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCoverflow]}
                        onSwiper={(swiper) => { 
                            swiperRef.current = swiper;
                            swiper.autoplay.stop();
                        }}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        loop={true}
                        loopAdditionalSlides={5}
                        speed={800}
                        watchSlidesProgress={true}
                        preventClicks={true}
                        preventClicksPropagation={true}
                        touchRatio={1.5}
                        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 0,
                            depth: 150,
                            modifier: 1.5,
                            slideShadows: false,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 0.9, spaceBetween: 10 },
                            768: { slidesPerView: 1.6, spaceBetween: 30 },
                            1024: { slidesPerView: 2.2, spaceBetween: 40 },
                            1200: { slidesPerView: 3, spaceBetween: 50 },
                            1440: { slidesPerView: 3, spaceBetween: 50 },
                        }}
                        className="projects-swiper !overflow-visible py-16"
                    >
                        {featuredProjects.map((project) => (
                            <SwiperSlide key={project.id} className="!h-auto !overflow-visible max-w-[500px]">
                                <div className="h-full overflow-visible p-4">
                                    <ProjectCard project={project} disableTilt={true} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-8 sm:mt-16 flex justify-center"
                >
                    <div className="group relative">
                        <Link
                            href="/gallery"
                            className="relative px-6 py-4 sm:px-12 sm:py-6 bg-transparent border border-[#7FFFD4]/30 hover:border-[#7FFFD4] rounded-full transition-all duration-700 hover:shadow-[0_0_60px_rgba(127,255,212,0.25)] flex items-center gap-8 overflow-hidden"
                        >
                            {/* High-Performance Liquid Fill */}
                            <div className="absolute inset-0 bg-[#7FFFD4] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

                            <div className="relative z-10 flex items-center gap-2 sm:gap-6">
                                <span className="text-[#7FFFD4] group-hover:text-[#030014] text-xs sm:text-[13px] font-black uppercase tracking-[0.3em] transition-colors duration-500">
                                    View All Of My Work
                                </span>
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#7FFFD4]/20 group-hover:border-[#030014]/20 bg-[#7FFFD4]/5 group-hover:bg-[#030014]/10 flex items-center justify-center transition-all duration-500">
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