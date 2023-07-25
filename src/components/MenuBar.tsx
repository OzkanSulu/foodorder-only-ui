"use client";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Link from "next/link";
import cart from "../../public/cart.png"
import Image from "next/image";



const MenuBar = () => {

    const links=[
        {id:1,title:"Homepage", url:"/"},
        {id:2,title:"Menu",url:"/"},
        {id:3,title:"Contact",url:"/"},
    ]
    const user=false;

  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu)
  return (
    <div className="text-[24px] font-bold cursor-pointer w-full relative">
      {!openMenu ? <BiMenuAltRight  className="relative mr-4" onClick={()=>setOpenMenu((prev)=>!prev)}/> : <MdOutlineRestaurantMenu className="relative mr-4" onClick={()=>
    setOpenMenu((prev)=>!prev)}/>}

        {openMenu&&(
            <div className="absolute top-7 right-0 h-[calc(100vh-6rem)] w-[100vw] z-10 transition bg-red-500 text-white flex flex-col items-center gap-5 justify-center">
                {links.map((items)=>(
                <div key={items.id} className=" text-white flex flex-col">
                    <Link href={items.url}>{items.title}</Link>
                </div>
                
            ))}
            {
                !user? <Link href="/login">Login</Link>:<Link href="/user">Orders</Link>
            }
            <div className="flex gap-2">
        <Link href="/cart">
          
          </Link>
          <Link href="/cart">
         
          Cart</Link>
        </div>
            </div>
        )}
    </div>
   
  );
};

export default MenuBar;
