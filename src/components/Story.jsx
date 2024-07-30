import React from 'react'
import Service from './Service'

const Story = () => {
  return (
    <div className='flex pt-[100px] pb-[100px]  md:flex-row flex-col'>
      <div className='flex flex-col w-full md:w-[50%] pl-[20px] md:pl-[15%]  justify-center items-center'>
        <div className='flex flex-col gap-[30px]'>
        <h1 className='text-[17px] font-bold text-[#FF6868] uppercase'>Our Story & Services</h1>
        <h1 className='md:text-[50px] text-[30px] font-bold md:leading-[62px]'>Our Culinary Journey <br /> And Services</h1>
        <p className='text-[#555555c7] leading-[25px] font-semibold'>Rooted in passion, we curate unforgettable dining <br /> experiences and offer exceptional services, <br /> blending culinary artistry with warm hospitality.</p>
        <button className='md:h-[50px] h-[30px] w-[120px] md:w-[150px] bg-[#39DB4A] rounded-[40px] text-white text-[12px] md:text-[17px] font-semibold'>Explore</button>
        </div>
      </div>
      <div>
        <div className='flex justify-center items-center  md:pl-[100px]'>
            <Service/>
        </div>
      </div>
    </div>
  )
}

export default Story