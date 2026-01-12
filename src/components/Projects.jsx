import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Github, 
    ExternalLink, 
    ShoppingCart, 
    MessageSquare, 
    Layout, 
    Utensils, 
    Languages,
    Layers
} from 'lucide-react';

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
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Layers size={16} className="text-orange-500" />
                            <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Engineering Portfolio</span>
                        </div>
                        <h2 className={`text-6xl md:text-7xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Proven <span className="text-orange-500">Impact.</span>
                        </h2>
                        <p className={`max-w-lg text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            A curated selection of architecture and development projects focusing on scalability and performance.
                        </p>
                    </div>

                    {/* Refined Filter Tabs */}
                    <div className={`flex p-1.5 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
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
                                    <motion.div 
                                        layoutId="activeProjectTab"
                                        className="absolute inset-0 bg-orange-500 rounded-xl -z-10 shadow-lg shadow-orange-500/30"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bento Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className={`group relative rounded-[3rem] p-10 border overflow-hidden flex flex-col justify-between ${project.size} 
                                    ${darkMode ? 'bg-gray-900/40 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50'} 
                                    transition-all duration-500`}
                            >
                                {/* Dynamic Hover Gradient */}
                                <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700`} />
                                
                                <div>
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white bg-gradient-to-br ${project.color} shadow-2xl shadow-orange-500/20 group-hover:scale-110 transition-transform duration-500`}>
                                            {project.icon}
                                        </div>
                                        <div className="flex gap-2">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${darkMode ? 'border-gray-700 bg-gray-800/50 text-gray-400' : 'border-gray-200 bg-gray-50 text-gray-500'}`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <h3 className={`text-3xl font-black mb-4 tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-base leading-relaxed line-clamp-3 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-6 mt-auto">
                                    <div className="flex gap-3">
                                        <a href="#" className={`p-4 rounded-2xl transition-all border ${darkMode ? 'border-gray-800 bg-gray-950 text-white hover:bg-orange-500 hover:border-orange-500' : 'bg-white border-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white shadow-sm'}`}>
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href="#" className={`p-4 rounded-2xl transition-all border ${darkMode ? 'border-gray-800 bg-gray-950 text-white hover:bg-orange-500 hover:border-orange-500' : 'bg-white border-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white shadow-sm'}`}>
                                            <Github size={20} />
                                        </a>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">{project.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;