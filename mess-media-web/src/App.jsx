
//importing components
import Login from './components/Account/Toggleaccount'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
import Testimonial from './components/Testimonial/Testimonial'
import Cards from './components/Cards/cards'
import Img from './components/Img/Img'
import Toggleaccount from './components/Account/Toggleaccount'
import MessProfile from './components/MessProfile/MessProfile'


function App() {
  return (
    <div className="bg-dark">
     <Navbar/>
       {/* <Header/>
      <Section/>
      <Testimonial/>
      <Footer/>
     
      <Img/>
      <Cards/>
      <Footer/> 
    <Toggleaccount/>*/}
    <MessProfile/>

    </div>
  )
}

export default App
