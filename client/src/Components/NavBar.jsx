import React from 'react';
import { Link } from 'react-router-dom';
import github from '../Images/github.svg';
import linkedin from '../Images/linkedin.svg';
import info from '../Images/info.svg';

const navBar = () => {
  return (
    <>
      <nav className='sticky top-0 flex justify-between items-center text-sm'>
        <ul className='flex rounded-lg'>
          <li className='py-1 px-2'>
            <Link to='/'> Home </Link>
          </li>
          <li className='py-1 px-2'>
            <Link to='/projects'> Projects </Link>
          </li>
          <li className='py-1 px-2'>
            <Link to='/reading'> Reading </Link>
          </li>
          <li className='hobbies py-1 px-2'>
            <Link to='/hobbies'> Hobbies </Link>
          </li>
        </ul>
        <ul className='flex items-center rounded-lg'>
          <li className='py-1 px-2'>
            <a href='https://github.com/L-Chew' target='_blank' rel='noopener noreferrer'>
              <img className='h-9' src={github} alt='GitHub'/>
            </a>
          </li>
          <li className='py-1 px-2'>
            <a href='https://www.linkedin.com/in/lorenechew/' target='_blank' rel='noopener noreferrer'>
              <img className='h-9' src={linkedin} alt='LinkedIn'/>
            </a>
          </li>
          <li className='py-1 px-2'>
            <Link to='/getInTouch'>
              <img className='h-9' src={info} alt='Contact'/>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default navBar;