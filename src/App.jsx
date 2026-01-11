import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Portfolio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  // 1. Theme State Logic
  const [darkMode, setDarkMode] = useState(true);

  // 2. Persist Theme (Optional but Professional)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') setDarkMode(false);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <div className={`transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      
      {/* 3. Navigation */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* 4. Page Sections */}
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        
        {/* The Marquee acts as a visual break between Hero and Projects */}
        <Skills darkMode={darkMode} />
        
        <Projects darkMode={darkMode} />
        
        <Contact darkMode={darkMode} />
      </main>

      {/* 5. Custom Global Cursor (Optional/Bonus) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-20">
        <div className={`absolute top-0 left-0 w-full h-full ${darkMode ? 'bg-[radial-gradient(circle_at_50%_50%,_rgba(249,115,22,0.1),transparent_50%)]' : 'bg-[radial-gradient(circle_at_50%_50%,_rgba(249,115,22,0.05),transparent_50%)]'}`} />
      </div>

    </div>
  );
}

export default App;