"use client"
import React from 'react'
import Countdown from 'react-countdown'

const countDate=new Date("2024-01-01")

const CountingDown = () => {
  return (
    <div>
        <Countdown date={countDate}/>
    </div>
  )
}

export default CountingDown