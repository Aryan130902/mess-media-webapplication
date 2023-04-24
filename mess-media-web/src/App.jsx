import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";

import { useState } from 'react';

//importing components
import Login from './components/Account/Toggleaccount'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
import Testimonial from './components/Testimonial/Testimonial'
import Cards from './components/Cards/cards'
import Img from './components/Img/Img'
import MessProfile from './components/MessProfile/MessProfile'
import Profile from './components/Profile/Profile'


function App() {


  return (
      <div className="bg-dark">
        <BrowserRouter>
          <Routes>
            <Route path="/toggleaccount" element = { <Toggleaccount /> } />

            <Route path="/" element ={ 
              <div>
                <Navbar/>
                <Header/>
                <Section/>
                <Footer/>
              </div> } />

              <Route path="/messprofile" element ={ 
              <div>
                <Navbar/>
                <MessProfile/>
                <Footer/>
              </div> } />
              
              <Route path="/mess" element ={ 
              <div>
                
                <Img/>
                <Cards/>
                <Footer/>
              </div> } />

          </Routes>
        </BrowserRouter>
      </div>
    
  )
}

export default App
