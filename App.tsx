import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    if (language === 'ar') {
      document.body.style.fontFamily = "'Tajawal', sans-serif";
    } else {
      document.body.style.fontFamily = "'Poppins', sans-serif";
    }
  }, [language]);

  const openLogin = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };
  
  const openRegister = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  };

  const closeModals = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header onLoginClick={openLogin} onRegisterClick={openRegister} />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeModals} onSwitchToRegister={openRegister} />
      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeModals} onSwitchToLogin={openLogin} />
    </div>
  );
};

export default App;