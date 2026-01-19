import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';import { 
    Github, 
    ExternalLink, 
    ShoppingCart, 
    MessageSquare, 
    Layout, 
    Utensils, 
    Languages,
    Layers,
    ArrowUpRight
} from 'lucide-react';


    // ... rest of your code

const Projects = ({ darkMode }) => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Web', 'Mobile', 'AI'];

    const projects = [
        {
            id: 1,
            title: "E-Commerce OS",
            category: "Web",
            desc: "Enterprise-grade retail engine with real-time inventory sync, Stripe integration, and high-conversion UX.",
            tech: ["Next.js", "Tailwind", "Stripe"],
            size: "md:col-span-2 md:row-span-2",
            color: "from-orange-500 to-rose-600",
            icon: <ShoppingCart size={28} />,
        },
        {
            id: 2,
            title: "Guragigna Dict",
            category: "Mobile",
            desc: "Preserving heritage through tech. A lightning-fast offline dictionary built for the Guragigna language.",
            tech: ["RN", "SQLite"],
            size: "md:col-span-1 md:row-span-2",
            color: "from-amber-500 to-orange-600",
            icon: <Languages size={28} />,
        },
        {
            id: 3,
            title: "Support AI",
            category: "AI",
            desc: "LLM-powered support bot reducing response times by 60% through context-aware NLP.",
            tech: ["OpenAI", "Node"],
            size: "md:col-span-1 md:row-span-1",
            color: "from-blue-500 to-cyan-500",
            icon: <MessageSquare size={24} />,
        },
        {
            id: 4,
            title: "Mamme Ecosystem",
            category: "Web",
            desc: "End-to-end restaurant management suite—from digital menus to kitchen workflow automation.",
            tech: ["MERN", "Socket.io"],
            size: "md:col-span-2 md:row-span-1",
            color: "from-emerald-500 to-teal-600",
            icon: <Utensils size={24} />,
        },
        {
            id: 5,
            title: "DevConnect",
            category: "Mobile",
            desc: "A social platform connecting developers worldwide to collaborate, share, and grow together.",
            tech: ["React Native", "Firebase"],
            size: "md:col-span-1 md:row-span-1",
            color: "from-violet-500 to-purple-600",
            icon: <Layout size={24} />,
        },
    ];

    const filteredProjects = filter === 'All' 
        ? projects 
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className={`py-32 px-6 transition-colors duration-700 ${darkMode ? 'bg-gray-950' : 'bg-[#FDFDFD]'}`}>
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
                    <m.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <Layers size={16} className="text-orange-500 animate-bounce" />
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Engineering Portfolio</span>
                        </div>
                        <h2 className={`text-6xl md:text-7xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Proven <span className="text-orange-500">Impact.</span>
                        </h2>
                        <p className={`max-w-lg text-lg font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Architecture and development focusing on <span className="text-orange-500">scalability</span> and <span className="text-orange-500">performance</span>.
                        </p>
                    </m.div>

                    {/* Filter Tabs */}
                    <m.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`flex p-1.5 rounded-2xl border backdrop-blur-md ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`relative px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl ${
                                    filter === cat 
                                    ? 'text-white' 
                                    : darkMode ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {filter === cat && (
                                    <m.div 
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-orange-500 rounded-xl -z-10 shadow-lg shadow-orange-500/40"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </m.div>
                </div>

                {/* Bento Grid */}
                <m.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <m.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -8 }}
                                className={`group relative rounded-[3rem] p-10 border overflow-hidden flex flex-col justify-between ${project.size} 
                                    ${darkMode ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-100 shadow-xl shadow-gray-200/20'} 
                                    transition-all duration-500`}
                            >
                                {/* Animated Glow Background */}
                                <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-700`} />
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <m.div 
                                            whileHover={{ rotate: 12, scale: 1.1 }}
                                            className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white bg-gradient-to-br ${project.color} shadow-2xl shadow-orange-500/20`}
                                        >
                                            {project.icon}
                                        </m.div>
                                        <div className="flex flex-wrap gap-2 justify-end">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${darkMode ? 'border-gray-700 bg-gray-800/80 text-gray-400' : 'border-gray-200 bg-gray-50 text-gray-500'}`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <h3 className={`text-4xl font-black mb-4 tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-base leading-relaxed line-clamp-3 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 mt-auto relative z-10">
                                    <div className="flex gap-3">
                                        <m.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" className={`p-4 rounded-2xl transition-all border ${darkMode ? 'border-gray-800 bg-gray-950 text-white hover:bg-orange-500' : 'bg-white border-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white shadow-sm'}`}>
                                            <ExternalLink size={20} />
                                        </m.a>
                                        <m.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="#" className={`p-4 rounded-2xl transition-all border ${darkMode ? 'border-gray-800 bg-gray-950 text-white hover:bg-orange-500' : 'bg-white border-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white shadow-sm'}`}>
                                            <Github size={20} />
                                        </m.a>
                                    </div>
                                    <div className="group/btn flex items-center gap-2 cursor-pointer">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Case Study</span>
                                        <ArrowUpRight size={14} className="text-orange-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </m.div>
                        ))}
                    </AnimatePresence>
                </m.div>
            </div>
        </section>
    );
};

export default Projects;