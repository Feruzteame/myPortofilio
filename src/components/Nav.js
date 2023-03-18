import React, { useState, useEffect } from 'react';
import ThemeMode from './ThemeMode'

import Email from '../image/email.svg';
import Project from '../image/project.svg';

const Nav = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
   const handleScroll = () => { 
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: scrollPosition + 700,
      behavior: 'smooth'
    });
  };

  return(
    <div className='
      hidden md:flex
      justify-center md:justify-start sm:justify-start items-end
      md:w-full h-[50px]
      sm:p-0 sm:m-0 gap-6
      text-sm font-mono
    '>
      {/* Large screen */}
      <ul className='flex w-full gap-6 ml-20'>
        <li className='hidden md:flex gap-1'>
          <img src={ Email } alt='email' className='h-5 w-6' />
          <a href='mailto:teamefitwi@gmail.com' target='_blank'rel="noreferrer" className='cursor-grab hover:text-[#3E8DE3] hover:underline'>
            Keep in touch
          </a>
        </li>
        <li className='flex gap-1 cursor-grab hover:text-[#3E8DE3] hover:underline' onClick={handleScrollDown}>
          <img src={ Project } alt='email' className='h-6 w-6'/> min-project
        </li>
        <ThemeMode />
      </ul>
    </div>
  )
}

export default Nav