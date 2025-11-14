import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

interface HeaderProps {
    onLoginClick: () => void;
    onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, onRegisterClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['home', 'services', 'about', 'portfolio', 'contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          BrightWave
        </a>
        <nav className="hidden md:flex items-center gap-8 rtl:gap-8-reverse">
          {navLinks.map(link => (
            <a key={link} href={`#${link}`} className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
              {t(`header.${link}`)}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleLanguage} className="px-3 py-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          {isAuthenticated ? (
            <>
              <span className="text-gray-300">{t('header.welcome')}, {user?.name}</span>
              <button onClick={logout} className="px-5 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors">
                {t('header.logout')}
              </button>
            </>
          ) : (
             <>
                <button onClick={onLoginClick} className="text-gray-300 hover:text-white transition-colors">{t('header.login')}</button>
                <button onClick={onRegisterClick} className="px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-105 transition-transform duration-300">
                    {t('header.register')}
                </button>
             </>
          )}
        </div>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;