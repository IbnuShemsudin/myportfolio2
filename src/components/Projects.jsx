import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { 
    Github, 
    ExternalLink, 
    ShoppingCart, 
    MessageSquare, 
    Layout, 
    Utensils, 
    Languages,
    Layers,
    ArrowUpRight,
    X,
    CheckCircle2
} from 'lucide-react';

const Projects = ({ darkMode }) => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = ['All', 'Web', 'Mobile', 'AI'];

    const projects = [
        {
            id: 1,
            title: "E-Commerce OS",
            category: "Web",
            desc: "Enterprise-grade retail engine with real-time inventory sync and Stripe integration.",
            longDesc: "A robust retail solution built for high-scale traffic. It includes a custom-built dashboard for inventory management, real-time analytics, and a seamless Stripe-powered checkout experience optimized for mobile conversions.",
            tech: ["Next.js", "Tailwind", "Stripe"],
            features: ["Real-time Inventory Sync", "Multi-currency Support", "Advanced Admin Analytics"],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000",
            size: "md:col-span-2 md:row-span-2",
            color: "from-orange-500 to-rose-600",
            icon: <ShoppingCart size={28} />,
        },
        {
            id: 6,
            title: "Emdebir LMS",
            category: "Web",
            desc: "A digital campus for Emdebir Highschool modernizing rural education access.",
            longDesc: "This Learning Management System was designed to provide students and teachers in rural Ethiopia with digital access to curriculum materials, automated grade tracking, and offline-capable resource sharing.",
            tech: ["React", "Node.js", "MongoDB"],
            features: ["Offline Resource Access", "Automated Gradebook", "Student Performance Reports"],
            image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000",
            size: "md:col-span-1 md:row-span-2",
            color: "from-indigo-500 to-blue-600",
            icon: <Layers size={28} />,
        },
        {
            id: 7,
            title: "TaskMaster AI",
            category: "AI",
            desc: "Smart task manager that prioritizes to-dos using NLP and machine learning.",
            longDesc: "TaskMaster uses Natural Language Processing to categorize user input and a custom ML model to rank tasks based on urgency and historical completion patterns.",
            tech: ["Python", "TensorFlow", "React"],
            features: ["NLP Task Input", "Predictive Scheduling", "Focus Mode Timer"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
            size: "md:col-span-1 md:row-span-1",
            color: "from-green-500 to-lime-600",
            icon: <MessageSquare size={24} />,
        },
        {
            id: 2,
            title: "Guragigna Dict",
            category: "Mobile",
            desc: "Preserving heritage through tech. Fast offline dictionary for the Guragigna language.",
            longDesc: "A linguistically accurate, lightning-fast mobile dictionary designed to preserve the Guragigna language. Built with performance in mind, it works entirely offline with a local SQLite database.",
            tech: ["RN", "SQLite"],
            features: ["Instant Search", "Audio Pronunciations", "Favorites Collection"],
            image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2000",
            size: "md:col-span-1 md:row-span-2",
            color: "from-amber-500 to-orange-600",
            icon: <Languages size={28} />,
        },
        {
            id: 3,
            title: "Support AI",
            category: "AI",
            desc: "LLM-powered support bot reducing response times by 60% with context-aware NLP.",
            longDesc: "An intelligent support layer that integrates with existing helpdesks. It scans your documentation and provides instant, accurate answers to customers using RAG (Retrieval-Augmented Generation).",
            tech: ["OpenAI", "Node", "VectorDB"],
            features: ["RAG Architecture", "Human-in-the-loop handoff", "Multi-language Support"],
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2000",
            size: "md:col-span-1 md:row-span-1",
            color: "from-blue-500 to-cyan-500",
            icon: <MessageSquare size={24} />,
        },
        {
            id: 4,
            title: "Mamme Ecosystem",
            category: "Web",
            desc: "Full restaurant management suite—from digital menus to kitchen automation.",
            longDesc: "A comprehensive solution for the food service industry. It manages everything from the customer-facing QR menu to the kitchen display system (KDS) and inventory alerts.",
            tech: ["MERN", "Socket.io"],
            features: ["Real-time Order Sync", "Staff Scheduling", "QR Code Generation"],
            image: "https://images.unsplash.com/photo-1556742049-04ff4361cc5a?q=80&w=2000",
            size: "md:col-span-2 md:row-span-1",
            color: "from-emerald-500 to-teal-600",
            icon: <Utensils size={24} />,
        }
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
                    </m.div>

                    {/* Filter Tabs */}
                    <div className={`flex p-1.5 rounded-2xl border backdrop-blur-md ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-100/50 border-gray-200'}`}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`relative px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-xl ${
                                    filter === cat ? 'text-white' : 'text-gray-500 hover:text-orange-500'
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
                    </div>
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
                                whileHover={{ y: -8 }}
                                className={`group relative rounded-[3rem] p-10 border overflow-hidden flex flex-col justify-between ${project.size} 
                                    ${darkMode ? 'bg-gray-900/40 border-gray-800' : 'bg-white border-gray-100 shadow-xl shadow-gray-200/20'}`}
                            >
                                <div className={`absolute -right-24 -top-24 w-80 h-80 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-700`} />
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${project.color}`}>
                                            {project.icon}
                                        </div>
                                        <div className="flex flex-wrap gap-2 justify-end">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border ${darkMode ? 'border-gray-700 bg-gray-800/80 text-gray-400' : 'border-gray-200 bg-gray-50 text-gray-500'}`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className={`text-4xl font-black mb-4 tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                                    <p className={`text-base line-clamp-2 font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.desc}</p>
                                </div>

                                <div className="flex items-center justify-between pt-6 mt-auto relative z-10">
                                    <div className="flex gap-2">
                                        <a href="#" className={`p-3 rounded-xl border ${darkMode ? 'border-gray-800 text-white' : 'border-gray-100'}`}><Github size={18}/></a>
                                        <a href="#" className={`p-3 rounded-xl border ${darkMode ? 'border-gray-800 text-white' : 'border-gray-100'}`}><ExternalLink size={18}/></a>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedProject(project)}
                                        className="group/btn flex items-center gap-2 cursor-pointer"
                                    >
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Case Study</span>
                                        <ArrowUpRight size={14} className="text-orange-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </m.div>
                        ))}
                    </AnimatePresence>
                </m.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                            <m.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                            />
                            
                            <m.div 
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[3rem] shadow-2xl ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
                            >
                                <div className="relative h-64 md:h-96 w-full overflow-hidden">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900' : 'from-white'} to-transparent`} />
                                    <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 p-3 rounded-full bg-black/20 backdrop-blur-md text-white"><X size={20} /></button>
                                </div>

                                <div className="p-8 md:p-12 -mt-20 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div>
                                            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white bg-gradient-to-br ${selectedProject.color} shadow-lg`}>
                                                {selectedProject.icon}
                                            </div>
                                            <h2 className="text-5xl font-black tracking-tighter mb-4">{selectedProject.title}</h2>
                                            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedProject.longDesc}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map(t => (
                                                    <span key={t} className="px-3 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-bold rounded-full uppercase tracking-widest border border-orange-500/20">{t}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={`rounded-[2rem] p-8 border ${darkMode ? 'bg-gray-950/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500 mb-6">Key Engineering Features</h4>
                                            <ul className="space-y-4">
                                                {selectedProject.features?.map((f, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm font-medium">
                                                        <CheckCircle2 size={18} className="text-orange-500 mt-0.5 shrink-0" />
                                                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-10 pt-8 border-t border-gray-800/10 flex gap-4">
                                                <button className="flex-1 py-4 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-orange-500/20">
                                                    Live Demo <ExternalLink size={18}/>
                                                </button>
                                                <button className={`p-4 rounded-2xl border ${darkMode ? 'border-gray-800' : 'border-gray-200'} transition-colors hover:bg-orange-500 hover:text-white`}>
                                                    <Github size={20}/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </m.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;