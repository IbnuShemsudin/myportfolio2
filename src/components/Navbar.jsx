import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { scrollYProgress, scrollY } = useScroll();
    
    // Smooth progress bar logic
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Dynamic width transformation as you scroll
    const navWidth = useTransform(scrollY, [0, 100], ["100%", "90%"]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" },
    ];

    const colors = darkMode ? {
        navbg: isScrolled ? "bg-gray-900/80 border-gray-800/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]" : "bg-transparent border-transparent",
        textprimary: "text-white",
        textHover: "hover:text-orange-400",
        textActive: "text-orange-400",
        indicator: "bg-orange-500",
        mobileOverlay: "bg-gray-950/95 border-gray-800",
    } : {
        navbg: isScrolled ? "bg-white/80 border-gray-200/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" : "bg-transparent border-transparent",
        textprimary: "text-gray-900",
        textHover: "hover:text-orange-500",
        textActive: "text-orange-600",
        indicator: "bg-orange-500",
        mobileOverlay: "bg-white/95 border-gray-100",
    };

    const handleNavItemClick = (name) => {
        setActiveSection(name.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <div className='fixed top-0 left-0 w-full flex justify-center z-[100] p-4 pointer-events-none'>
            <motion.nav
                style={{ width: navWidth }}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`pointer-events-auto relative flex items-center justify-between px-8 py-4 rounded-full border backdrop-blur-md transition-all duration-500 ease-in-out ${colors.navbg}`}
            >
                {/* Logo with high-end letter spacing */}
                <div className={`text-xl font-black tracking-[-0.05em] ${colors.textprimary}`}>
                    ABDUREZAK<span className="text-orange-500">.</span>
                </div>

                {/* Desktop Menu - Refined with staggered hover & magnetic feel */}
                <ul className='hidden md:flex items-center gap-10'>
                    {navItems.map((item) => (
                        <li key={item.name} className="relative group">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={item.link}
                                onClick={() => handleNavItemClick(item.name)}
                                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-300 ${colors.textprimary} ${colors.textHover} ${activeSection === item.name.toLowerCase() ? colors.textActive : ''}`}
                            >
                                {item.name}
                                
                                {/* Animated underline logic */}
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div 
                                        layoutId="activeUnderline" 
                                        className={`absolute -bottom-1 left-0 w-full h-[2px] ${colors.indicator} rounded-full`} 
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.a>
                        </li>
                    ))}
                </ul>

                {/* Actions - Modern Icon Buttons */}
                <div className='flex items-center gap-3'>
                    <motion.button 
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleDarkMode} 
                        className={`p-2.5 rounded-full border ${darkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-100 bg-gray-50/50'} ${colors.textprimary} transition-all`}
                    >
                        {darkMode ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
                    </motion.button>
                    
                    <button 
                        className={`md:hidden p-2.5 rounded-full ${colors.textprimary} border ${darkMode ? 'border-gray-800' : 'border-gray-100'}`} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={18} strokeWidth={3} /> : <Menu size={18} strokeWidth={3} />}
                    </button>

                    {/* Desktop "Let's Talk" CTA - Optional but professional */}
                    <motion.a 
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/20"
                    >
                        Contact <ArrowUpRight size={14} />
                    </motion.a>
                </div>

                {/* Scroll Progress Bar - Refined Thin line */}
                <motion.div
                    className={`absolute bottom-0 left-10 right-10 h-[1px] ${colors.indicator} origin-left rounded-full hidden md:block opacity-50`}
                    style={{ scaleX }}
                />
            </motion.nav>

            {/* Mobile Menu Overlay - Staggered Item Animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className={`absolute top-24 left-4 right-4 p-10 rounded-[3rem] border backdrop-blur-2xl shadow-3xl flex flex-col items-center gap-8 md:hidden pointer-events-auto ${colors.mobileOverlay}`}
                    >
                        {navItems.map((item, i) => (
                            <motion.a 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                key={item.name} 
                                href={item.link} 
                                onClick={() => handleNavItemClick(item.name)} 
                                className={`text-sm font-black uppercase tracking-[0.4em] ${colors.textprimary} ${colors.textHover} ${activeSection === item.name.toLowerCase() ? 'text-orange-500' : ''}`}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;