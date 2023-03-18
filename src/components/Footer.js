import Github from '../image/Github.svg';
import Linkedin from '../image/Linkedin.svg';
import Medium from '../image/medium.svg'

const Footer = () => {
  return(
    <div className='
      flex flex-col items-center
      bg-[#3E8DE3] md:bg-transparent
      gap-6 p-4
      font-mono
    '>
      <div className='
        flex justify-center md:justify-end items-center
        w-full
        gap-2 md:px-10
      '>
        <a href='https://github.com/Feruzteame' target="_blank" rel="noreferrer">
          <img src={ Github } alt='github' className='h-10 w-10 cursor-grab hover:scale-150' />
        </a>
        <a href='https://linkedin.com/in/feruz-teame' target="_blank" rel="noreferrer">
          <img src={ Linkedin } alt='linkedin' className='h-8 w-8 cursor-grab hover:scale-150' />
        </a>
        <a href='https://medium.com/@feruzTeame' target="_blank" rel="noreferrer">
          <img src={ Medium } alt='medium' className='h-12 w-12 cursor-grab hover:scale-150' />
        </a>
      </div>
    </div>
  )
}

export default Footer