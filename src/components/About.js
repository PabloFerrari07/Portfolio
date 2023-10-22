import React from 'react'
import imgMe from './assets/imgMe.svg'
import CVPabloFerrari from './assets/CVPabloFerrari.pdf'
function About() {
  return (
    <div className='bg-[#172E28] flex pt-44'>
      <div className="w-screen">
        <img src={imgMe} />
      </div>
      <div className='w-screen p-6'>
        <h2 className="text-[6rem] text-[#ffffff8a] font-bold ">ABOUT ME</h2>
        <div className="">
                <div className="text-white mb-10 text-lg">
                    <p>Soy un apasionado desarrollador Front-End con experiencia en tecnologías como HTML, CSS, SASS, Bootstrap, Tailwind, React y Firebase.</p>
                </div>
                <div className="text-white mb-10 text-lg">
                    <p>Actualmente, estoy cursando una Tecnicatura en Sistemas Informáticos en la UTN, lo que me brinda una base sólida en programación y desarrollo web.</p>
                </div>
                <div className="text-white mb-10 text-lg">
                    <p> Mi objetivo es fusionar mi amor por el diseño y la tecnología para crear experiencias web atractivas y funcionales. Estoy emocionado por las oportunidades de colaboración y aprendizaje en el mundo del desarrollo web y estoy ansioso por seguir creciendo en este campo.</p>
                </div>
            </div>
            <div className="bg-[#49937E] w-40  h-8 rounded-[12px] text-center text-white ">
                <a href={CVPabloFerrari}download={CVPabloFerrari}>descargar cv</a>
            </div>
      </div>
         
    </div>
  )
}

export default About
