import React from 'react'
// import heroImage from '../assets/Herogif.gif'
import heroImage from '../assets/HeroImage Without BG.gif'

const Hero = () => {
  return (
    // <section id='home' className='container flex flex-col md:flex-row justify-between items-center mx-auto pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
    <section id='home' className='min-h-screen container flex flex-col md:flex-row justify-between items-center mx-auto py-20 pb-6 px-4 sm:px-6 lg:px-8'>
    
        {/* left col */}
        <div className='w-full md:w-1/2 space-y-8'>
            {/* busy section */}
            <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group'>
                <span className='text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform text-5xl'>
                    🏃🏻‍♂️‍➡️
                </span>

                <span className='text-sm font-medium'>Are You Busy Person</span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leadiing-tight'>
                Empowering Healthier Lives with 
                <span className='text-blue-600 relative inline-block'>
                    Life Style Management
                    <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
                </span> System
                <span className='inline-block ml-2 animate-pulse text-6xl'>🩺</span>
            </h1>

            <p className='text-gray-600 text-lg md:text-xl max-w-xl'>
                We help individuals take control of their health through personalized lifestyle tracking and intelligent wellness insights.
            </p>

            <button className='bg-blue-600 text-white px-8 py-4 font-medium rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300'>
                Download Me ⏬
            </button>

        </div>

        {/* right col */}
        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
            <div className='relative'>
                <img src={heroImage} alt='Hero Image' className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
            </div>
        </div>
    </section>
  )
}

export default Hero
