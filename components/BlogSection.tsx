import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { Clock, Calendar, X, ChevronRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-4">The Scribe's Journal</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
          <p className="mt-6 text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Reflections on history, writing, and the stories that shape us.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-stone-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                {post.imageUrl && (
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                )}
                <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-stone-500 mb-3 space-x-4">
                  <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-stone-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded border border-stone-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => openPost(post)}
                    className="text-amber-700 font-bold text-sm flex items-center hover:text-amber-600 transition-colors"
                  >
                    READ ARTICLE <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" onClick={closePost}></div>
          
          <div className="bg-stone-50 w-full max-w-3xl max-h-[90vh] rounded-xl shadow-2xl relative flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="relative h-48 sm:h-64 flex-shrink-0">
               <img 
                 src={selectedPost.imageUrl} 
                 alt={selectedPost.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 to-transparent"></div>
               <button 
                 onClick={closePost}
                 className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors backdrop-blur-md"
               >
                 <X className="w-6 h-6" />
               </button>
               
               <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                 <div className="flex items-center space-x-4 text-sm text-stone-300 mb-2">
                    <span className="bg-amber-600 px-2 py-0.5 rounded text-white font-bold text-xs">{selectedPost.tags[0]}</span>
                    <span>{selectedPost.date}</span>
                    <span>• {selectedPost.readTime}</span>
                 </div>
                 <h2 className="text-2xl sm:text-4xl font-serif font-bold leading-tight">{selectedPost.title}</h2>
               </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10">
              <div 
                className="prose prose-stone prose-lg max-w-none prose-headings:font-serif prose-headings:text-emerald-900 prose-a:text-amber-600"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }} 
              />
              
              <div className="mt-12 pt-8 border-t border-stone-200 text-center">
                 <p className="text-stone-500 italic mb-4">Enjoyed this tale?</p>
                 <button 
                   onClick={closePost}
                   className="px-6 py-2 border border-stone-300 rounded-full text-stone-600 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors"
                 >
                   Back to Journal
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;