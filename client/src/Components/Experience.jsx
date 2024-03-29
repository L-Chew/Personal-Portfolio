import React from 'react';

const Experience = () => {
  const experiences = [
    {
      key: 1,
      year: 'APR 2022  -  PRESENT',
      company: 'Software Engineering Application',
      role: 'Full Stack Developer',
      application: 'Pupper',
      description:
        'Collaborated with other engineers to create a web application for dog lovers expand their network and meet other doggie friends.',
      techStack: ['React', 'Javascript', 'MongoDB'],
    },
    {
      key: 2,
      year: 'MAR 2022  -  PRESENT',
      company: 'Software Engineering Application',
      role: 'Back End Developer',
      application: 'Atelier API',
      description:
        'Re-built an existing API service using Node and Express to optimize the performance, and locally stress-tested the service with K6. ',
      techStack: ['React', 'Javascript', 'SQL', 'Material UI'],
    },
    {
      key: 3,
      year: 'FEB 2022  -  PRESENT',
      company: 'Software Engineering Application',
      role: 'Front End Developer',
      application: 'Catwalk',
      description:
        'Modernized UI and reconstructed functionality for the Q&A widget of an e-commerce web application',
      techStack: ['React', 'Javascript', 'POSTgresSQL', 'CSS'],
    },
    {
      key: 4,
      year: 'SEPT 2017  -  OCT 2021',
      company: 'Salesforce',
      role: 'Manager, Global Incentive Compensation',
      application: null,
      description:
        'Managed a team of 5 analysts to compile and distribute >30,000 compensation plans to 18,000 worldwide sellers',
      techStack: null,
    },
  ];

  return (
    <div id='experience'>
      <div>
        <h2 className='flex my-12 sm:text-xl lg:text-2xl xl:text-3xl text-[#fac1e9] font-Fraunces font-extralight'>
          Experience
        </h2>
      </div>
      ß
      <div>
        <ol>
          {experiences.map((experience) => (
            <li key={experience.key} className='group mb-10'>
              <div className='grid grid-cols-1 lg:grid-cols-8 group-hover:bg-[#495678] group-hover:bg-opacity-20 group-hover:rounded-md'>
                <div className='col-start-1 col-span-3 text-[#495678] sm:text-sm md:text-md lg:text-lg xl:text-xl'>
                  {experience.year}
                </div>
                <div className='col-start-4 col-span-9 sm:col-start-1 md:col-start-1 lg:col-start-4 xl:col-start-4'>
                  <h3 className='sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold group-hover:text-[#fac1e9]'>
                    <div className='mb-5'>
                      <span>
                        {experience.role} · <span>{experience.company}</span>
                      </span>
                    </div>
                  </h3>
                  <p className='text-[#495678] sm:text-sm md:text-md lg:text-lg xl:text-xl'>
                    {experience.description}
                  </p>
                  <div>
                    <ul className='flex flex-wrap mt-2'>
                      {experience.techStack
                        ? experience.techStack.map((techStack) => (
                            <li key={techStack} className='mr-1.5 mt-2'>
                              <div className='flex items-center rounded-full bg-[#fac1e9] bg-opacity-10 px-3 py-1 text-[#fac1e9]'>
                                {techStack}
                              </div>
                            </li>
                          ))
                        : ''}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className='mt-12'>
          <a
            className='in-line-flex items-center font-semibold sm:text-md md:text-lg lg:text-xl xl:text-2xl'
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Full Résumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
