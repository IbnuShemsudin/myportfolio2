import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 1. Setup Scroll Progress Logic
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Services", link: "#services" },
        { name: "Contact", link: "#contact" },
    ];

    const colors = darkMode ? {
        navbg: "bg-gray-900/80 backdrop-blur-md border-gray-700",
        textprimary: "text-white",
        textHover: "hover:text-orange-400",
        textActive: "text-orange-400",
        indicator: "bg-orange-400",
    } : {
        navbg: "bg-white/80 backdrop-blur-md border-gray-200",
        textprimary: "text-gray-800",
        textHover: "hover:text-orange-500",
        textActive: "text-orange-600",
        indicator: "bg-orange-500",
    };

    const handleNavItemClick = (name) => {
        setActiveSection(name.toLowerCase());
        setIsMenuOpen(false);
    };

    return (
        <div className='fixed top-0 left-0 w-full flex justify-center z-50 p-4'>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`relative flex items-center justify-between px-6 py-3 rounded-full border shadow-lg transition-all duration-300 w-full max-w-4xl ${colors.navbg}`}
            >
                {/* Logo */}
                <div className={`text-xl font-bold italic tracking-tighter ${colors.textprimary}`}>
                    PORTFOLIO<span className="text-orange-500">.</span>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex items-center gap-8'>
                    {navItems.map((item) => (
                        <li key={item.name} className="relative">
                            <a
                                href={item.link}
                                onClick={() => handleNavItemClick(item.name)}
                                className={`text-sm font-medium transition-colors ${colors.textprimary} ${colors.textHover} ${activeSection === item.name.toLowerCase() ? colors.textActive : ''}`}
                            >
                                {item.name}
                                {activeSection === item.name.toLowerCase() && (
                                    <motion.div 
                                        layoutId="underline" 
                                        className={`absolute -bottom-1 left-0 w-full h-0.5 ${colors.indicator} rounded-full`} 
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className='flex items-center gap-4'>
                    <button onClick={toggleDarkMode} className={`p-2 rounded-full ${colors.textprimary} hover:bg-orange-500/10`}>
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className={`md:hidden p-2 ${colors.textprimary}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* 2. The Scroll Progress Bar */}
                <motion.div
                    className={`absolute bottom-0 left-6 right-6 h-[2px] ${colors.indicator} origin-left rounded-full`}
                    style={{ scaleX }}
                />
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`absolute top-20 left-4 right-4 p-6 rounded-2xl border shadow-xl flex flex-col items-center gap-6 md:hidden ${colors.navbg}`}
                    >
                        {navItems.map((item) => (
                            <a key={item.name} href={item.link} onClick={() => handleNavItemClick(item.name)} className={`text-lg font-semibold ${colors.textprimary} ${colors.textHover}`}>
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