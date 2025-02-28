import React from 'react'
import about from "../assets/About us page-amico.png"
import { FaArrowRightLong } from "react-icons/fa6";


function About() {
  return (

    <>  
      <section className="bg-gray-200 h-auto p-20 items-center justify-center flex relative">
        <div className="grid container mx-auto gap-10 md:grid-cols-2 lg:grid-cols-3">
          
          <div className='flex flex-col items-center justify-center relative z-10'>
          <p className='number-behind opacity-10'>01</p>
            <h2 className='text-4xl pb-10 text-[#103a5f] drop-shadow-blue '>Missão</h2>
            <p className='w-60 xl:ms-30'>A Associação Comercial e Empresarial de Guarulhos representa, defende e atende comerciantes, prestadores de serviços, industriais e profissionais liberais, oferecendo serviços de apoio, agregando valor ao associado e promovendo o desenvolvimento socioeconômico da região.</p>
          </div>

          <div className='flex flex-col items-center relative z-10'>
          <p className='number-behind opacity-10'>02</p>
            <h2 className='text-4xl pb-10 text-[#103a5f] drop-shadow-blue'>Visão</h2>
            <p className='w-60 xl:ms-40'>Ser reconhecida pela classe empresarial como um instrumento imprescindível para o fomento da sua atividade econômica.</p>
          </div>

          <div className='flex flex-col items-center relative z-10'>
          <p className='number-behind opacity-10'>03</p>
            <h2 className='text-4xl pb-10 text-[#103a5f] drop-shadow-blue'>Valores</h2>
            <ul className='w-60 xl:ms-30'>
              <li>.Ética</li> <br />
            <li>.Credibilidade</li> <br />
            <li>.Comprometimento</li> <br />
            <li>.Profissionalismo</li>
            </ul>
          </div>
        </div>
      </section>

      <section id='Sobre' className='grid lg:grid-cols-2 pt-20 container mx-auto relative'>
        <div className='px-10 flex flex-col'>
          <h1 class="text-4xl text-[#053259] font-semibold pb-10">Sobre a ACE - Guarulhos</h1>
          <p className='text-lg'>A Associação Comercial e Empresarial de Guarulhos (ACE-Guarulhos) foi fundada em 16 de julho de 1963 pelo empresário e empreendedor Nahim Hassan Rachid. Visite a galeria dos Ex-presidentes da ACE-Guarulhos. Nesta data comemora-se também o Dia do Comerciante.</p> <br />
          <p className='text-lg'>Há 60 anos participa ativamente do desenvolvimento econômico, político, social e cultural de Guarulhos, acompanhando e vivenciando os fatos históricos mais marcantes. Devido à seriedade, comprometimento e empreendedorismo é reconhecida como uma das mais sólidas entidades de classe do município.</p>
        <div className='justify-end flex items-center'><a href="https://www.aceguarulhos.com.br/pagina/sobre-a-ace-guarulhos#gsc.tab=0" target='_blank'><button className='cursor-pointer hover:text-[#7eddf2] flex items-center gap-2 text-[#2376be] rounded-xl px-8 my-5 py-3'><FaArrowRightLong />Ler Mais</button></a></div>
        </div>
        
        <div className='lg:flex justify-end pe-10 hidden'>
          <img src={about} className='w-100' alt="" />
        </div>

      </section>
    </>
  )
}

export default About