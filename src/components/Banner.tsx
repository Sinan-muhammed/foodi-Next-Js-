import React from 'react'
import Navbar from "@/components/Navbar";
import { BsCurrencyDollar } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import image1 from '../../public/BanerCart1.png'
import image2 from '../../public/BanerCart2.png'
import rating1 from '../../public/rating1.png'
import rating2 from '../../public/rating2.png'

const Banner = () => {
    const BannerCart = [
        {id:1,name:'Spicy noodles',image:image1,rating:rating1,price:'18.00'},
        {id:2,name:'Vegetarian salad',image:image2,rating:rating2,price:'23.00'}
      ]
  return (
    <div>
        <div className="h-[600px] w-full flex justify-center items-center">
            <div className=" h-full w-[40%]  flex flex-col items-center justify-center pt-[70px] pl-[150px] gap-[40px]">
              <div className="flex flex-col justify-center gap-[39px]">
             <div className="flex">
              <h1 className="text-[45px] leading-relaxed font-extrabold">Dive into Delights <br/> Of Delectable</h1>
              <h1 className="text-[45px] leading-relaxed font-extrabold mt-[72px] ml-[-65px] text-[#39DB4A]">Food</h1>
              </div>
              <p className="text-[18px] font-medium text-[#4A4A4A]">Where Each Plate Weaves a Story of <br/> Culinary Mastery and Passionate Craftsmanship</p>
              </div> 
              <div className="flex gap-[40px] w-[100%]  items-center pl-[40px]">
                <button className="h-[50px] w-[150px] bg-[#39DB4A] rounded-[40px] text-[15px] font-semibold text-white shadow-xl"><Link href='/products'>Order Now</Link></button>
                <div className="flex items-center justify-center gap-[15px]">
                <h1 className="text-[15px] font-semibold text-[#4D4D4D]">Watch Video</h1>
                <div className="h-[50px] w-[50px] rounded-full flex justify-center items-center shadow-xl">
                  <Image src='/playbutton.png' alt="plybutton" width={15} height={12}/>
                </div>
                </div>
              </div>
            </div>
            <div className="w-[60%]  h-full relative flex items-center justify-center pt-[83px] flex-col m">
              <div className="relative h-[90%] w-[80%]  flex flex-col items-center justify-center">     
              <div className="w-[490px] h-[458px]  bg-[#53EC62] rounded-full flex justify-center items-center  "></div>
                <Image src='/Topimg.png' className="absolute right-[154px] bottom-[4px] w-[550px] h-[600px] -rotate-[5]" alt="topimg" width={850} height={850}/>   
              </div>
              <div className="flex gap-[25px] absolute bottom-[5px]">
              {BannerCart.map((cart)=>(          
                <div className="flex h-[9 0px] w-[260px] bg-white  p-[10px] gap-[24px] rounded-[25px] shadow-2xl">
                  <div className=''>
                    <Image src={cart.image} alt={cart.name} width={70} height={50} className="rounded-[15px]"/>
                  </div>
                   <div className="flex flex-col gap-[5px]">
                    <h1 className="text-[15px] font-semibold">{cart.name}</h1>
                    <Image src={cart.rating} alt={cart.name} width={60} height={50}/>
                    <h1 className="flex items-center text-[16px] font-semibold"><BsCurrencyDollar className="text-[#FF7979]" />{cart.price}</h1>
                   </div>
                </div>
              ))}
              </div>
              <div className='message relative h-12 w-52 top-[-450px] right-[250px] '>
              <div className="bg-white h-12 w-52 absolute rounded-full drop-shadow-2xl flex items-center justify-center">
                <h1 className='text-[15px] font-semibold text-[#FF6868]'>Hot Spicy Food 🌶️ </h1>
              </div>
              <div className="bg-white h-[28px] w-[20px] rotate-6 rounded-bl-[25px] z-50 absolute bottom-[-5px] right-0 drop-shadow-2xl"></div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Banner