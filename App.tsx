
import React from 'react';
import { Navbar, Footer } from './components/Layout';
import Scene3D from './components/Scene3D';
import AIDesignAssistant from './components/AIDesignAssistant';
import { COURSES } from './constants';
import { Play, ArrowRight, Zap, Globe, Cpu, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Scene3D />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
              <Zap size={14} className="fill-current" /> Future of 3D Design Education
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 bg-gradient-to-b from-white via-white to-white/30 bg-clip-text text-transparent leading-[1.1]">
              DESIGN BEYOND <br /> THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F86ED] to-[#9B51E0]">CANVAS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Master industrial-grade 3D workflows with real-time feedback and AI-enhanced tutoring at GRAPHLAIR. Built for the creators of tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#4F86ED] to-[#9B51E0] rounded-full font-bold hover:brightness-110 transition-all flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(79,134,237,0.3)]">
                Explore Curriculum <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-10 py-4 glass rounded-full font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-3 border border-white/10">
                <Play size={20} fill="currentColor" /> Watch Trailer
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20">
          <span className="text-[10px] tracking-[0.4em] uppercase font-black">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#4F86ED] to-transparent"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: 'Real-time Engines', desc: 'Master Unreal Engine 5 and Unity with real-time raytracing and Nanite workflows.' },
              { icon: Cpu, title: 'AI Assistant', desc: 'Get 24/7 help from our custom-trained GRAPHLAIR AI model for any design bottlenecks.' },
              { icon: Palette, title: 'Pro Texturing', desc: 'Learn PBR materials, procedural node systems, and hyper-realistic mapping.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[2.5rem] group border border-white/5 hover:border-blue-500/20 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl flex items-center justify-center mb-8 group-hover:from-[#4F86ED]/10 group-hover:to-[#9B51E0]/10 transition-colors border border-white/5">
                  <feature.icon className="text-blue-400 group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight uppercase">FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F86ED] to-[#9B51E0]">COURSES.</span></h2>
              <p className="text-white/40 max-w-lg font-light leading-relaxed">From zero to hero in 3D production. Choose your specialization and start creating cinematic masterpieces in the lair.</p>
            </div>
            <button className="text-blue-400 font-bold flex items-center gap-2 hover:text-white transition-colors group text-sm tracking-widest uppercase">
              View All 48 Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COURSES.map((course) => (
              <div key={course.id} className="group glass rounded-[2rem] overflow-hidden hover:border-[#4F86ED]/30 transition-all duration-500 flex flex-col border border-white/5">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-black tracking-[0.2em] uppercase text-blue-400 border border-white/10">
                    {course.category}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-center text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">
                    <span>{course.level}</span>
                    <span>{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 leading-tight group-hover:text-blue-400 transition-colors">{course.title}</h3>
                  <p className="text-xs text-white/40 mb-8 flex-1 leading-relaxed font-light">{course.description}</p>
                  <button className="w-full py-4 rounded-2xl border border-white/5 bg-white/5 group-hover:bg-gradient-to-r group-hover:from-[#4F86ED] group-hover:to-[#9B51E0] group-hover:border-transparent transition-all text-[11px] font-black uppercase tracking-[0.2em]">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass p-12 md:p-24 rounded-[4rem] overflow-hidden relative border border-white/5">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-600/10 blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-600/10 blur-[150px] pointer-events-none"></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter uppercase leading-tight">READY TO JOIN THE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F86ED] to-[#9B51E0]">GRAPHLAIR?</span></h2>
              <p className="text-xl text-white/40 mb-12 font-light leading-relaxed">Join 10,000+ students already mastering the tools of the future. The lair is open for those who dare to build the next dimension.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <button className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-gradient-to-r hover:from-[#4F86ED] hover:to-[#9B51E0] hover:text-white transition-all shadow-2xl">
                  Get Lifetime Access
                </button>
                <button className="w-full sm:w-auto px-12 py-5 border border-white/10 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all text-white/70 hover:text-white">
                  Contact Admissions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AIDesignAssistant />
    </div>
  );
};

export default App;
