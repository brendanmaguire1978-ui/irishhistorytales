import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10 px-4 border-t border-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-serif text-stone-200">Irish History Tales</h3>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Darren Beaming. All Rights Reserved.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href={SOCIAL_LINKS.tiktok} className="hover:text-emerald-500 transition-colors">TikTok</a>
          <a href={SOCIAL_LINKS.youtube} className="hover:text-emerald-500 transition-colors">YouTube</a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-emerald-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;