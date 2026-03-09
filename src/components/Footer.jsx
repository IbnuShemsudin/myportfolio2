import React from 'react';
import { motion as m } from 'framer-motion';
import { 
    Github, 
    Linkedin, 
    Twitter, 
    Mail, 
    ArrowUpRight, 
    Terminal, 
    Heart 
} from 'lucide-react';

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'Github', icon: <Github size={20} />, href: '#' },
        { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
        { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
        { name: 'Email', icon: <Mail size={20} />, href: 'mailto:your@email.com' },
    ];

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className={`pt-20 pb-10 px-6 border-t ${darkMode ? 'bg-gray-950 border-gray-900' : 'bg-[#FDFDFD] border-gray-100'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Upper Section: Big Call to Action */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <m.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Let's build the <br />
                            <span className="text-orange-500 text-shadow-glow">next big thing.</span>
                        </h2>
                        
                        {/* Status Indicator */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Available for new projects
                            </span>
                        </div>
                    </m.div>

                    <m.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-end lg:items-end"
                    >
                        <a 
                            href="mailto:hello@abdurezak.dev" 
                            className={`group flex items-center gap-4 text-2xl md:text-3xl font-bold transition-colors ${darkMode ? 'text-white hover:text-orange-500' : 'text-gray-900 hover:text-orange-500'}`}
                        >
                            hello@abdurezak.dev
                            <div className="p-3 rounded-full border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                <ArrowUpRight size={24} />
                            </div>
                        </a>
                    </m.div>
                </div>

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20 pt-20 border-t border-gray-800/10">
                    <div className="col-span-2 md:col-span-1 space-y-6">
                        <div className={`text-xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            ABDUREZAK<span className="text-orange-500">.</span>
                        </div>
                        <p className={`text-sm font-medium leading-relaxed max-w-[200px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Full-stack engineer specializing in high-performance web & mobile architecture.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href} className={`text-sm font-bold transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map(social => (
                                <a 
                                    key={social.name} 
                                    href={social.href}
                                    className={`p-3 rounded-xl border transition-all ${darkMode ? 'border-gray-800 bg-gray-900 text-gray-400 hover:text-white hover:border-orange-500' : 'border-gray-100 bg-white text-gray-500 hover:text-orange-500 hover:shadow-lg'}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">Local Time</h4>
                        <div className={`text-2xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            <span className="ml-2 text-sm font-medium text-gray-500">GMT+3</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className={`flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t ${darkMode ? 'border-gray-900' : 'border-gray-100'}`}>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        <Terminal size={14} className="text-orange-500" />
                        Built with React & Framer Motion
                    </div>
                    
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        © {currentYear} — All Rights Reserved
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> in Ethiopia
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;