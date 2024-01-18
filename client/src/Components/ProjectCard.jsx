import React from 'react';

const ProjectCard = ({ project }) => (
  <div className='container mb-10'>
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          className='object-cover'
          src={project.img}
          alt={project.alt}
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {project.application}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {project.description}
        </p>
        <div>
          <ul className='flex flex-wrap mt-2'>
            {(project.techStack).map(techStack => (
              <li key={techStack} className='mr-1.5 mt-2'>
                <div className='flex items-center rounded-full bg-[#fac1e9] bg-opacity-10 px-3 py-1 text-[#fac1e9]'>
                  {techStack}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 pt-0">
        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="button">
          View Project
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;