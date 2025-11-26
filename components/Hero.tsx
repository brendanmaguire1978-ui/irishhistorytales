import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Irish Landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-6 inline-block p-2 px-4 rounded-full border border-amber-500/50 bg-emerald-950/30 backdrop-blur-sm">
          <span className="text-amber-400 font-serif tracking-widest text-sm uppercase">Uncovering the Past</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-stone-100 mb-6 drop-shadow-lg leading-tight">
          Where Myths Breath <br/>
          <span className="text-amber-500">And History Bleeds</span>
        </h1>
        <p className="mt-4 text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed">
          Join <strong>Darren Beaming</strong> on a journey through the mists of Irish time. From the ancient Tuatha Dé Danann to the rebellions that shaped a nation.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#books" 
            className="px-8 py-3 border-2 border-amber-600 bg-amber-600 text-stone-900 font-bold rounded hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-lg shadow-amber-900/50"
          >
            Explore Books
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;