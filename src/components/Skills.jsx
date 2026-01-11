import React from 'react';
import { motion } from 'framer-motion';
import { 
    FileJson, 
    Code2, 
    Layers, 
    Database, 
    Globe, 
    Cpu, 
    Smartphone, 
    Terminal 
} from 'lucide-react';

const Skills = ({ darkMode }) => {
    const skills = [
        { name: "React", icon: <Code2 className="text-blue-500" /> },
        { name: "Node.js", icon: <Globe className="text-green-500" /> },
        { name: "Next.js", icon: <Layers className={darkMode ? "text-white" : "text-black"} /> },
        { name: "Tailwind", icon: <Cpu className="text-cyan-400" /> },
        { name: "MongoDB", icon: <Database className="text-emerald-500" /> },
        { name: "TypeScript", icon: <FileJson className="text-blue-600" /> },
        { name: "Python", icon: <Terminal className="text-yellow-500" /> },
        { name: "React Native", icon: <Smartphone className="text-purple-500" /> },
    ];

    const doubledSkills = [...skills, ...skills];

    return (
        /* ADDED ID AND SCROLL MARGIN HERE */
        <section 
            id="skills" 
            className={`py-12 overflow-hidden scroll-mt-20 ${darkMode ? 'bg-gray-900 border-y border-gray-800' : 'bg-gray-50 border-y border-gray-200'}`}
        >
            <div className="flex flex-col items-center mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-2">My Tech Stack</span>
                <div className={`h-[1px] w-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}></div>
            </div>

            <div className="relative flex max-w-[100vw] overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-linear-to-r ${darkMode ? 'from-gray-900' : 'from-gray-50'} to-transparent`} />
                
                <motion.div
                    className="flex whitespace-nowrap gap-12 items-center"
                    animate={{ x: [0, -1920] }} 
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, 
                            ease: "linear",
                        },
                    }}
                >
                    {doubledSkills.map((skill, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center gap-4 px-6 py-3 rounded-2xl border ${
                                darkMode 
                                ? 'bg-gray-800/50 border-gray-700 text-white' 
                                : 'bg-white border-gray-200 text-gray-900'
                            } shadow-sm`}
                        >
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="text-lg font-bold tracking-tight">{skill.name}</span>
                        </div>
                    ))}
                </motion.div>

                <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none bg-linear-to-l ${darkMode ? 'from-gray-900' : 'from-gray-50'} to-transparent`} />
            </div>
        </section>
    );
};

export default Skills;