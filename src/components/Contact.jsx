import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Github, Instagram, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';

const Contact = ({ darkMode }) => {
    const [status, setStatus] = useState('idle');

    const handleSendEmail = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            from_name: e.target.from_name.value,
            from_email: e.target.from_email.value,
            message: e.target.message.value,
        };

        try {
            // Updated to Formspree for live deployment
            // REPLACE 'mqakpzoz' with your unique Formspree ID
            const API_URL = 'https://formspree.io/f/mykkykan'; 

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className={`py-32 px-6 relative overflow-hidden transition-colors duration-700 ${darkMode ? 'bg-gray-950' : 'bg-[#FAFAFA]'}`}>
            
            {/* --- Background Aesthetic Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full blur-[150px] opacity-10 ${darkMode ? 'bg-orange-600' : 'bg-orange-300'}`} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-20"
                >
                    {/* --- Left Column: Context & Connection --- */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]"
                            >
                                <MessageSquare size={14} /> Get In Touch
                            </motion.div>
                            
                            <h2 className={`text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                READY TO START <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">A PROJECT?</span>
                            </h2>
                            
                            <p className={`text-xl leading-relaxed max-w-md ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Whether you're a startup looking for an MVP or an agency needing a Senior hand, I'm here to deliver excellence.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {[
                                { icon: Mail, label: "Email Me", value: "musteshemsu@gmail.com", href: "mailto:musteshemsu@gmail.com" },
                                { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: null }
                            ].map((item, idx) => (
                                <div key={idx} className={`p-6 rounded-[2rem] border transition-all hover:scale-[1.02] ${darkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-100 shadow-sm'}`}>
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                                            <item.icon size={22} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className={`text-lg font-bold hover:text-orange-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</a>
                                            ) : (
                                                <p className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Connect */}
                        <div className="pt-6">
                            <p className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-40">Direct Socials</p>
                            <div className="flex gap-4">
                                {[
                                    { Icon: Github, link: "https://github.com/IbnuShemsudin" },
                                    { Icon: Send, link: "https://t.me/Abdure_Shemsu" },
                                    { Icon: Instagram, link: "https://instagram.com/abdureblack" }
                                ].map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5 }}
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all ${
                                            darkMode ? 'border-gray-800 text-white hover:border-orange-500/50 hover:bg-gray-800' : 'border-gray-100 text-gray-900 hover:border-orange-500/30 hover:bg-white hover:shadow-xl'
                                        }`}
                                    >
                                        <item.Icon size={22} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- Right Column: The Premium Form --- */}
                    <div className="lg:col-span-7 relative">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className={`p-10 md:p-14 rounded-[3.5rem] border relative overflow-hidden transition-all ${
                                darkMode ? 'bg-gray-900/40 border-gray-800 shadow-2xl backdrop-blur-2xl' : 'bg-white border-gray-100 shadow-2xl shadow-gray-200'
                            }`}
                        >
                            <form onSubmit={handleSendEmail} className="space-y-8 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase tracking-widest ml-1 opacity-50">Identity</label>
                                        <input 
                                            name="from_name"
                                            required
                                            type="text" 
                                            placeholder="Your Name"
                                            className={`w-full p-5 rounded-2xl border bg-transparent outline-none focus:border-orange-500 transition-all ${darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-900'}`}
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-black uppercase tracking-widest ml-1 opacity-50">Email Reach</label>
                                        <input 
                                            name="from_email"
                                            required
                                            type="email" 
                                            placeholder="...@gmail.com"
                                            className={`w-full p-5 rounded-2xl border bg-transparent outline-none focus:border-orange-500 transition-all ${darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-900'}`}
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <label className="text-[11px] font-black uppercase tracking-widest ml-1 opacity-50">Project Brief</label>
                                    <textarea 
                                        name="message"
                                        required
                                        rows="4"
                                        placeholder="Briefly describe your vision..."
                                        className={`w-full p-5 rounded-2xl border bg-transparent outline-none focus:border-orange-500 transition-all resize-none ${darkMode ? 'border-gray-700 text-white' : 'border-gray-200 text-gray-900'}`}
                                    ></textarea>
                                </div>

                                <button 
                                    disabled={status === 'sending'}
                                    className={`w-full flex items-center justify-center gap-4 font-black uppercase tracking-[0.2em] py-6 rounded-2xl transition-all relative group ${
                                        status === 'success' ? 'bg-green-600' : 'bg-orange-500 hover:bg-orange-600'
                                    } text-white shadow-2xl shadow-orange-500/20 active:scale-95`}
                                >
                                    <AnimatePresence mode="wait">
                                        {status === 'idle' && (
                                            <motion.div key="idle" className="flex items-center gap-2">
                                                Initialize Contact <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </motion.div>
                                        )}
                                        {status === 'sending' && (
                                            <motion.div key="sending" className="flex items-center gap-3">
                                                Processing <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            </motion.div>
                                        )}
                                        {status === 'success' && (
                                            <motion.div key="success" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2">
                                                Sent successfully <CheckCircle size={20} />
                                            </motion.div>
                                        )}
                                        {status === 'error' && (
                                            <motion.div key="error" className="flex items-center gap-2">
                                                System Error <AlertCircle size={20} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;