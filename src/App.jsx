import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter">
      <Header />
      <main>
        <Hero />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
