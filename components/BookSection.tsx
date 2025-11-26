import React from 'react';
import { Book } from '../types';
import { BOOKS } from '../constants';
import { ShoppingBag, Star, ExternalLink } from 'lucide-react';

const BookCard: React.FC<{ book: Book }> = ({ book }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-xl border border-stone-200 hover:shadow-2xl transition-shadow duration-300 relative max-w-4xl mx-auto">
    {book.isNew && (
      <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
        NEW RELEASE
      </div>
    )}
    
    <div className="md:w-2/5 relative group bg-stone-100 flex items-center justify-center p-6">
      <div className="relative shadow-2xl shadow-black/30 w-48 md:w-56 transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
        <img 
          src={book.coverUrl} 
          alt={book.title} 
          className="w-full h-auto object-cover rounded-sm aspect-[2/3]"
        />
        {/* Book Spine Effect */}
        <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-r from-white/20 to-transparent z-10 rounded-l-sm"></div>
        <div className="absolute top-0 bottom-0 left-1 w-2 bg-black/10 z-10"></div>
      </div>
    </div>
    
    <div className="p-8 md:w-3/5 flex flex-col justify-center">
      <div>
        <div className="flex justify-between items-start mb-4">
           <div className="text-sm text-emerald-700 font-bold uppercase tracking-wider border border-emerald-200 px-2 py-0.5 rounded bg-emerald-50">{book.releaseYear} Release</div>
           
           <a 
             href={`${book.buyLink}#customerReviews`} 
             target="_blank" 
             rel="noreferrer" 
             className="flex items-center space-x-1 group border border-stone-200 px-2 py-1 rounded hover:bg-stone-50 transition-colors"
           >
             <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
             <span className="text-xs text-stone-600 font-bold group-hover:text-amber-600 group-hover:underline">Check Amazon Reviews</span>
             <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-amber-600" />
           </a>
        </div>
        
        <h3 className="text-3xl font-serif font-bold text-stone-800 mb-2 leading-tight">{book.title}</h3>
        {book.subtitle && <h4 className="text-xl text-amber-600 italic mb-4 font-serif">{book.subtitle}</h4>}
        <p className="text-stone-600 leading-relaxed mb-8 text-base border-l-4 border-emerald-900/10 pl-4 italic">
          "{book.description}"
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-auto">
        <a 
          href={book.buyLink}
          target="_blank"
          rel="noreferrer"
          className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded hover:from-amber-500 hover:to-amber-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          Buy on Amazon <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
        </a>
      </div>
    </div>
  </div>
);

const BookSection: React.FC = () => {
  return (
    <section id="books" className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-4">Written Works</h2>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded"></div>
          <p className="mt-6 text-xl text-stone-600 max-w-2xl mx-auto font-light">
            Historical fiction that brings the forgotten voices of Ireland back to life.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {BOOKS.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookSection;