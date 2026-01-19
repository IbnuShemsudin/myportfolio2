import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Gurmessa Kedir",
        role: "CEO, Tech Innovations",
        content: "Abdurezak is a top-tier engineer. He delivered our MVP three weeks ahead of schedule with code quality that exceeded our expectations.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gurmessa"
    },
    {
        name: "Hayatudin Jemal",
        role: "CEO, MelaVerse Tech",
        content: "The attention to detail in the UI/UX is incredible. Our conversion rate increased by 40% after the redesign he implemented.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hayatudin"
    },
    {
        name: "Kenenisa Meiso",
        role: "Senior Developer",
        content: "A brilliant collaborator. His mastery of the MERN stack and clean architectural patterns made him an asset to our team.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kenenisa"
    }
];

const logos = [
    { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MongoDB", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" },
    { name: "Tailwind", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Vercel", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg" },
    // { name: "Framer", url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Framer_logo.svg" },
    { name: "Django", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg" },
    { name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "React Native", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    
];

const Testimonials = ({ darkMode }) => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    return (
        <section id="testimonials" className={`py-24 px-6 relative overflow-hidden transition-colors duration-700 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
            
            {/* Background Decorative Blob */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none ${darkMode ? 'bg-orange-500/20' : 'bg-orange-200/40'}`} />

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* --- Animated Logo Slider --- */}
                <div className="mb-32">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        className={`text-center text-[10px] font-black uppercase tracking-[0.4em] mb-12 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        Powering projects with modern tech
                    </motion.p>
                    
                    <div className="relative flex overflow-hidden group">
                        <motion.div 
                            className="flex items-center gap-16 md:gap-32 whitespace-nowrap px-4"
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                        >
                            {/* Render logos twice for infinite effect */}
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <img 
                                    key={index} 
                                    src={logo.url} 
                                    alt={logo.name} 
                                    className={`h-8 md:h-12 w-auto grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer ${darkMode ? 'invert' : ''}`} 
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* --- Section Header --- */}
                <div className="flex flex-col items-center mb-20 text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                    >
                        <Quote size={14} className="animate-pulse" /> Client Feedback
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`text-5xl md:text-7xl font-black tracking-tighter leading-none ${darkMode ? 'text-white' : 'text-gray-900'}`}
                    >
                        TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">EXPERTS.</span>
                    </motion.h2>
                </div>

                {/* --- Staggered Testimonial Cards --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className={`p-10 rounded-[3rem] border transition-all relative group ${
                                darkMode 
                                ? 'bg-gray-900/40 border-gray-800 hover:border-orange-500/50 hover:bg-gray-900/60' 
                                : 'bg-[#FAFAFA] border-gray-100 shadow-2xl shadow-gray-200/50 hover:border-orange-200'
                            }`}
                        >
                            {/* Decorative Quote Icon in Card Background */}
                            <Quote className="absolute top-8 right-10 opacity-5 text-orange-500" size={80} />

                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                                ))}
                            </div>
                            
                            <p className={`text-xl font-medium leading-relaxed italic mb-10 relative z-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                "{t.content}"
                            </p>

                            <div className="flex items-center gap-5 mt-auto">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <img 
                                        src={t.avatar} 
                                        alt={t.name} 
                                        className="w-14 h-14 rounded-full relative z-10 border-2 border-orange-500/20 group-hover:border-orange-500 transition-colors" 
                                    />
                                </div>
                                <div>
                                    <h4 className={`font-black text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{t.name}</h4>
                                    <p className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;