import { useEffect, useState } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import Navbar from "./components/Navbar"


const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {
    Aos.init({ 
      duration: 2000,
      once: false,
      offset: 100,
    })
    document.documentElement.classList.add('dark');
  }, [])
   
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', newMode);
  }
  




  return (
    <div className={
      darkMode ? "dark bg-gray-900 text-white min-h-screen transition-colors duration-500"
      : "bg-white text-black min-h-screen transition-colors duration-500"
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App
