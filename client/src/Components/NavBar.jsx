import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../dist/Images/github.svg';
import linkedin from '../../dist/Images/linkedin.svg';
import info from '../../dist/Images/info.svg';

const NavBar = () => {
  const navs = [
    {
      'link': '/',
      'where': 'Lorene'
    },
    {
      'link': '/projects',
      'where': 'Projects'
    },
    {
      'link': '/reading',
      'where': 'Reading'
    },
    {
      'link': '/hobbies',
      'where': 'Hobbies'
    }
  ];

  const buttons = [
    {
      'href': 'https://github.com/L-Chew',
      'src': github,
      'alt': 'github'
    },
    {
      'href': 'https://www.linkedin.com/in/lorenechew',
      'src': linkedin,
      'alt': 'LinkedIn'
    },
    {
      'href': null,
      'link': '/getInTouch',
      'src': info,
      'alt': 'Contact'
    }
  ];

  return (
    <nav className='flex justify-between items-center text-sm py-4 px-1'>
      {/* right text nav */}
      <ul className='flex rounded-lg'>
        {navs.map((nav, index) => (
          <div key={index} className='relative group'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <li className='relative py-1 px-2 hover:rounded-md transition duration-200 group-hover:scale-110'>
              <Link to={nav.link}> {nav.where} </Link>
            </li>
          </div>
        ))}
      </ul>
      {/* left icon nav */}
      <ul className='flex rounded-lg'>
        {buttons.map((button, index) => (
          <div key={index} className='relative group'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-0 group-hover:opacity-50 transition duration-1000 group-hover:duration-200'></div>
            <li key={index} className='py-1 px-2'>
              {button.href ? (
                <a href={button.href} target='_blank' rel='noopener noreferrer'>
                  <img className='h-9 transition duration-300 transform group-hover:scale-110' src={button.src} alt={button.alt}/>
                </a>
              ) : (
                <Link to={button.link}>
                  <img className='h-9 transition duration-300 transform group-hover:scale-110' src={button.src} alt={button.alt}/>
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
