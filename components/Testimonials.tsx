import React from 'react';
import AnimatedElement from './AnimatedElement';
import { useTranslation } from '../hooks/useTranslation';

const testimonialAvatars = [
  { avatar: 'https://picsum.photos/seed/sarah/100/100' },
  { avatar: 'https://picsum.photos/seed/mike/100/100' },
  { avatar: 'https://picsum.photos/seed/jessica/100/100' },
];

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const testimonialsData = t('testimonials.items') as unknown as { name: string, company: string, quote: string }[];
  const testimonials = testimonialsData.map((item, index) => ({ ...item, ...testimonialAvatars[index] }));

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center">
          <h2 className="text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 150}`}>
              <div className="bg-gray-800 p-8 rounded-lg shadow-xl h-full flex flex-col">
                <p className="text-gray-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center text-left rtl:text-right">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full ltr:mr-4 rtl:ml-4" />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;