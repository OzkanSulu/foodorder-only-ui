"use client"
import React, { useEffect, useState } from 'react'

const coupons = [
  "$50 FoodLand Pizza eGift Card (Email Delivery)",
  "Select Subway Restaurants: Buy One Get One Footlong at Subway",
  "Arby's: Classic French Dip & Swiss $3",
];

const Notification = () => {
  const [currentCouponIndex, setCurrentCouponIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentCouponIndex((prevIndex) => (prevIndex + 1) % coupons.length);
    }, 3000);

    // Clean up the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return(
    <div className='text-lg  p-6 cursor:pointer w-100 h-16 bg-red-500 text-white flex justify-center items-center'>
      <h1 className='text-white cursor-pointer sm:text-[12px] md:text-[12px] lg:text-[16px]'>{coupons[currentCouponIndex]}</h1>
    </div>
  )
}

export default Notification