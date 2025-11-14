import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../hooks/useTranslation';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToRegister }) => {
  const { login } = useAuth();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login with email as name for display
    login(email, email.split('@')[0]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[100] flex items-center justify-center" onClick={onClose}>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 ltr:right-4 rtl:left-4 text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
        <h2 className="text-2xl font-bold text-center mb-6">{t('loginModal.title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="email" placeholder={t('loginModal.email')} value={email} onChange={e => setEmail(e.target.value)} required className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <input type="password" placeholder={t('loginModal.password')} value={password} onChange={e => setPassword(e.target.value)} required className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button type="submit" className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
            {t('loginModal.submit')}
          </button>
        </form>
        <p className="text-center text-gray-400 mt-6">
          {t('loginModal.noAccount')} <button onClick={onSwitchToRegister} className="text-blue-400 hover:underline">{t('loginModal.registerLink')}</button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
