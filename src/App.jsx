import React from "react"
import Navbar from "../src/components/Navbar"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Services from "../src/components/Services"
import Contact from "../src/components/Contact"


export function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
    </>
  )
}

export default App
