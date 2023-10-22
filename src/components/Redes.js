import React from 'react'
import email from './assets/email.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
function Redes() {
  return (
    <div className='absolute right-0 flex p-10'>
            <a href="https://github.com/PabloFerrari07/Portfolio" target='_blank'>
            <img src={github}  className='p-2' />
            </a>

            <a href="mailto:pablodevferrari@gmail.com" target='_blank'>
        <img src={email} className='p-2' />
            </a>

        <a href="https://www.linkedin.com/in/pablo-ferrari-171887290/" target='_blank'>
        <img src={linkedin}  className='p-2'/>
        </a>


    </div>
  )
}

export default Redes
