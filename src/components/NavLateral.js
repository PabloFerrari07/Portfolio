import React from 'react'

function NavLateral() {
  return (
    <div className='h-screen bg-[#113A33] w-28 fixed left-0 shadow-black  font-mono'>
      <nav>
        <ul className='flex-col items-center justify-center h-64 pt-28' >
            <li className='rotate-90  font-semibold text-white'>sobre mi</li>
            <li className='rotate-90  mt-28 font-semibold text-white'>portfolio</li>
            <li className='rotate-90  mt-28 font-semibold text-white'>contacto</li>
        </ul>
        <div    className='mt-72'>
            <p>descarga</p>
        </div>
      </nav>
    </div>
  )
}

export default NavLateral
