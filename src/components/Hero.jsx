import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
const navigate = useNavigate()




  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center 
      bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
    
    <div className='text-center mb-6'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>One Platform <br/> for All  <span className='text-primary'>Creative Ai Tools</span> </h1>
      <p>SM7 is an all-in-one AI platform that generates content, creates images, edits visuals, removes backgrounds, and enhances resumes instantly and effortlessly.</p>
    </div>
    
    
    <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
      <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg border hover:scale-102 active:scale-95 transition cursor-pointer'>Start Creating Now</button>
      <button className='bg-white px-10 py-3 rounded-lg border border-grey-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch Demo</button>
    </div>
    
    <div className='flex items-center gap-4 mt-8 mx-auto text-grey-600'>
      <img src={assets.user_group} alt="" className='h-8' /> Trusted by 2k+ People
    </div>
    
    </div>

  

  )
}

export default Hero
