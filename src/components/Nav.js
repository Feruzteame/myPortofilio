import Arrow from '../image/arrow_forward.png';
import Email from '../image/alternate_email.png';
import Pdf from '../image/pdf.png';

const Nav = () => {
  return(
    <div className='
      flex
      justify-start items-center
      h-[100px] w-full
      p-4 gap-8
      text-sm
    '>
      <div className='flex gap-2'>
        <img src={ Arrow } alt='arrow' className='h-5 w-4' />
        <a href='' className='underline cursor-grab hover:text-[#D21F3C]'>
          My work
        </a>
      </div>
      <div className='flex gap-2'>
        <img src={ Email } alt='email' className='h-5 w-4' />
        <a href='mailto:teamefitwi@gmail.com' target='_blank' className='underline cursor-grab hover:text-[#D21F3C]'>
          Keep in touch
        </a>
      </div>
      <div className='flex gap-2' >
        <img src={ Pdf } alt='pdf' className='h-5 w-4 ml-5' />
        <a href='../image/myPhoto.png' download className='underline cursor-grab hover:text-[#D21F3C]'>Download CV</a>
      </div>
    </div>
  )
}

export default Nav