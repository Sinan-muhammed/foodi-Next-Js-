import React from 'react'
import img1 from '../../public/maindish.png'
import img2 from '../../public/breakfast.png'
import img3 from '../../public/Dessert.png'
import img4 from '../../public/Browse all.png'
import { BsRouter } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'


const Categories = () => {
  const browseCart =[
    {id:1,img:img1,title:'Main Dish',items:'(86 dishes)'},
    {id:2,img:img2,title:'Break Fast',items:'(12 break fast)'},
    {id:3,img:img3,title:'Dessert',items:'(48 dessert)'},
    {id:4,img:img4,title:'Browse All',items:'(255 Items)'}
  ]
  return (
    <div className='flex flex-col w-100% items-center md:justify-center md:pt-[200px] pt-[100px] pb-[50px] gap-[45px]'>
        <div className='flex flex-col items-center justify-center gap-[15px]'>
            <h1 className='md:text-[20px] text-[17px] text-[#FF6868] font-semibold tracking-wide'>Customer Favorites</h1>
            <h1 className='md:text-[45px] text-[25px] text-black font-bold '>Popular Catagories</h1>
        </div> 
        <div className='browse flex w-full p-[20px] md:p-[0px] gap-[30px] overflow-x-scroll  md:overflow-x-hidden'>
           {browseCart.map((cart)=>(
           <Link href='/product'> 
            <div key={cart.id} className='md:w-[326px] md:h-[326px] h-[200px] shadow-xl md:shadow-none w-[200px] bg-white drop-shadow-2xl rounded-[40px] flex flex-col border-[#fff5] items-center justify-center gap-[10px]'>
              <div className='md:w-[150px] w-[50px] h-[50px] md:h-[150px] bg-[#C1F1C6] rounded-full flex items-center justify-center'>
                <Image src={cart.img} alt={cart.title} width={100} height={75} />
              </div>
              <h1 className='text-[20px] mt-[2px] font-semibold'>{cart.title}</h1>
              <h1 className='text-[18px] font-medium text-[#555555]'>{cart.items}</h1>
            </div>
            </Link>
           ))} 
        </div>
    </div>
  )
}

export default Categories