import React from 'react'
import Link from 'next/link'
import MenuBar from './MenuBar'
import Image from 'next/image'
import logo from "../../public/boyLogo.png"
import cart from "../../public/cart.png"


const Navbar = () => {
  return (
    <div className="h-14 sticky z-50 top-0 text-red-500 md:py-8 md:px-12 p-0 font-bold  flex items-center justify-between bg-white">
      <div className="sm:flex md:hidden p-4 z-10">
      <Image src={logo} width={50} height={50} alt=''/>
      </div>
      <div className="hidden md:flex gap-5">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className='text-xl font-bold'>
        <Link href="/">
          FoodLand
        </Link>
      </div>
      <div className="hidden  gap-8  md:flex">
        <Link href="/" className='bg-[#FFE15D] px-3 rounded-lg text-white'>10 1234 5678</Link>
        <Link href="/">Orders</Link>
        <div className="flex gap-2">
        <Link href="/cart">
          <Image src={cart} width={16} height={16} alt=''></Image>
          </Link>
          <Link href="/cart">
         
          Cart</Link>
        </div>
      </div>
      <div className="flex md:hidden">
       <MenuBar />
      </div>
    </div>
  )
}

export default Navbar