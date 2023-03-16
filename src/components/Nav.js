import React from 'react';
import ThemeMode from './ThemeMode'

import Email from '../image/email.svg';

const Nav = () => {

  return(
    <div className='
      flex
      justify-center md:justify-start sm:justify-center items-end
      md:w-full h-[50px]
      sm:p-0 sm:m-0 ml-10 gap-6
      text-sm font-mono
    '>
      {/* Large screen */}
      <ul className='flex gap-6'>
        <li className='hidden md:flex'>
          <img src={ Email } alt='email' className='h-6 w-10' />
          <a href='mailto:teamefitwi@gmail.com' target='_blank'rel="noreferrer" className='underline cursor-grab hover:text-[#FFA101]'>
            Keep in touch
          </a>
        </li>
        <ThemeMode />
      </ul>
    </div>
  )
}

export default Nav