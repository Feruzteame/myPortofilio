import Github from '../image/Github.svg';
import Linkedin from '../image/Linkedin.svg';

const Footer = () => {
  return(
    <div className='
      md:hidden
      flex justify-between
      px-20 py-6
      w-full
      bg-slate-100
    '>
      <div className='flex gap-6'>
        <img src={ Github } alt='pdf' className='h-5 w-4 cursor-grab' />
        <img src={ Linkedin } alt='pdf' className='h-5 w-4 cursor-grab' />
      </div>
    </div>
  )
}

export default Footer