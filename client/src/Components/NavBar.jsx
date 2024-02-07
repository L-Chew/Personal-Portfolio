import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import github from '../../dist/Images/Navigation/github.svg';
import linkedin from '../../dist/Images/Navigation/linkedin.svg';
import info from '../../dist/Images/Navigation/info.svg';
import menu from '../../dist/Images/Navigation/menu.svg';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

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

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className='flex items-center justify-between bg-[#0f172a] bg-opacity-80 px-1 py-4 text-sm'>
      {/* left text nav */}
        <ul className='flex rounded-lg'>
          {texts.map((text, index) => (
            <div key={index} className='group relative'>
              <div className='absolute -inset-0.5 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200'></div>
              <li className='relative px-2 py-1 transition duration-200 hover:rounded-md group-hover:scale-110'>
                <Link to={text.link}> {text.where} </Link>
              </li>
            </div>
          ))}
        </ul>
      {/* right icon nav */}
        <ul className='rounded-lg flex md:flex-row flex-col'>
          {icons.map((icon, index) => (
            <div key={index} className='group relative'>
              <div className='absolute -inset-0.5 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 blur transition duration-1000 group-hover:opacity-50 group-hover:duration-200'></div>
              <li key={index} className='px-2 py-1'>
                {icon.href ? (
                  <a href={icon.href} target='_blank' rel='noopener noreferrer'>
                    <img
                      className='h-9 transform transition duration-300 group-hover:scale-110'
                      src={icon.src}
                      alt={icon.alt}
                    />
                  </a>
                ) : (
                  <Link to={icon.link}>
                    <img
                      className='h-9 transform transition duration-300 group-hover:scale-110'
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
