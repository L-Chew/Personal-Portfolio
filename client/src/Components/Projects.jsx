import React from 'react';

const Projects = () => {
  const projects = [
    {
      'key': 1,
      'year': 'MAR 2022  -  APR 2022',
      'application': 'Pupper',
      'description': 'Responsive, mobile-frst web application where clients match with other puppies by swiping based on first impression. When matched, you enter into your own chat room to further interact and coordinate playdates.',
      'img': './Images/pupper.png',
      'link': 'https://github.com/projectPupper/pupper'
    },
    {
      'key': 2,
      'year': 'MAR 2022  -  MAR 2022',
      'application': 'Atelier API',
      'description': 'A microservice architecture RESTful API; replace existing monoliithic application',
      'img': '',
      'link': 'https://github.com/Team-Luigi/Products/tree/main'
    },
    {
      'key': 3,
      'year': 'FEB 2022  -  FEB 2022',
      'application': 'Catwalk',
      'description': 'A user interface for the Q&A widget of an e-commerce web application',
      'img': '',
      'link': 'https://github.com/RFP58-Clerics/Project-Catwalk'
    }
  ]
  return (
    <div id='projects'>
      <div>
        <h2 className='flex my-12 text-2xl text-[#2DD4BE] font-semibold uppercase'>Projects</h2>
      </div>
      <div>
        <ol>
          {projects.map(project => (
            <li key={project.ket} className='group mb-10'>
              <div className='grid grid-cols-8 group-hover:bg-[#495678] group-hover:bg-opacity-20 group-hover:rounded-md'>
                <div className='col-start-1 col-span-3'>
                  <img src={project.img}/>
                </div>
                <div className='col-start-4 col-span-9'>
                  <div className='flex flex-col group-hover:text-[#2DD4BE]'>
                    <span className='text-xl font-semibold group-hover:text-[#2DD4BE]'>
                      <a href={project.link}>
                        {project.application}
                      </a>
                    </span>
                    <span className='text-[#495678] text-lg'>
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