"use client";

import React, { useRef, useState } from 'react';
import { LuChevronLeft } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";
import MainDish from './api/MainDish';


const Dishes = () => {

    const [btnClr,setBtnClr] = useState(false)

   const ScrollButton = useRef<HTMLDivElement>(null);
    
    const ScrollLeft = ()=>{

      if (ScrollButton.current) {
        ScrollButton.current.scrollBy({ left: -300, behavior: "smooth" });
        setBtnClr(true)
      }
}

const ScrollRight = ()=>{

  if (ScrollButton.current) {
    ScrollButton.current.scrollBy({ left: 300, behavior: "smooth" });
    setBtnClr(false)
  }
}




  return (
    <div className='pb-[100px] flex flex-col gap-[30px] md:gap-[50px]'>
        <div className='flex flex-col pl-[20px] md:pl-[100px] gap-[25px] pr-[100px]'>
            <h1 className='text-[17px] md:text-[20px] text-[#FF6868] font-bold tracking-[2px]'>Special Dishes</h1>
            <div className='flex justify-between ] flex-col md:flex-row  w-full'>
            <h1 className='text-[25px] md:text-[40px] font-bold text-[#000000]'>Standout Dishes <br/> From Our Menu</h1>
            <div className='md:mt-[70px]  justify-end pl-[120px] md:pl-0 h-[50px] w-[320px] md:w-auto md:h-auto flex gap-[25px]'>
            <button
        onClick={ScrollLeft}
        className={`md:h-[50px] h-[40px] md:w-[50px] w-[40px] rounded-full flex justify-center items-center ${btnClr ? 'bg-[#39DB4A] text-[#FFFFFF]' : 'bg-[#EFEFEF] text-[#6F6E6E]'}`}
      >
        <LuChevronLeft className='md:h-[38px] h-[30px] md:w-[34px] w-[26px]' />
      </button>
      <button
        onClick={ScrollRight}
        className={`md:h-[50px] h-[40px] md:w-[50px] w-[40px] rounded-full flex justify-center items-center ${!btnClr ? 'bg-[#39DB4A] text-[#FFFFFF]' : 'bg-[#EFEFEF] text-[#6F6E6E]'}`}
      >
        <LuChevronRight className='md:h-[38px] h-[30px] md:w-[34px] w-[26px]' />
      </button>        
            </div>
            </div>
        </div>
        <div ref={ScrollButton} className="Main-Dish flex  overflow-x-scroll pr-[48px] md:pr-[60px] pl-[48px] md:pl-[100px] pb-[50px] scrollbar-hide">
              <MainDish/>
        </div>
    </div>
  )
}

export default Dishes