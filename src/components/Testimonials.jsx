import React from 'react';
import { motion as m } from 'framer-motion';
import { Quote, Star, CheckCircle, Award, Zap } from 'lucide-react';

const Testimonials = ({ darkMode }) => {
    const reviews = [
        {
            id: 1,
            name: "Henok Tadesse",
            role: "Founder, ShemsuSuk",
            content: "Abdurezak transformed our retail operations. The AI inventory system he built reduced our manual tracking time by nearly 40%. A top-tier engineer.",
            rating: 5,
            company: "Retail Tech",
            avatar: "https://i.pravatar.cc/150?u=henok"
        },
        {
            id: 2,
            name: "Sara Solomon",
            role: "Product Manager",
            content: "The Emdebir LMS is a game changer for our students. His ability to build offline-first features for rural areas shows he truly understands user needs.",
            rating: 5,
            company: "EdTech Solutions",
            avatar: "https://i.pravatar.cc/150?u=sara"
        },
        {
            id: 3,
            name: "Dawit Isaac",
            role: "CTO, Ethio Fit",
            content: "Clean code, scalable architecture, and great communication. The API he developed for our fitness gallery is robust and lightning-fast.",
            rating: 5,
            company: "Health & Wellness",
            avatar: "https://i.pravatar.cc/150?u=dawit"
        }
    ];

    return (
        <section id="testimonials" className={`py-32 px-6 transition-colors duration-700 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-20 space-y-4">
                    <m.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3"
                    >
                        <Award size={16} className="text-orange-500" />
                        <span className="text-orange-500 font-black uppercase tracking-[0.4em] text-[10px]">Social Proof</span>
                    </m.div>
                    <h2 className={`text-5xl md:text-6xl font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Client <span className="text-orange-500">Feedback.</span>
                    </h2>
                    <p className={`max-w-xl mx-auto text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Don't just take my word for it. Here is what industry leaders say about my engineering process and results.
                    </p>
                </div>

                {/* Testimonial Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <m.div
                            key={review.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl ${
                                darkMode 
                                ? 'bg-gray-900/50 border-gray-800 hover:border-orange-500/50' 
                                : 'bg-white border-gray-100 hover:shadow-orange-500/10'
                            }`}
                        >
                            <Quote className="absolute top-8 right-10 text-orange-500/20" size={40} />
                            
                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
                                ))}
                            </div>

                            <p className={`text-lg italic font-medium leading-relaxed mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-800/10">
                                <img 
                                    src={review.avatar} 
                                    alt={review.name} 
                                    className="w-12 h-12 rounded-full border-2 border-orange-500/20"
                                />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className={`text-sm font-black uppercase tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {review.name}
                                        </h4>
                                        <CheckCircle size={14} className="text-blue-500" />
                                    </div>
                                    <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                                        {review.role}
                                    </p>
                                </div>
                            </div>
                        </m.div>
                    ))}
                </div>

                {/* Trust Bar */}
                <m.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`mt-20 p-8 rounded-[2rem] border border-dashed flex flex-wrap items-center justify-center gap-12 ${
                        darkMode ? 'border-gray-800' : 'border-gray-200'
                    }`}
                >
                    <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                        <Zap size={20} className="text-orange-500" />
                        <span className={`font-black tracking-tighter ${darkMode ? 'text-white' : 'text-gray-900'}`}>FAST-TECH</span>
                    </div>
                    <div className="text-xl font-black opacity-30 tracking-tighter italic shadow-sm">GLOBAL SYSTEMS</div>
                    <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                        <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold">E</div>
                        <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>ETHIO-DEV</span>
                    </div>
                </m.div>
            </div>
        </section>
    );
};

export default Testimonials;