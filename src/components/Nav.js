import { Link } from "react-router-dom";
import React, { useState } from 'react';

import Arrow from '../image/arrow_forward.png';
import Email from '../image/alternate_email.png';
import Pdf from '../image/pdf.png';
import Home from '../image/home.svg'

const Nav = () => {

  return(
    <div className='
      flex
      justify-center md:justify-start items-end
      h-full w-full md:h-[50px]
      sm:p-0 ml-10 gap-6
      bg-[#D21F3C] md:bg-transparent text-sm font-mono
    '>
      {/* Large screen */}
      <ul className='hidden md:flex gap-6'>
        <li className='flex gap-1'>
          <img src={ Email } alt='email' className='h-5 w-4' />
          <a href='mailto:teamefitwi@gmail.com' target='_blank' className='underline cursor-grab hover:text-[#D21F3C]'>
            Keep in touch
          </a>
        </li>
        <li className='flex gap-1'>
          <img src={ Pdf } alt='cv' className='h-5 w-4' />
          <a href='../image/cv.pdf' download='feruzteame' className='underline cursor-grab hover:text-[#D21F3C]'>
            Download CV
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav