
//importing components
import Login from './components/Account/Login'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
import Testimonial from './components/Testimonial/Testimonial'
import Cards from './components/Cards/cards'
import { useEffect, useState } from 'react'
import Img from './components/Img/Img'



function App() {
  return (
    <div className="bg-dark">
      {/* <Navbar/>
      <Header/>
      <Section/>
      <Testimonial/>
      <Footer/> */}
     
      <Img/>
      <Cards/>
      <Footer/>
    
    </div>
  )
}

export default App
