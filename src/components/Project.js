import Footer from './Footer';
import Weather from '../image/weather_app.png';
import Pomodoro from '../image/tomato_timer.png'
import Code from '../image/code.svg';
import Right from '../image/arrow.svg';
import ResponsiveNav from './ResponsiveNav'

const Project = () => {
  return(
    <div id='project_container' className='w-full gap-2'>
      <ResponsiveNav />
      <div className='
        flex flex-col
        justify-center items-center
        w-full
        md:gap-10
      '>
        <p className='bg-[#3E8DE3] text-center text-base lg:text-3xl mt-12 font-bold text-white p-3 rounded'>Here Is Piece Of My Work</p>
        <div className='
          flex flex-col lg:flex-row
          justify-center items-center
          gap-10 md:m-0 m-10 lg:m-16
        '>
          <div className='flex flex-col gap-6 w-[100%] md:w-[60%] lg:w-[400px] outline-double outline-offset-2 outline-4 outline-[#3E8DE3] rounded p-2'>
            <p className='p-2 font-semibold'> Pomodoro Timer </p>
            <img src={Pomodoro} className='bg-gray shadow-lg shadow-gray rounded' alt='pomodoro screen shot'/>
            <div className='flex justify-between px-6'>
              <a href='https://pomodoro-timer-todolist.netlify.app/' className='flex gap-1 hover:text-[#3E8DE3] hover:underline' target="_blank"><img src={Right} className='w-5 h-5' alt='right arrow'/> Live </a>
              <a href='https://github.com/Feruzteame/pomodoro-Timer' className='flex gap-1 hover:text-[#3E8DE3] hover:underline' target="_blank"><img src={Code} className='w-5 h-5' alt='code'/>Source</a>
            </div>
          </div>
          <div className='flex flex-col gap-6 w-[100%] md:w-[60%] lg:w-[400px] outline-double outline-offset-2 outline-4 outline-[#3E8DE3] rounded p-2'>
              <p className='p-2 font-semibold'> Weather App </p>
              <img src={Weather} className='bg-gray shadow-lg shadow-gray rounded'  alt='weather app screen shot'/>
              <div className='flex justify-between px-6'>
                <a href='https://weather-app-based-on-city.netlify.app/' className='flex gap-1 hover:text-[#3E8DE3] hover:underline' target="_blank"><img src={Right} className='w-5 h-5' alt='right arrow'/> Live </a>
                <a href='https://github.com/Feruzteame/weather-app' className='flex gap-1 hover:text-[#3E8DE3] hover:underline' target="_blank"><img src={Code} className='w-5 h-5' alt='code'/>Source</a>
              </div>
          </div>
        </div>
      </div>
      <div className='md:hidden'><Footer/></div>
    </div>
  )
}


export default Project