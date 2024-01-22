import React from 'react';
import pupper from '../../dist/Images/pupper.png';
import catwalk from '../../dist/Images/catwalk.png';
import products from '../../dist/Images/products.png';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const projects = [
    {
      'key': 1,
      'year': 'MAR 2022  -  APR 2022',
      'application': 'Pupper',
      'description': 'Responsive, mobile-frst web application where clients match with other puppies by swiping based on first impression. When matched, you enter into your own chat room to further interact and coordinate playdates.',
      'img': pupper,
      'link': 'https://github.com/projectPupper/pupper',
      'techStack': ['React', 'Javascript', 'MongoDB']
    },
    {
      'key': 2,
      'year': 'MAR 2022  -  MAR 2022',
      'application': 'Atelier API',
      'description': 'A microservice architecture RESTful API; replace existing monoliithic application',
      'img': products,
      'link': 'https://github.com/Team-Luigi/Products/tree/main',
      'techStack': ['React', 'Javascript', 'SQL', 'Material UI']
    },
    {
      'key': 3,
      'year': 'FEB 2022  -  FEB 2022',
      'application': 'Catwalk',
      'description': 'A user interface for the Q&A widget of an e-commerce web application',
      'img': catwalk,
      'link': 'https://github.com/RFP58-Clerics/Project-Catwalk',
      'techStack': ['React', 'Javascript', 'POSTgresSQL', 'CSS']
    },
    {
      'key': 4,
      'year': 'FEB 2022  -  FEB 2022',
      'application': 'Catwalk',
      'description': 'A user interface for the Q&A widget of an e-commerce web application',
      'img': catwalk,
      'link': 'https://github.com/RFP58-Clerics/Project-Catwalk',
      'techStack': ['React', 'Javascript', 'POSTgresSQL', 'CSS']
    },
    {
      'key': 5,
      'year': 'FEB 2022  -  FEB 2022',
      'application': 'Catwalk',
      'description': 'A user interface for the Q&A widget of an e-commerce web application',
      'img': catwalk,
      'link': 'https://github.com/RFP58-Clerics/Project-Catwalk',
      'techStack': ['React', 'Javascript', 'POSTgresSQL', 'CSS']
    },
    {
      'key': 6,
      'year': 'MAR 2022  -  APR 2022',
      'application': 'Pupper',
      'description': 'Responsive, mobile-frst web application where clients match with other puppies by swiping based on first impression. When matched, you enter into your own chat room to further interact and coordinate playdates.',
      'img': pupper,
      'link': 'https://github.com/projectPupper/pupper',
      'techStack': ['React', 'Javascript', 'MongoDB']
    }
  ]
  return (
    <div id='projects' className='animate-fadeIn h-[100vh]'>
      <div className='flex flex-col gap-4 md:gap-8 px-2 pb-20'>
        <h2 className='sm:text-xl lg:text-2xl xl:text-8xl text-[#fac1e9] font-Fraunces font-extralight'>
          projects.
        </h2>
        <p> I like building things. </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-auto-rows-auto grid-auto-flow-dense">
        {projects.map(project => (
          <ProjectCard key={project.key} project={project}/>
        ))}
      </div>
    </div>
  )
}

export default Projects;

            {/* <div className='grid grid-cols-8 group-hover:bg-[#495678] group-hover:bg-opacity-20 group-hover:rounded-md'>
              <div className='col-start-1 col-span-2'>
                <img src={project.img}/>
              </div>
              <div className='flex items-center col-start-4 col-span-9'>
                <div className='flex flex-col group-hover:text-[#fac1e9]'>
                  <span className='sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold group-hover:text-[#fac1e9]'>
                    {project.application}
                  </span>
                  <span className='text-[#495678] sm:text-sm md:text-md lg:text-lg xl:text-xl'>
                    {project.description}
                  </span>
                  <div className='flex w-fit items-center mt-4 rounded-full bg-[#fac1e9] bg-opacity-10 px-3 py-1 text-[#fac1e9]'>
                    <a href={project.link} target='_blank' rel='noopener noreferrer'>
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div> */}



{/* <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
	{projects.map(project => (
		<div key={project.key} className='mb-10'>
	    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
	      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
	        <img
	          className='object-cover'
	          src={project.img}
	          alt="card-image" />
	      </div>
	      <div className="p-6">
	        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
	          {project.application}
	        </h5>
	        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
	          {project.description}
	        </p>
	      </div>
	      <div className="p-6 pt-0">
	        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
	          View Project
	        </button>
	      </div>
	    </div>
	  </div>
	))}
</div> */}