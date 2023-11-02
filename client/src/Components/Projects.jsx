import React from 'react';
import pupper from '../Images/pupper.png';
import catwalk from '../Images/catwalk.png';
import products from '../Images/products.png';

const Projects = () => {
  const projects = [
    {
      'key': 1,
      'year': 'MAR 2022  -  APR 2022',
      'application': 'Pupper',
      'description': 'Responsive, mobile-frst web application where clients match with other puppies by swiping based on first impression. When matched, you enter into your own chat room to further interact and coordinate playdates.',
      'img': pupper,
      'link': 'https://github.com/projectPupper/pupper'
    },
    {
      'key': 2,
      'year': 'MAR 2022  -  MAR 2022',
      'application': 'Atelier API',
      'description': 'A microservice architecture RESTful API; replace existing monoliithic application',
      'img': products,
      'link': 'https://github.com/Team-Luigi/Products/tree/main'
    },
    {
      'key': 3,
      'year': 'FEB 2022  -  FEB 2022',
      'application': 'Catwalk',
      'description': 'A user interface for the Q&A widget of an e-commerce web application',
      'img': catwalk,
      'link': 'https://github.com/RFP58-Clerics/Project-Catwalk'
    }
  ]
  return (
    <div id='projects'>
      <div>
        <h2 className='flex my-12 text-3xl text-[#fac1e9] font-semibold uppercase'>Projects</h2>
      </div>
      <div>
        <ol>
          {projects.map(project => (
            <li key={project.key} className='group mb-10'>
              <div className='grid grid-cols-8 group-hover:bg-[#495678] group-hover:bg-opacity-20 group-hover:rounded-md'>
                <div className='col-start-1 col-span-2'>
                  <img src={project.img}/>
                </div>
                <div className='flex items-center col-start-4 col-span-9'>
                  <div className='flex flex-col group-hover:text-[#fac1e9]'>
                    <span className='text-2xl font-semibold group-hover:text-[#fac1e9]'>
                      <a href={project.link}>
                        {project.application}
                      </a>
                    </span>
                    <span className='text-[#495678] text-xl'>
                      {project.description}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Projects;