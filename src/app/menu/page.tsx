"use client"
import React from 'react'
import { menuData } from '@/data'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='relative max-w-screen p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] gap-3 md:gap-0 md:h-[calc(100vh-8rem)] flex items-center flex-col md:flex-row'>
     
      {
        menuData.map((datas=>(
        
            <Link href={datas.slug} key={datas.id}  className='sm:w-[80vw] md:w-[100vw] h-[33vh] bg-cover' style={{backgroundImage:`url(${datas.img})`}}>
              <div className={`text-${datas.color} w-1/2 `}>
                <h1 className='font-bold text-3xl uppercase'>{datas.title}</h1>
                <p className='text-sm my-4'>{datas.desc}</p>
               
              </div>
            </Link>
        
        )))
      }
    </div>
  )
}

export default Menu