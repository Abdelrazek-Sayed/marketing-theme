import React from 'react';
import AnimatedElement from './AnimatedElement';
import { useTranslation } from '../hooks/useTranslation';

const projectImages = [
  { img: 'https://picsum.photos/seed/project1/600/400' },
  { img: 'https://picsum.photos/seed/project2/600/400' },
  { img: 'https://picsum.photos/seed/project3/600/400' },
  { img: 'https://picsum.photos/seed/project4/600/400' },
  { img: 'https://picsum.photos/seed/project5/600/400' },
  { img: 'https://picsum.photos/seed/project6/600/400' },
];

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const projectsData = t('portfolio.projects') as unknown as { title: string, category: string }[];
  const projects = projectsData.map((p, i) => ({ ...p, ...projectImages[i] }));

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center">
          <h2 className="text-4xl font-bold mb-4">{t('portfolio.title')}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedElement key={index} delay={`delay-${(index % 3) * 150}`}>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm text-blue-400 font-semibold">{project.category}</p>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
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

export default Portfolio;