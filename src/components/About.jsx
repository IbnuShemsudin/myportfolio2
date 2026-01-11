import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Coffee, Rocket, Download, ExternalLink, ShieldCheck, Zap, Globe } from 'lucide-react';
import profilePic from '../assets/profilepic.png';

const About = ({ darkMode }) => {
    const onButtonClick = () => {
        const pdfUrl = "resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Abdurezak_Shemsu_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const stats = [
        { label: "Experience", value: "3+ Years", icon: <ShieldCheck className="text-orange-500" /> },
        { label: "Performance", value: "99.9%", icon: <Zap className="text-orange-500" /> },
        { label: "Deployment", value: "Global", icon: <Globe className="text-orange-500" /> },
    ];

    return (
        <section id="about" className={`py-32 px-6 relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
            
            {/* Background Accent */}
            <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full blur-[120px] opacity-10 ${darkMode ? 'bg-orange-500' : 'bg-orange-300'}`} />

            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                >
                    {/* --- Left Column: Visual Portrait --- */}
                    <div className="lg:col-span-5 relative group">
                        <div className={`relative aspect-[4/5] rounded-[4rem] overflow-hidden border-8 transition-all duration-500 ${darkMode ? 'border-gray-900 shadow-2xl shadow-black/50' : 'border-gray-50 shadow-xl shadow-orange-100/50'}`}>
                            <img 
                                src={profilePic} 
                                alt="Abdurezak Shemsu Profile" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            
                            {/* Glassmorphic Skill Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 hidden md:block">
                                <div className="flex justify-between items-center text-white">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-70">Focus</p>
                                        <p className="text-sm font-bold">Scalable Systems</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                                        <Rocket size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Shape */}
                        <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse" />
                    </div>

                    {/* --- Right Column: Narrative & Stats --- */}
                    <div className="lg:col-span-7 space-y-10">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-[2px] w-12 bg-orange-500" />
                                <span className="text-xs font-black tracking-[0.3em] uppercase text-orange-500">
                                    Engineering Excellence
                                </span>
                            </div>
                            
                            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                                High-Impact <br /> 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Solutions.</span>
                            </h2>
                            
                            <div className={`space-y-6 text-xl leading-relaxed font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <p>
                                    I am <span className={`${darkMode ? 'text-white' : 'text-gray-900'} font-bold`}>Abdurezak Shemsu</span>, a Full-Stack Engineer who views code as a tool for business transformation. I don't just solve tickets; I architect experiences.
                                </p>
                                <p className="text-lg">
                                    Specializing in the <span className="text-orange-500 font-bold underline decoration-2 underline-offset-4">MERN Stack and React Native</span>, I lead projects from the initial whiteboard sketch to production-ready deployment.
                                </p>
                            </div>
                        </div>

                        {/* Professional Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 py-4">
                            {stats.map((stat, i) => (
                                <div key={i} className={`p-5 rounded-3xl border transition-all ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                                    <div className="mb-3">{stat.icon}</div>
                                    <p className="text-lg font-black">{stat.value}</p>
                                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-50">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-5">
                            <button 
                                onClick={onButtonClick}
                                className="group relative flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-[20px] font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-orange-500/25 active:scale-95"
                            >
                                <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                                Get Resume
                            </button>
                            
                            <a 
                                href="#contact"
                                className={`flex items-center gap-3 px-10 py-5 rounded-[20px] font-black uppercase tracking-widest text-xs border-2 transition-all ${
                                    darkMode ? 'border-gray-800 hover:bg-gray-900' : 'border-gray-200 hover:bg-gray-50'
                                }`}
                            >
                                Contact Me <ExternalLink size={18} className="text-orange-500" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;