import React from 'react';
import { Link } from 'react-router-dom';
import github from '../Images/github.svg';
import linkedin from '../Images/linkedin.svg';
import info from '../Images/info.svg';

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
  ]

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
  ]

  return (
    <>
      <nav className='sticky top-0 flex justify-between items-center text-sm py-4 px-1'>
        {/* right text nav */}
        <ul className='flex rounded-lg'>
          {navs.map(nav => (
            <li className='py-1 px-2 hover:bg-[#495678] hover:bg-opacity-50 hover:rounded-md'>
              <Link to={nav.link}> {nav.where} </Link>
            </li>
          ))}
        </ul>
        {/* left icon nav */}
        <ul className='flex rounded-lg'>
          {buttons.map(button => (
            (button.href
            ?
            <li className='py-1 px-2 hover:bg-[#495678] hover:bg-opacity-50 hover:rounded-md'>
              <a href={button.href} target='_blank' rel='noopener noreferrer'>
                <img className='h-9' src={button.src} alt={button.alt}/>
              </a>
            </li>
            :
            <li className='py-1 px-2 hover:bg-[#495678] hover:bg-opacity-50 hover:rounded-md'>
              <Link to={button.link}>
                <img className='h-9' src={button.src} alt={button.alt}/>
              </Link>
            </li>
            )
          ))}
        </ul>
      </nav>
    </>
  )
}

export default NavBar;