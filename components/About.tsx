import React from 'react';
import AnimatedElement from './AnimatedElement';
import AnimatedCounter from './AnimatedCounter';
import { useTranslation } from '../hooks/useTranslation';

const staticStats = [
  { value: 150 },
  { value: 98 },
  { value: 10 },
  { value: 25 },
];

const teamImages = [
  { img: 'https://picsum.photos/seed/jane/400/400' },
  { img: 'https://picsum.photos/seed/john/400/400' },
  { img: 'https://picsum.photos/seed/emily/400/400' },
];

const About: React.FC = () => {
  const { t } = useTranslation();
  const statsData = (t('about.stats') as unknown as { label: string }[]).map((item, index) => ({ ...item, ...staticStats[index] }));
  const teamData = (t('about.team') as unknown as { name: string, role: string }[]).map((item, index) => ({ ...item, ...teamImages[index] }));

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center">
          <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
          <p className="text-gray-300 max-w-3xl mx-auto mb-16">
            {t('about.description')}
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {statsData.map((stat, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                  <AnimatedCounter end={stat.value} />{stat.label.includes('%') ? '%' : '+'}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement className="text-center mb-12">
            <h3 className="text-3xl font-bold">{t('about.teamTitle')}</h3>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <AnimatedElement key={member.name} delay={`delay-${index * 150}`}>
              <div className="text-center group">
                <img src={member.img} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-gray-700 group-hover:border-purple-500 transition-all duration-300 transform group-hover:scale-105"/>
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-blue-400">{member.role}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;