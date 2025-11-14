import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden text-center">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')`,
          transform: `translateY(${offsetY * 0.5}px)`
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/70" />
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-down">
          {t('hero.title')} <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">BrightWave</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          {t('hero.subtitle')}
        </p>
        <a href="#contact" className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {t('hero.cta')}
        </a>
      </div>
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Hero;