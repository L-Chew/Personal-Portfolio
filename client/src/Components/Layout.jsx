import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar.jsx';

const Layout = () => {
  return (
    <div className='animate-fadeIn flex flex-col mx-auto w-full max-w-screen-sm px-8 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl'>
      <header className='sticky top-0 z-10'>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;