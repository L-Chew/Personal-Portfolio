import React from 'react';

const Experience = () => {
  return (
    <div>
      <div className='flex text-3xl my-10' align-left>Experience</div>
      <div>
        <ol>
          <li>
            <div className='grid grid-cols-8'>
              <div className='col-start-1 col-span-3'>
                2022 - Present
              </div>
              <div className='col-start-4 col-span-9'>
                Software Engineer, Full Stack - Software Engineering Applications
                Pupper
                A web application where puppies match and coordinate playdats via chat
                <div>
                  <ul className='flex flex-row pt-5'>
                    <li className='px-10'>React</li>
                    <li className='px-10'>Javascript</li>
                    <li className='px-10'>MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
};

export default Experience;
