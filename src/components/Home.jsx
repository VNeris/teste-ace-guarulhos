import React from 'react'

function Home() {
  return (
    <section className="Background text-white h-svh pt-40 flex flex-col justify-center items-center sticky shadow-2xl">
      <h1 className="text-6xl font-bold text-center lgtext-start">Bem-vindo à ACE -
                 Guarulhos.</h1>
      <p className="text-2xl mt-4">Fortalecendo o comércio e os negócios da região.</p>
      <a href="#Sobre" className="mt-6 bg-white px-6 py-2 rounded-lg transition-transform ease-linear font-semibold hover:bg-[#053259] hover:text-white text-[#053259]">
        Saiba mais
      </a>
    </section>
  )
}

export default Home