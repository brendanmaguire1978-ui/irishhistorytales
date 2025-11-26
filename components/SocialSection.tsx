import React, { useEffect } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ExternalLink, Youtube } from 'lucide-react';

const SocialSection: React.FC = () => {
  // Dynamically load the TikTok embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-900 text-stone-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-50 mb-4">Tales from the Archives</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded mb-6"></div>
          <p className="text-emerald-200 text-lg max-w-2xl mx-auto">
            Watch the latest myths, legends, and history lessons directly from the Irish History Tales channel.
          </p>
        </div>

        {/* TikTok Embed Container */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 max-w-[325px] sm:max-w-[600px] w-full shadow-2xl shadow-black/50 overflow-hidden">
            <blockquote 
              className="tiktok-embed" 
              cite={SOCIAL_LINKS.tiktok}
              data-unique-id="irish.history.t" 
              data-embed-type="creator" 
              style={{ maxWidth: '780px', minWidth: '288px' }} 
            > 
              <section> 
                <a target="_blank" rel="noreferrer" href={SOCIAL_LINKS.tiktok}>
                  @irish.history.t
                </a> 
              </section> 
            </blockquote>
          </div>
        </div>

        {/* Alternative Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={SOCIAL_LINKS.tiktok} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500 rounded-lg hover:bg-emerald-800 text-emerald-100 transition-all duration-300"
          >
            <span className="font-bold">View Full TikTok Profile</span>
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          
          <a 
            href={SOCIAL_LINKS.youtube} 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#FF0000] text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg"
          >
            <Youtube className="w-5 h-5 mr-2" />
            <span className="font-bold">Subscribe on YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;