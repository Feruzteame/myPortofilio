import React from 'react';
import ThemeMode from './ThemeMode'

import Email from '../image/email.svg';

const Nav = () => {

  return(
    <div className='
      flex
      justify-center md:justify-start items-end
      h-full w-full md:h-[50px]
      sm:p-0 ml-10 gap-6
      text-sm font-mono
    '>
      {/* Large screen */}
      <ul className='hidden md:flex gap-6'>
        <li className='flex'>
          <img src={ Email } alt='email' className='h-6 w-10' />
          <a href='mailto:teamefitwi@gmail.com' target='_blank' className='underline cursor-grab hover:text-[#D21F3C]'>
            Keep in touch
          </a>
        </li>
        <ThemeMode />
      </ul>
    </div>
  )
}

export default Nav