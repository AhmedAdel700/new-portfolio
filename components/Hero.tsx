'use client';

import Image from 'next/image';
import { useScreenSize } from '@/hooks/useScreenSize';
import { motion } from 'framer-motion';

// Dynamic imports to avoid SSR issues with Three.js/WebGL
import { LaserFlow } from './LaserFlow';

import PlasmaWave from './PlasmaWave';


export default function Hero() {
    const screen = useScreenSize();
    return (
        <section className="relative w-full min-h-screen bg-[#030014] flex flex-col items-center overflow-hidden font-sans">
            {/* Laser Background - Fixed props as requested */}
            <div className="absolute inset-0 z-0">
                <LaserFlow
                    color="#7FFFD4"
                    horizontalBeamOffset={0}
                    verticalBeamOffset={screen.isMobile ? 0.26 : screen.xl ? 0.257 : 0.24}
                    verticalSizing={1.8}
                    horizontalSizing={1}
                    wispDensity={1.5}
                    fogIntensity={0.6}
                    mouseTiltStrength={0.02}
                />
            </div>

            {/* Top Fade Overlay */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030014] to-transparent z-1 pointer-events-none" />

            {/* 1. Beam Area (Top 25vh) */}
            <div className="h-[25vh] w-full relative z-10 pointer-events-none" />

            {/* 2. Content Card Area (Remaining 75vh) */}
            <div className="flex-1 w-full max-w-[1450px] px-4 md:px-8 pb-8 relative z-30">

                {/* Modern Card Body with Gradient Border */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative w-full 2xl:h-full bg-[#030014]/60 backdrop-blur-3xl rounded-3xl p-5 md:p-10 lg:p-14 flex flex-col justify-between overflow-hidden shadow-2xl group/card"
                >

                    {/* Interior Card Background Effect */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
                        <PlasmaWave
                            colors={['#7FFFD4', '#043525ff']}
                            speed1={0.005}
                            speed2={0.01}
                            focalLength={1}
                        />
                    </div>

                    {/* Modern Fading Border UI */}
                    <div className="absolute inset-0 rounded-3xl border-t-2 border-x-2 border-white/[0.15] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] pointer-events-none transition-colors group-hover/card:border-[#7FFFD4]/30 duration-700" />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7FFFD4]/05 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 pointer-events-none" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#7FFFD4]/40 to-transparent opacity-50" />

                    {/* Unified Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-8 items-start z-10 w-full">

                        {/* 1. Top Row: Badge & Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="col-span-1 md:col-span-8"
                        >
                            <div className="inline-flex items-center gap-3 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/70 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7FFFD4] shadow-[0_0_8px_#7FFFD4]" />
                                &lt;Creative Web Developer /&gt;
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="hidden md:flex col-span-4 justify-end gap-6 lg:gap-8 text-[8px] md:text-[10px] font-bold tracking-widest text-white/40 uppercase"
                        >
                            <div className="space-y-1">
                                <p className="text-[#7FFFD4]">EXPERIENCE</p>
                                <p className="text-white/80">3+ Years</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[#7FFFD4]">Speciality</p>
                                <p className="text-white/80">Next.js / React</p>
                            </div>
                        </motion.div>

                        {/* 2. Middle Row: Heading & Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="col-span-1 md:col-span-8"
                        >
                            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-black tracking-tight leading-[0.85]">
                                CRAFTING<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7FFFD4] to-[#A7F3D0]">UNIQUE</span><br />
                                EXPERIENCE
                            </h1>
                        </motion.div>

                        {/* User-Provided SVG Blob Image Frame - Shifted Right */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="col-span-1 md:col-span-4 md:row-span-2 flex justify-center md:justify-end md:translate-x-8 lg:translate-x-12"
                        >
                            <div className="relative w-80 h-80 md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] 2xl:w-[500px] 2xl:h-[500px]">

                                {/* Hidden SVG Definition for the Normalized User Path */}
                                <svg width="0" height="0" className="absolute">
                                    <defs>
                                        <clipPath id="user-blob" clipPathUnits="objectBoundingBox">
                                            <path d="M0.6405,0.3645 C0.7215,0.44,0.8535,0.47,0.854,0.5005 C0.855,0.531,0.724,0.562,0.643,0.618 C0.562,0.674,0.531,0.7545,0.4815,0.773 C0.4325,0.791,0.365,0.747,0.2825,0.691 C0.1995,0.635,0.102,0.5675,0.0975,0.496 C0.0935,0.424,0.1825,0.348,0.2655,0.2725 C0.348,0.1965,0.424,0.121,0.477,0.144 C0.53,0.167,0.56,0.289,0.6405,0.3645 Z" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                {/* Moving Border Background (The Glow) */}
                                <div
                                    className="absolute inset-0"
                                    style={{ clipPath: 'url(#user-blob)' }}
                                >
                                    <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#7FFFD4_360deg)] animate-[spin_3s_linear_infinite]" />
                                </div>

                                {/* Main Content Image Blob */}
                                <div className="relative w-full h-full p-[4px] md:p-[5px]">
                                    <div
                                        className="relative w-full h-full bg-[#030014] overflow-hidden"
                                        style={{ clipPath: 'url(#user-blob)' }}
                                    >
                                        <Image
                                            src="/AA.jpeg"
                                            alt="Ahmed Adel"
                                            fill
                                            className="object-cover object-right p-10"
                                        />
                                    </div>
                                </div>


                            </div>
                        </motion.div>

                        {/* 3. Bottom Row: Bio & Modern CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="col-span-1 md:col-span-8 self-end"
                        >
                            <div className="max-w-xl space-y-8">
                                <p className="text-white/50 text-sm md:text-base lg:text-lg leading-relaxed">
                                    I transform complex technical challenges into seamless digital experiences.
                                    Specializing in building high-performance, scalable web applications with a focus on precision and creative engineering.
                                </p>

                                <div className="flex w-full md:w-auto gap-3 md:gap-4 items-center">
                                    <button className="flex-1 md:flex-none group relative px-4 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-[#7FFFD4] text-[#030014] text-xs md:text-sm lg:text-base font-bold rounded-xl md:rounded-2xl transition-all shadow-[0_0_20px_rgba(127,255,212,0.2)] hover:shadow-[0_0_40px_rgba(127,255,212,0.4)] active:scale-95 cursor-pointer">
                                        <span>Work with me</span>
                                    </button>

                                    <button className="flex-1 md:flex-none group relative px-4 py-3 md:px-7 md:py-4 lg:px-8 lg:py-4 bg-white/5 border border-white/10 text-white text-xs md:text-sm lg:text-base font-bold rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 hover:bg-white/10 transition-all active:scale-95 cursor-pointer overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        <span>View Resume</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-[#7FFFD4] transition-colors">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Top Beam Hit Line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#7FFFD4] to-transparent shadow-[0_0_20px_rgba(127,255,212,0.6)] z-20"
                    />
                </motion.div>
            </div>

            {/* Deeper Bottom Fade for seamless transition to About */}
            <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-[#030014] via-[#030014]/60 to-transparent z-20 pointer-events-none" />

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(0); opacity: 0; }
                    50% { opacity: 0.5; }
                    100% { transform: translateY(100%); opacity: 0; }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
}