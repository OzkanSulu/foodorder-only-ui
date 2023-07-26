import React from 'react'
import Image from 'next/image'
import offerProduct from "../../public/offerProduct.png"
import CountingDown from './CountingDown'

const Offers = () => {
  return (
    <div className="relative max-w-screen h-[65vh] bg-black flex md:flex-row flex-col justify-center items-center">
      <div className="relative w-full md:p-1 p-4 md:w-[33vw] h-full text-white flex flex-col gap-6 justify-center items-center">
        <h1 className="md:text-3xl text-xl font-extrabold">Delicious Burger Menu</h1>
        <span className='md:text-[20px] text-[18px] text-center'>Delicious, Juicy, Perfectly Grilled Burger - Irresistible Flavor!</span>
        <div className="text-4xl font-bold text-orange-600">
        <CountingDown />
        </div>
        <button className="px-6 py-3 bg-red-500 text-white rounded-lg">Order Now</button>
      </div>
      <div className="relative w-full md:w-[66vw] h-full ">
        <Image src={offerProduct} fill alt='' className='object-contain md:object-cover'/>
      </div>
    </div>
  )
}

export default Offers
