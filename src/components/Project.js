import Nav from './Nav';
import Footer from './Footer'

const Project = () => {
  return(
    <div className='
      flex flex-col
      justify-center items-center
      gap-10
    '>
      <Nav />
      <div className='
        grid grid-rows-2 grid-flow-col
        justify-center items-center
        outline-double outline-offset-2 outline-4 outline-[#D21F3C]
        m-10
        font-mono
      '>
        <div className='w-full h-full border-solid border-2 border-[#D21F3C] p-4'>hi</div>
        <div className='w-full h-full border-solid border-2 border-[#D21F3C] p-4'>hi</div>
        <div className='w-full h-full border-solid border-2 border-[#D21F3C] p-4'>hi</div>
        <div className='w-full h-full border-solid border-2 border-[#D21F3C] p-4'>hi</div>
      </div>
      <Footer />
    </div>
  )
}


export default Project