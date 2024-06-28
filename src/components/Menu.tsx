import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Menu = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className='flex gap-[15px]'>  
        <Image src='/search.png' alt='cart' width={24} height={24}/>
        <Image src='/cart.png' alt='cart' width={24} height={22}/>
        <Image src='/menu.png' alt='menu' width={30} height={30} onClick={()=>(setOpen(true))}/>
        <div className={`   hidden`}>
            <Link href='/'>Home</Link>
            <Link href='/'>Menu</Link>
            <Link href='/'>Services</Link>
            <Link href='/'>Offers</Link>
            <Link href='/'>Login</Link>
        </div>
    </div>
    
  )
}

export default Menu