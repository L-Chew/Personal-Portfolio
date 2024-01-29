import React from 'react';
import pupper from '../../dist/Images/Projects/pupper.png';
import catwalk from '../../dist/Images/Projects/catwalk.png';
import products from '../../dist/Images/Projects/products.png';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const projects = [
    {
      key: 1,
      year: 'MAR 2022  -  APR 2022',
      application: 'Pupper',
      description:
        'Responsive, mobile-frst web application where clients match with other puppies by swiping based on first impression. When matched, you enter into your own chat room to further interact and coordinate playdates.',
      img: pupper,
      link: 'https://github.com/projectPupper/pupper',
      techStack: ['React', 'Javascript', 'MongoDB'],
    },
    {
      key: 2,
      year: 'MAR 2022  -  MAR 2022',
      application: 'Atelier API',
      description:
        'A microservice architecture RESTful API; replace existing monoliithic application',
      img: products,
      link: 'https://github.com/Team-Luigi/Products/tree/main',
      techStack: ['React', 'Javascript', 'SQL', 'Material UI'],
    },
    {
      key: 3,
      year: 'FEB 2022  -  FEB 2022',
      application: 'Catwalk',
      description:
        'A user interface for the Q&A widget of an e-commerce web application',
      img: catwalk,
      link: 'https://github.com/RFP58-Clerics/Project-Catwalk',
      techStack: ['React', 'Javascript', 'POSTgresSQL', 'CSS'],
    },
    {
      key: 4,
      year: 'MAR 2022  -  APR 2022',
      application: 'Pupper',
      description:
        'Responsive, mobile-frst web application where clients match with other puppies by swiping based on first impression. When matched, you enter into your own chat room to further interact and coordinate playdates.',
      img: pupper,
      link: 'https://github.com/projectPupper/pupper',
      techStack: ['React', 'Javascript', 'MongoDB'],
    },
    {
      key: 5,
      year: 'FEB 2022  -  FEB 2022',
      application: 'Catwalk',
      description:
        'A user interface for the Q&A widget of an e-commerce web application',
      img: catwalk,
      link: 'https://github.com/RFP58-Clerics/Project-Catwalk',
      techStack: ['React', 'Javascript', 'POSTgresSQL', 'CSS'],
    },
    {
      key: 6,
      year: 'FEB 2022  -  FEB 2022',
      application: 'Catwalk',
      description:
        'A user interface for the Q&A widget of an e-commerce web application',
      img: catwalk,
      link: 'https://github.com/RFP58-Clerics/Project-Catwalk',
      techStack: ['React', 'Javascript', 'POSTgresSQL', 'CSS'],
    },
    {
      key: 7,
      year: 'MAR 2022  -  APR 2022',
      application: 'Pupper',
      description:
        'Responsive, mobile-frst web application where clients match with other puppies by swiping based on first impression. When matched, you enter into your own chat room to further interact and coordinate playdates.',
      img: pupper,
      link: 'https://github.com/projectPupper/pupper',
      techStack: ['React', 'Javascript', 'MongoDB'],
    }
  ];

  return (
    <div id='projects' className='h-[100vh] animate-fadeIn'>
      <div className='flex flex-col gap-4 px-2 pb-20 md:gap-8'>
        <h2 className='font-Fraunces text-6xl font-extralight text-[#fac1e9] lg:text-8xl'>
          projects.
        </h2>
      </div>
      <div className='p-5 md:p-18'>
        <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
          {projects.map((project) => (
            <ProjectCard key={project.key} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
