import React from 'react';
import AnimatedElement from './AnimatedElement';
import { useTranslation } from '../hooks/useTranslation';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center">
          <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            {t('contact.description')}
          </p>
        </AnimatedElement>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="flex-1">
            <AnimatedElement>
              <form className="space-y-6">
                <input type="text" placeholder={t('contact.form.name')} className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                <input type="email" placeholder={t('contact.form.email')} className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
                <textarea placeholder={t('contact.form.message')} rows={5} className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"></textarea>
                <button type="submit" className="w-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
                  {t('contact.form.submit')}
                </button>
              </form>
            </AnimatedElement>
          </div>

          {/* Map & Info */}
          <div className="flex-1">
            <AnimatedElement delay="delay-200">
              <div className="bg-gray-900 rounded-lg overflow-hidden h-64 lg:h-full w-full shadow-xl">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.257591325993!2d-122.4194156846817!3d37.77492957975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1e8f5c3b%3A0x6bfe73f6b4d36ede!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1618393189534!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Maps Location"
                 ></iframe>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;