
import React from 'react';
import { Layers, PlayCircle, User, Search, Menu } from 'lucide-react';

const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-sm ${className}`}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F86ED" />
        <stop offset="100%" stopColor="#9B51E0" />
      </linearGradient>
    </defs>
    {/* Stylized G Body */}
    <path 
      d="M75 15C60 5 35 5 20 20C5 35 5 65 20 80C35 95 65 95 80 80C88 72 92 62 92 50L92 35M65 30L45 50L55 60L75 40" 
      stroke="url(#logo-gradient)" 
      strokeWidth="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M92 50L92 80M92 80L65 80L80 65" 
      stroke="url(#logo-gradient)" 
      strokeWidth="10" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Sparkle Icon */}
    <path 
      d="M85 20C85 25 88 28 93 28C88 28 85 31 85 36C85 31 82 28 77 28C82 28 85 25 85 20Z" 
      fill="url(#logo-gradient)"
    />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-full border border-white/5">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Logo size={36} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="font-display font-bold text-xl tracking-tighter uppercase">
            GRAPH<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">LAIR</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-blue-400 transition-colors">Courses</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Workshops</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Community</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Resources</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-full transition-colors hidden sm:block text-white/60 hover:text-white">
            <Search size={20} />
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all shadow-lg hover:shadow-blue-500/20">
            Join Academy
          </button>
          <button className="md:hidden p-2 text-white/70">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Logo size={44} />
            <span className="font-display font-bold text-2xl tracking-tighter uppercase">GRAPHLAIR</span>
          </div>
          <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
            Empowering the next generation of digital artists with cutting-edge tools, professional curriculum, and AI-assisted learning in the heart of the digital lair.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'Discord', 'Instagram', 'YouTube'].map(social => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest font-bold text-white/40 hover:text-blue-400 transition-colors">{social}</a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-display font-bold mb-6 text-sm tracking-widest text-white/90">EXPLORE</h4>
          <ul className="space-y-4 text-sm text-white/40 font-light">
            <li><a href="#" className="hover:text-white transition-colors">All Courses</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Masterclasses</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Free Tutorials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Design Assets</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-sm tracking-widest text-white/90">SUPPORT</h4>
          <ul className="space-y-4 text-sm text-white/40 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-white/20 uppercase font-bold">
        <p>&copy; 2024 GRAPHLAIR ACADEMY. ALL RIGHTS RESERVED.</p>
        <p className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          POWERED BY ARTIFICIAL INTELLIGENCE & CREATIVITY
        </p>
      </div>
    </footer>
  );
};

export { Navbar, Footer };
