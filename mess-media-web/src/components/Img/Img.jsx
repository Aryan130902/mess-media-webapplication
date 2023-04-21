import React from 'react'
import Header from '../Header/Header'

import Navbar from '../Navbar/Navbar'
import Headroom from 'react-headroom'

const Img = () => {
  return (
   
    <div className="relative  ">
     <Navbar className=" absolute top-0 left-0 w-full z-10 " />
    <img src="/Back.png" alt="Your Image" className="w-full" />
   
  
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <img src="/mess_media.png" alt="Your Logo" className="w-1.5rem h-10" />
      <p className="text-white text-3xl font-bold mb-4 py-8">Find the Best Messes in your town</p>
    </div>
 
  </div>
  )
}

export default Img