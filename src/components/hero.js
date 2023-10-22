import React from 'react'
import imgYo from './assets/imgYo.svg'

function Hero() {
  return (
    <div className='bg-[#172E28] h-screen pl-44 flex'>
        <div>
      <h1 className='text-[7rem] text-[#ffffff8a] font-bold w-4'>HELLO WORD</h1>
      <h2 className='text-[5rem] text-[#ffffff8a] font-bold '>FRONT END</h2>
      <h2 className='text-[5rem] text-[#ffffff8a] font-bold '>DEVELOPER</h2>
        </div>
      <div className='h-96 w-2 bg-white mt-32 ml-12'></div>
        <div>
            <ul className='text-white ml-2 mt-32'>
                <li className='font-bold'>P</li>
                <li className='font-bold'>A</li>
                <li className='font-bold'>B</li>
                <li className='font-bold'>L</li>
                <li className='font-bold'>O</li>
                <li className='font-bold'> </li>
                <li className='font-bold'>F</li>
                <li className='font-bold'>E</li>
                <li className='font-bold'>R</li>
                <li className='font-bold'>A</li>
                <li className='font-bold'>R</li>
                <li className='font-bold'>R</li>
                <li className='font-bold'>I</li>

            </ul>
        </div>
        <div className=" w-[30rem] mt-20">
            <img src={imgYo} alt="" />
        </div>
    </div>
  )
}

export default Hero
