
//importing components
import Login from './components/Account/Login'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
import Testimonial from './components/Testimonial/Testimonial'
import Dummy from './components/Dummy/dummy'

function App() {
  
  return (
    <div className="bg-dark">
      <Navbar/>
      <Header/>
      <Section/>
      <Testimonial/>
      <Footer/>
      {/* <Dummy/> */}
    </div>
  )
}

export default App
