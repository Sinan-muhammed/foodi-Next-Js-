import Image from 'next/image'
import React from 'react'
import Chef from '../../public/chefImg.png'
import Cust1 from '../../public/customer-1.png'
import Cust2 from '../../public/customer-2.png'
import Cust3 from '../../public/customer-3.png'
import Star from '../../public/star.png'

const Testimonials = () => {
  return (
    <div className='w-full h-[500px] flex pb-[50px] '>
        <div className='h-[100%] w-[50%] hidden md:flex justify-center items-center pt-[150px]'>
            <div className='h-[280px] relative w-[320px] bg-[#53EC62] rounded-bl-[40px] rounded-br-[40px] flex items-center justify-center rounded-t-[50%]'>
                <Image src={Chef} alt='chefImag' width={350} height={100} className='w-[300px] h-[470px] absolute bottom-0' />
                <div className='message relative h-12 w-52 bottom-[-150px] left-[100px]'>
              <div className="bg-white h-12 w-52 absolute rounded-full drop-shadow-2xl flex items-center justify-center">
                <h1 className='text-[15px] font-semibold '>Our Best Chef 😁 </h1>
              </div>
              <div className="bg-white h-[28px] w-[20px] rotate-12 rounded-bl-[25px] rounded-tr-[15px] z-50 absolute top-[-5px] left-0 drop-shadow-2xl"></div>
              </div>
            </div>
        </div>
        <div className='h-[100%] md:w-[50%] w-full flex flex-col pl-[20px] md:pt-[70px] md:pl-[70px] gap-[20px]'>
              <h1 className='text-[17px] font-bold text-[#FF6868] uppercase'>Testimonials</h1>
              <div>
               <h1 className='md:text-[50px] text-[30px] font-bold'>What Our Customers <br/> Say About Us</h1>
              </div>
              <div>
                <p className='text-[#555555c7] md:leading-[25px] font-semibold'>“I had the pleasure of dining at Foodi last night, and <br/> I'm still raving about the experience! The attention to <br/> detail in presentation and service was impeccable”</p>
              </div>
              <div className='flex pt-[20px] gap-[20px] '>
                 <div className='flex '>
                  <Image src={Cust1} alt='' className='h-[50px] w-[50px] rounded-full border-[3px] bg-orange-200' />
                  <Image src={Cust2} alt='' className='h-[50px] w-[50px] rounded-full border-[3px] z-40 ml-[-18px]'/>
                  <Image src={Cust3} alt='' className='h-[50px] w-[50px] rounded-full border-[3px] z-50 ml-[-18px]'/>
                 </div>
                 <div>
                  <h1 className='font-bold'>Customer Feedback</h1>
                  <div className='flex gap-[11px]  items-center'>
                    <Image src={Star} alt='' className='w-[17px] h-[17px]' />
                    <h1 className='font-semibold'>4.9 </h1>
                    <h1 className='text-[#807E7E] font-semibold'>(18.6k Reviews)</h1>
                  </div>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Testimonials