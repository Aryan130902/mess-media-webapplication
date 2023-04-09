
//importing components
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'

function App() {
  
  return (
    <div className="bg-dark">
      <Navbar/>
      <Header/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default App
