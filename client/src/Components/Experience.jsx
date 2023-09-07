import React from 'react';

const Experience = () => {
  const experiences = [
    {
      'key': 1,
      'year': 'APR 2022  -  PRESENT',
      'company': 'Software Engineering Application',
      'role': 'Full Stack Developer',
      'application': 'Pupper',
      'description': 'A web application where puppies match and coordinate playdates via chat',
      'techStack': ['React', 'Javascript', 'MongoDB']
    },
    {
      'key': 2,
      'year': 'MAR 2022  -  PRESENT',
      'company': 'Software Engineering Application',
      'role': 'Back End Developer',
      'application': 'Atelier API',
      'description': 'A microservice architecture RESTful API; replace existing monoliithic application',
      'techStack': ['React', 'Javascript', 'SQL']
    },
    {
      'key': 3,
      'year': 'FEB 2022  -  PRESENT',
      'company': 'Software Engineering Application',
      'role': 'Front End Developer',
      'application': 'Catwalk',
      'description': 'A user interface for the Q&A widget of an e-commerce web application',
      'techStack': ['React', 'Javascript', 'POSTgres SQL', 'CSS']
    },
    {
      'key': 4,
      'year': 'SEPT 2017  -  OCT 2021',
      'company': 'Salesforce',
      'role': 'Manager, Global Incentive Compensation',
      'application': null,
      'description': 'Managed a team of 5 analysts to compile and distribute >30,000 compensation plans to 18,000 worldwide sellers',
      'techStack': null
    },
  ]

  return (
    <div>
      <div className='flex my-12 text-3xl text-[#2DD4BE]'>Experience</div>
      <div>
        <ol>
          {experiences.map(experience => (
            <li key={experience.key} className='mb-10'>
            <div className='grid grid-cols-8'>
              <div className='col-start-1 col-span-3 text-[#495678] text-lg'>
                {experience.year}
              </div>
              <div className='col-start-4 col-span-9'>
                <h3 className='leading-snug text-xl'>
                  <div>
                    <span>
                    {experience.role} ·
                    {' '}
                      <span>
                       {experience.company}
                      </span>
                    </span>
                  </div>
                </h3>
                <span className='text-lg'>
                  {experience.application === null ? 'none' : experience.application}
                </span>
                <p className='text-[#495678] text-lg'>
                  {experience.description}
                </p>
                <div>
                  <ul className='flex mt-2 flex flex-wrap'>
                    {experience.techStack ? (experience.techStack).map(techStack => (
                      <li key={techStack} className='mr-1.5 mt-2'>
                        <div className='flex items-center rounded-full bg-[#2DD4BE] bg-opacity-10 px-3 py-1 text-[#2DD4BE]'>
                          {techStack}
                        </div>
                      </li>
                    )) : ''}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          ))}
        </ol>
      </div>
    </div>
  )
};

export default Experience;
