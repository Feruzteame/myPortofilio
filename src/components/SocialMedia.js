import Github from '../image/Github.svg';
import Linkedin from '../image/Linkedin.svg';

const SocialMedia = () => {
  return(
    <div className='
      hidden md:flex flex-col
      justify-start items-center
      h-screen
      pr-10 gap-6
    '>
      <a href='https://github.com/Feruzteame' target="_blank">
        <img src={ Github } alt='github' className='h-10 w-10 cursor-grab hover:scale-150' />
      </a>
      <a href='https://linkedin.com/in/feruz-teame' target="_blank">
        <img src={ Linkedin } alt='linkedin' className='h-8 w-8 cursor-grab hover:scale-150' />
      </a>
    </div>
  )
}

export default SocialMedia