// src/Menu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeMode from './ThemeMode'
import Close from '../image/close.svg';
import Menu from '../image/menu.svg'

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center lg:hidden justify-between flex-wrap p-4">
    <div className="flex justify-end w-full">
      <button
        id='close'
        className="absolute p-2 z-30 rounded-full bg-white"
        onClick={handleClick}
      >
        {isOpen ? (
          <img src={Close} alt='close' width='30px' height='30px'/>
        ) : (
          <img src={Menu} alt='menu'  width='30px' height='30px'/>
        )}
      </button>
    </div>
      <div
      className={`
        absolute flex flex-col items-center
        w-full h-auto top-0 right-0 gap-6 pt-[30%] pb-5
        bg-[#3E8DE3] rounded z-20
        text-sm transform transition-transform duration-500  ${
        isOpen ? 'overflow-hidden translate-y-0' : 'translate-y-[-100%]'
      }`}>
        <Link to="/" className='text-lg'>Home</Link>
        <hr className='border-4 border-[#dbdada40] w-[50%] rounded'/>
        <Link to="/project" className='text-lg'>Projects</Link>
        <hr className='border-4 border-[#dbdada40] w-[50%] rounded'/>
        <a className='text-lg cursor-grab'
        href='mailto:teamefitwi@gmail.com'
        target='_blank'rel="noreferrer">
          Keep in touch
        </a>
        <hr className='border-4 border-[#dbdada40] w-[50%] rounded'/>
        <ThemeMode />
      </div>
    </nav>
  );
};

export default ResponsiveNav;
