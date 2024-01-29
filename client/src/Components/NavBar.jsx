import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../dist/Images/Navigation/github.svg';
import linkedin from '../../dist/Images/Navigation/linkedin.svg';
import info from '../../dist/Images/Navigation/info.svg';

const NavBar = () => {
  const texts = [
    {
      link: '/',
      where: 'Lorene',
    },
    {
      link: '/projects',
      where: 'Projects',
    },
    {
      link: '/reading',
      where: 'Reading',
    },
    {
      link: '/hobbies',
      where: 'Hobbies',
    },
  ];

  const icons = [
    {
      href: 'https://github.com/L-Chew',
      src: github,
      alt: 'github',
    },
    {
      href: 'https://www.linkedin.com/in/lorenechew',
      src: linkedin,
      alt: 'LinkedIn',
    },
    {
      href: null,
      link: '/getInTouch',
      src: info,
      alt: 'Contact',
    },
  ];

  return (
    <nav className='flex justify-between items-center text-sm py-4 px-1'>
      {/* left text nav */}
      <ul className='flex rounded-lg'>
        {texts.map((text, index) => (
          <div key={index} className='relative group'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <li className='relative py-1 px-2 hover:rounded-md transition duration-200 group-hover:scale-110'>
              <Link to={text.link}> {text.where} </Link>
            </li>
          </div>
        ))}
      </ul>
      {/* right icon nav */}
      <ul className='flex rounded-lg'>
        {icons.map((icon, index) => (
          <div key={index} className='relative group'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <li key={index} className='py-1 px-2'>
              {icon.href ? (
                <a href={icon.href} target='_blank' rel='noopener noreferrer'>
                  <img
                    className='h-9 transition duration-300 transform group-hover:scale-110'
                    src={icon.src}
                    alt={icon.alt}
                  />
                </a>
              ) : (
                <Link to={icon.link}>
                  <img
                    className='h-9 transition duration-300 transform group-hover:scale-110'
                    src={icon.src}
                    alt={icon.alt}
                  />
                </Link>
              )}
            </li>
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
