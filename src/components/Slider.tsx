"use client";
import React, { useState } from "react";
import Image from 'next/image'
import slide1 from "../../public/slide1.png"
import slide2 from "../../public/slide2.png"
import slide3 from "../../public/slide3.jpg"

const data = [{
  id:1,
  title:"Always fresh. crispy and hot",
  image:"/slide1.png",
},
{
  id:2,
  title:"Get your order wherever you are in Seoul",
  image:"/slide2.png",
},
{
  id:3,
  title:"The best foods to share with your friends",
  image:"/slide3.jpg"
}
]

const Slider = () => {
  const [slide,setSlide] = useState(0);
    
  return (
    <div
    className='flex md:flex-row  flex-col  h-[calc(100vh-7rem)] md:h-[calc(100vh-8rem)] bg-red-500'>
      <div className="flex-1 flex  items-center justify-center flex-col gap-8 text-red-500 bg-gray-100">
        <h1 className=" uppercase ">{data[slide].title}</h1>
        <button onClick={()=>{
          setSlide((prev)=>(prev+1)%data.length)
        }} className='bg-red-500 rounded-lg text-white py-4 px-8'>Order Now</button>
      </div>
      <div className="flex-1 relative">
        <Image src={data[slide].image} alt='' fill className='object-cover'/>
      </div>
    </div>
  )
}

export default Slider