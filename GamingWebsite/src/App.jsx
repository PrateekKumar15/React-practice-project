// import React from 'react'
import About from './Components/About'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Features from './Components/Features'
import Story from './Components/Story'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
     <Navbar/>
      <Hero/>
    <About/>
    <Features/>
    <Story/>
    <Contact/>
    <Footer/>
    </main>
    )
}

export default App