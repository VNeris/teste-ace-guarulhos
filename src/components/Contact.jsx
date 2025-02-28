import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";




function Contact() {
  return (
    <section id="Contato" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-[#053259]">Entre em Contato</h2>
      <p className="mt-4 text-lg flex items-center py-2 justify-center gap-2"><LuMapPin /> Av. João Bernardo Medeiros, 278 - Guarulhos/SP</p>
      <div className='flex items-center justify-center space-x-10'>
        <p className="text-lg flex items-center py-2 justify-center gap-2"><BsFillTelephoneFill />(11) 2137-9333</p>
        <p className="text-lg flex items-center justify-center gap-2"><FaWhatsapp />11 99673-7264</p>
      </div>
      <button className="mt-6 bg-[#053259] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1c7ccf] hover:cursor-pointer"> Visite nosso site </button>
    </section>
  )
}

export default Contact