import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'


const Navbar = () => {
  return (
    <>
        <div className='h-[90px] w-full pt-[57px]  flex items-center justify-between md:pl-[154px] pr-[25px] pl-[25px] md:pr-[154px] pb-[20px]'>
            <div>
             <img className='md:w-[100px] w-[80px]' src='Logo.png' alt="logo" />
            </div>
            <div className=' gap-[51px] text-[17px] font-semibold hidden md:flex'>
          
                 <Link href='' className='hover:text-[#39DB4A]'>Home</Link>
                 <Link href='' className='hover:text-[#39DB4A]'>Menu</Link>
                 <Link href='' className='hover:text-[#39DB4A]'>Services</Link>
                 <Link href='' className='hover:text-[#39DB4A]'>Offers</Link>
            </div>
            <div className='md:flex hidden gap-[36px] md:gap-[46px] items-center'>
                <img className='w-[29px] h-[29px]' src='search.png' alt="search" />
                <img className='w-[25px] h-[25px]' src="cart.png" alt="" />
                <button className='h-[45px] w-[170px] bg-[#39DB4A] rounded-[40px]   text-[#FFFFFF] font-semibold text-[17px] hover:bg-[#ace9afb9] hover:text-green-600'>
                   <Link href='/login'>Login</Link>
                </button>
            </div>
            <div className='flex md:hidden'>
              <Menu/>
            </div>

        </div>
    </>
  )
}

export default Navbar