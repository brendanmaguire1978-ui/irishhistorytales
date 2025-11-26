import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import BookSection from './components/BookSection';
import BlogSection from './components/BlogSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <BookSection />
        <BlogSection />
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;