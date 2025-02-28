import React from 'react'
import { servicesData } from '../utils/services'




function Services() {
  return (
    <section id="Servicos" className="py-20 bg-white flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold pb-10 text-[#053259]">Nossos Serviços</h2>
      <div className="mt-8 gap-10 grid container mx-50 md:grid-cols-2 xl:grid-cols-3 me-70 sm:me-40 md:me-60 lg:me-30">
        
        {servicesData.map((serv, idx) => {
          return (
            <a key={idx} href={serv.link} target="_blank"><div className="group w-100 bg-gray-100/30 rounded p-10 shadow-md h-50 border hover:scale-105 hover:shadow-xl ease-linear transition transform shadow-lightgray border-gray-100">
              <h3 className="text-xl items-center flex justify-center font-semibold group-hover:text-[#2376be] text-[#053259]">
                {serv.title}
              </h3>
              <p className="mt-2 items-center flex justify-center text-gray-600">
                {serv.description}
              </p>
            </div></a>
          )})
        }
      </div>
    </section>
  )
}

export default Services