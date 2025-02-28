import React from 'react'
import Logo from '../assets/accountlogo.png'

export function Navbar() {
  return (
    <section>
        <header className='py-2 bg-none absolute justify-center w-full z-10'>
            <nav className='flex items-center justify-around hover:text-black'>
                <h2 className='text-white text-4xl'>
                  <span className='text-[#7eddf2]'>A</span>
                  <span className='text-[#28f050]'>C</span>
                  <span className='text-[#cef725] pe-1'>E</span>-
                 Guarulhos.</h2>


                <ul className='lg:flex p-8 gap-10 text-xl hidden text-white'>
                    <li className='text-2xl hover:drop-shadow-white cursor-pointer transition-transform ease-linear'><a href="#Sobre">Sobre</a></li>
                    <li className='text-2xl hover:drop-shadow-white cursor-pointer transition-transform ease-linear'><a href="#Servicos">Serviços</a></li>
                    <li className='text-2xl hover:drop-shadow-white cursor-pointer transition-transform ease-linear'><a href="#Contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    </section>
  )
}

export default Navbar