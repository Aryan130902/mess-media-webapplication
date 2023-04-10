
//importing components
import Login from './components/Account/Login'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
import SlidingComponent from './components/Slide/Sliding_Component'

function App() {
  
  return (
    <div className="bg-dark">
      <Navbar/>
      <Header/>
      <Section/>
      <Footer/>
      {/* <Login/> */}
      {/* <SlidingComponent/> */}
    </div>
  )
}

export default App
