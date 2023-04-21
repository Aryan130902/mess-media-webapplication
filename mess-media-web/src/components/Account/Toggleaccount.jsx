import React from 'react'
import { useState } from 'react';



// importing components
import SignUp from './SignUp/SignUp';
import Login from './Login/Login';



const Toggleaccount = () => {

  const[account, toggleaccount] = useState('login');

  const toggle = () => {
    account === 'signup' ? toggleaccount('login') : toggleaccount('signup');
    }

  return (
    <>
   
        <section className=" dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-white dark:text-white">
            <img className="w-12 h-12 mr-2" src="/logo.png" alt="logo" />
            <img className="pt-2 w-full h-8 mr-2" src="/mess_media.png" alt="logo" />
          </a>
          {
            account == 'signup' ? ( <SignUp toggleaccount = {toggleaccount}  /> ) :  ( <Login toggleaccount = {toggleaccount} /> ) 
          }
      </div>
    </section>
      
    
    </>
  )
}

export default Toggleaccount