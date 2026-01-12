import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    const colors = darkMode ? {
        navbg: "bg-gray-900/90 backdrop-blur-xl border-gray-800",
        textprimary: "text-white",
        textHover: "hover:text-orange-400",
        textActive: "text-orange-400",
        indicator: "bg-orange-500",
    } : {
        navbg: "bg-white/90 backdrop-blur-xl border-gray-100",
        textprimary: "text-gray-900",
        textHover: "hover:text-orange-500",
        textActive: "text-orange-600",
        indicator: "bg-orange-500",
    };

    const handleNavItemClick = (name) => {
        setActiveSection(name.toLowerCase());
        setIsMenuOpen(false); // Closes menu on mobile after selection
    };

    return (
        <div className='fixed top-0 left-0 w-full flex justify-center z-[100] p-4 pointer-events-none'>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                // Added pointer-events-auto so clicks work inside the nav
                className={`pointer-events-auto relative flex items-center justify-between px-6 py-3 rounded-full border shadow-2xl transition-all duration-500 w-full max-w-4xl ${colors.navbg}`}
            >
                {/* Logo */}
                <div className={`text-lg font-black tracking-tighter ${colors.textprimary}`}>
                    ABDUREZAK<span className="text-orange-500">.</span>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8'>
                    {navItems.map((item) => (
                        <li key={item.name} className="relative">
                            <a
                                href={item.link}
                                onClick={() => handleNavItemClick(item.name)}
                                className={`text-[11px] font-black uppercase tracking-widest transition-all ${colors.textprimary} ${colors.textHover} ${activeSection === item.name.toLowerCase() ? colors.textActive : ''}`}
                            >
                                {item.name}
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div 
                                        layoutId="underline" 
                                        className={`absolute -bottom-1 left-0 w-full h-[2px] ${colors.indicator} rounded-full`} 
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className='flex items-center gap-2'>
                    <button 
                        onClick={toggleDarkMode} 
                        className={`p-2.5 rounded-full ${colors.textprimary} hover:bg-orange-500/10 transition-colors`}
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button 
                        className={`md:hidden p-2.5 rounded-full ${colors.textprimary} hover:bg-orange-500/10`} 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Scroll Progress Bar (Hidden on Mobile for cleaner look) */}
                <motion.div
                    className={`absolute bottom-0 left-8 right-8 h-[2px] ${colors.indicator} origin-left rounded-full hidden md:block`}
                    style={{ scaleX }}
                />
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className={`absolute top-24 left-4 right-4 p-8 rounded-[2rem] border shadow-2xl flex flex-col items-center gap-6 md:hidden pointer-events-auto ${colors.navbg}`}
                    >
                        {navItems.map((item) => (
                            <a 
                                key={item.name} 
                                href={item.link} 
                                onClick={() => handleNavItemClick(item.name)} 
                                className={`text-xs font-black uppercase tracking-[0.3em] ${colors.textprimary} ${colors.textHover}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;