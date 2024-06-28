'use client'

import Image from 'next/image'
import Link from 'next/link'
import { title } from 'process'
import React, { useState } from 'react'

type link = {
    id:number;
    title:string;
    url:string;
}

const Menu = () => {
    const [open,setOpen] = useState(false)
    const links = [
        {id:1,title:'Home',url:'/'},
        {id:2,title:'Menu',url:'/menu'},
        {id:3,title:'Services',url:'/Services'},
        {id:4,title:'Cart',url:'/cart'},
        {id:5,title:'Offers',url:'/Offers'},
        {id:6,title:'Login',url:'/login'}
    ]
  return (
<div>
    <div className='flex gap-[15px]'>  
        <Image src='/search.png' className='z-50' alt='cart' width={24} height={24}/>        
        <Image src='/menu.png' alt='menu' className='z-50' width={30} height={30} onClick={()=>setOpen((prev)=>!prev)}/>
    </div>
        <div className={open ? 'flex flex-col h-[100vh] absolute right-[0px] top-[0] w-[250px] bg-[#39db4970] justify-center items-center tex-[13px] font-semibold gap-[24px] transition-transform duration-1000 ease-in-out translate-x-[10px]':`hidden translate-x-[0px]`}>
           {links.map((link)=>(
            <Link href={link.url}>{link.title}</Link>
           ))}
        </div>
    </div>
    
  )
}

export default Menu