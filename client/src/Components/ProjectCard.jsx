import React from 'react';

const ProjectCard = ({ project }) => {

  const handleClick = () => {
    window.open(project.link, '_blank');
  }

  return (
    <div className='group container relative mb-10 flex rounded-3xl group-hover:animate-fadeIn'>
      <img
        className='h-full min-h-[200px] w-full rounded-3xl object-cover'
        src={project.img}
        alt={project.alt}
      />
      <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 transition duration-300 ease-in-out group-hover:opacity-80' />

      <div className=' absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl px-4 pt-5 text-white opacity-0 group-hover:bg-white group-hover:bg-opacity-30 group-hover:opacity-100'>
        <h1 className='text-2xl xl:text-4xl'>{project.application}</h1>
        <p className=' text-lg xl:text-lg'>{project.description}</p>
        {project.application !== 'Coming Soon' ?
          <div className='p-6 pt-0'>
            <button
              onClick={handleClick}
              className='cursor-pointerpx-3 rounded-3xl bg-[#8a51cb] text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none md:py-3 md:px-6 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none px-3 py-1.5'
              type='button'
            >
              View Project
            </button>
          </div>
          :
          ''
        }
      </div>
    </div>
  );
};

export default ProjectCard;





{/* <ul className='mt-2 flex flex-wrap'>
  {project.techStack.map((techStack) => (
    <li key={techStack} className='mr-1.5 mt-2'>
      <div className='flex items-center rounded-full bg-[#8a51cb] bg-opacity-50 px-3 py-1 text-[#fac1e9]'>
        {techStack}
      </div>
    </li>
  ))}
</ul> */}
