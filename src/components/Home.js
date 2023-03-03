import React from "react";
import { TypeAnimation } from 'react-type-animation';
import ReactCardFlip from 'react-card-flip';

import Nav from './Nav';
import Footer from './Footer';
import MyPhoto from '../image/myPhoto.png';

class Home extends React.Component{
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return(
      <div className='
        flex flex-col
        gap-10
        font-mono
      '>
        <Nav />
        <div>
          <div className='
            flex flex-col
            justify-start items-center
            gap-10 sm:p-0
            w-full h-auto sm:w-[100%]
          '>
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
              <div>
                <img src={ MyPhoto }  alt='Feruz Teame' onMouseOver={this.handleClick}
                  className='
                  w-[200px]
                  h-[200px]
                  text-center
                  rounded-full
                  drop-shadow-[0_0_20px_black]
                  border-double border-4 border-[#D21F3C]
                  cursor-grab
                '/>
              </div>
              <p 
              onMouseOver={this.handleClick}
              className='
                flex flex-col
                justify-center items-center
                w-[200px] h-[200px]
                p-6
                text-center text-white
                drop-shadow-[0_0_20px_black]
                bg-[#D21F3C]
                font-medium
                rounded-full border-double border-4 border-white
                cursor-grab
              '>
                <q>I never dreamed of being perfect, I believe in the learning process.</q> 
              </p>
            </ReactCardFlip>
            <div className='
              flex justify-center
              gap-2
              w-[250px] h-[60px]
              text-3xl
              border-double border-4 border-[#D21F3C] rounded
            '>
              <p className='
                h-full w-full
                m-0 p-2
                bg-[#D21F3C] text-white
              '>
                FERUZ
              </p>
              <p className='bg-white p-2'>TEAME</p>
            </div>
            <div className='
              flex justify-center
              md:w-[50%] w-[90%] h-[90px] md:h-auto
              text-center
            '>
              <TypeAnimation
              sequence={[
                'Web ',
                1000,
                'Front-end ',
                1000,
                'Junior Front-end developer, motivated with good knowledge of frontend development and designing technology.',
              ]}
              wrapper="div"
              cursor={ true }
              repeat={ 0 }
              />
            </div>
            <div className='flex flex-wrap gap-5 w-[80%] md:w-[60%] items-center justify-center'>
              <img src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'  alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'  alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'  alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'  alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7'  alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white'  alt='Feruz Teame' className='h-6' />
              <img src='https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white'  alt='Feruz Teame' className='h-6' />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home









