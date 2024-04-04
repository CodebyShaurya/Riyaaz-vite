import React from 'react'
import Navbar from '../components/Navbar'
import heroimg from '../assets/hero-bg.png.webp'


function Home() {
  return (
    <div>
        <Navbar />

        {/* Hero Section*/}
        <div className='bg-[#0a183d] grid grid-cols-2 text-center pt-32 pb-20 text-white'>
          <div>           
            <h1 className='text-8xl font-semibold'> <span className='text-[#fc0254]'>Music</span> for <br/> everyone.</h1>    
                
            <div className='px-32'><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Quis ipsum suspendisse ultrices gravida.
            </div>
            
          </div>
          <div>
            <img src={heroimg} alt='riyaz' loading="eager"/>
          </div>

        </div>

        {/* 100 tracks*/}

        <div className='grid grid-cols-2 text-center py-20 text-[#0a183d]'>
            <div className='text-7xl font-semibold px-24  '>
                <h2>Unlimited Access to 100K tracks</h2>
            </div>

            <div className='text-lg pr-24'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. 
                Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </div>

        </div>
        



      
    </div>
  )
}

export default Home