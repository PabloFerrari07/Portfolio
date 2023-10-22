import React from 'react'
import CVPabloFerrari from './assets/CVPabloFerrari.pdf'
function NavLateral() {
  return (
    <div className='h-screen bg-[#113A33] w-36 fixed left-0 shadow-2xl  font-mono'>
      <nav>
        <ul className='flex-col items-center justify-center h-64 pt-28' >
            <li className='rotate-90  font-semibold text-white'>sobre mi</li>
            <li className='rotate-90  mt-28 font-semibold text-white'>portfolio</li>
            <li className='rotate-90  mt-28 font-semibold text-white'>contacto</li>
        </ul>
        <div className="bg-[#49937E] w-22  h-8 rounded-[12px] text-center text-white mt-72">
                <a href={CVPabloFerrari}download={CVPabloFerrari}>descargar cv</a>
            </div>
      </nav>
    </div>
  )
}

export default NavLateral
