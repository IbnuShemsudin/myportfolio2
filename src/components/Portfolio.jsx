import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Smartphone, Code2, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import profilePic from '../assets/image.png';

const Portfolio = ({ darkMode }) => {
    const [index, setIndex] = useState(0);
    const titles = ["Full-Stack Developer", "Mobile Expert", "UI/UX Strategist", "Problem Solver"];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 25, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="portfolio" className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-6 transition-colors duration-700 ${darkMode ? 'bg-gray-950 text-white' : 'bg-[#FAFAFA] text-gray-900'}`}>
            
            {/* --- Advanced Background Layers --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Primary Glow */}
                <div className={`absolute top-[-15%] right-[-5%] w-[60%] h-[60%] rounded-full blur-[140px] opacity-20 ${darkMode ? 'bg-orange-600' : 'bg-orange-300'}`} />
                <div className={`absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] rounded-full blur-[140px] opacity-15 ${darkMode ? 'bg-blue-600' : 'bg-blue-300'}`} />
                
                {/* Tech Grid Pattern */}
                <div className={`absolute inset-0 opacity-[0.05] ${darkMode ? 'invert' : ''}`} 
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
                />
            </div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10"
            >
                {/* --- Left Column: Impact Content --- */}
                <div className="lg:col-span-7 space-y-10">
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full border backdrop-blur-md shadow-sm transition-all ${darkMode ? 'bg-gray-800/30 border-gray-700' : 'bg-white/80 border-orange-100 shadow-orange-100/20'}`}>
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                            </span>
                            <span className={`text-[11px] font-black uppercase tracking-[0.2em] ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                                Available for Senior Roles
                            </span>
                        </div>
                        
                        <h1 className="text-6xl md:text-[100px] font-black leading-[0.85] tracking-tighter">
                            ABDUREZAK <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500">
                                SHEMSU.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="text-2xl md:text-4xl font-bold flex items-center gap-4 h-14">
                            <span className="opacity-40 font-light italic">Based in Ethiopia. Expert in</span>
                            <div className="relative overflow-hidden w-full h-full flex items-center">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={titles[index]}
                                        initial={{ y: 50, opacity: 0, rotateX: -45 }}
                                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                        exit={{ y: -50, opacity: 0, rotateX: 45 }}
                                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute left-0 text-orange-500 whitespace-nowrap drop-shadow-sm"
                                    >
                                        {titles[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                        
                        <p className={`text-xl max-w-xl leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Architecting high-performance digital ecosystems. I blend strategic UI/UX design with robust full-stack engineering to build products that scale.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
                        <button className="group relative flex items-center gap-4 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-[20px] font-black uppercase tracking-widest text-xs transition-all shadow-2xl shadow-orange-500/30 active:scale-95 overflow-hidden">
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <a href="#projects" className="relative z-10">Explore Work</a> 
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                        
                        <button className={`flex items-center gap-4 px-10 py-5 rounded-[20px] font-black uppercase tracking-widest text-xs border-2 transition-all active:scale-95 ${darkMode ? 'border-gray-800 bg-gray-900/50 hover:border-orange-500/50' : 'border-gray-200 bg-white hover:border-orange-500/30'}`}>
                            Get Resume <Download size={20} className="text-orange-500" />
                        </button>
                    </motion.div>
                </div>

                {/* --- Right Column: The Visual Masterpiece --- */}
                <motion.div variants={itemVariants} className="lg:col-span-5 relative flex justify-center items-center">
                    <div className="relative w-full max-w-[440px] aspect-[4/5]">
                        
                        {/* Layered Cards for Depth */}
                        <div className={`absolute top-10 -right-8 w-full h-full rounded-[48px] border-2 rotate-6 transition-colors ${darkMode ? 'border-gray-800' : 'border-gray-100'}`} />
                        <div className={`absolute -bottom-6 -left-8 w-full h-full rounded-[48px] border-2 -rotate-3 transition-colors ${darkMode ? 'border-gray-800' : 'border-gray-100'}`} />

                        {/* Main Image Frame */}
                        <div className={`relative h-full w-full rounded-[48px] overflow-hidden border-8 shadow-2xl transition-all duration-500 ${darkMode ? 'border-gray-900 shadow-black' : 'border-white shadow-gray-200'}`}>
                            <div className="h-full w-full bg-gray-200 group">
                                <img 
                                    src={profilePic} 
                                    alt="Abdurezak Shemsu" 
                                    className="w-full h-full object-cover  hover:grayscale transition-all duration-1000 scale-105 group-hover:scale-100"
                                />
                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-t via-transparent ${darkMode ? 'from-gray-950/80' : 'from-gray-900/20'}`} />
                            </div>
                        </div>

                        {/* --- Floating Innovation Cards --- */}
                        <motion.div 
                            animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className={`absolute -right-12 top-20 p-6 rounded-[32px] shadow-2xl border backdrop-blur-2xl ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/95 border-orange-100'}`}
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/40 flex items-center justify-center text-white">
                                    <Layers size={28} />
                                </div>
                                <div className="pr-6">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Projects</p>
                                    <p className="text-lg font-black tracking-tight leading-none">50+ Managed</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className={`absolute -left-12 bottom-20 p-6 rounded-[32px] shadow-2xl border backdrop-blur-2xl ${darkMode ? 'bg-gray-900/90 border-gray-700' : 'bg-white/95 border-blue-100'}`}
                        >
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/40 flex items-center justify-center text-white">
                                    <CheckCircle2 size={28} />
                                </div>
                                <div className="pr-6">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Feedback</p>
                                    <p className="text-lg font-black tracking-tight leading-none">100% Client Sat.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* --- Refined Scroll Indicator --- */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4"
            >
                <div className={`w-[1px] h-12 bg-gradient-to-b from-transparent ${darkMode ? 'via-gray-700' : 'via-gray-300'} to-orange-500`} />
                <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Discover
                </span>
            </motion.div>
        </section>
    );
};

export default Portfolio;