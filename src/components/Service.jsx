import React from 'react'
import Image from 'next/image'
import img1 from '../../public/Catering.png'
import img2 from '../../public/fastdelivery.png'
import img3 from '../../public/onlineorder.png'
import img4 from '../../public/gift.png'

const Service = () => {

    const services = [
        {img:img1,heading:'CATERING',dis:'Delight your guests with our flavors and  presentation'},
        {img:img2,heading:'FAST DELIVERY',dis:'We deliver your order promptly to your door'},
        {img:img3,heading:'ONLINE ORDERING',dis:'Explore menu & order with ease using our Online Ordering '},
        {img:img4,heading:'GIFT CARDS',dis:'Give the gift of exceptional dining with Foodi Gift Cards'}
    ]
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-[36px] pt-[22px]'>
        {services.map((data)=>(         
        <div className='h-[270px] w-[230px] bg-[#FFFFFF] flex flex-col items-center justify-center gap-[30px] shadow-2xl rounded-[40px]'>
            <Image src={data.img} alt={data.title} width={50} height={50} />
            <div className='flex flex-col justify-center gap-[12px] items-center'>
            <h1 className='text-[18px] font-bold text-[#5FE26C]'>{data.heading}</h1>
            <p className='pl-[22px] pr-[22px] text-[13px] font-semibold text-center text-[#90BD95]'>{data.dis}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Service