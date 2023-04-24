import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
   
        <section class="body-font">
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="text-white font-extrabold sm:text-4xl text-3xl mb-4 inline-flex">Welcome to  
                    <span>
                        <img src="/mess_media.png" class="ml-2 h-9"/>
                    </span>
                </h1>
            <p class="text-white mb-8 leading-relaxed">Stay up-to-date with the latest information on food availability, exhaustion, and holiday closures. With Mess Media, you never have to worry about missing out on your favorite meals.</p>
            <div class='flex flex-r gap-3'>
            <div class="flex justify-center m-2">
                <button class="text-white bg-primary py-2 px-6 hover:border-2 rounded text-lg font-black text-sans">REGISTER NOW!</button>
            </div>
            <NavLink to='/mess'>
            <div class="flex justify-center m-2">
                <button class="text-white bg-primary py-2 px-6 hover:border-2 rounded text-lg font-black text-sans">BROWSE MESS</button>
            </div>
            </NavLink>
            </div>
            </div>
            <div class="lg:max-w-lg lg:w-2/5 md:w-1/2 w-4/6">
                <img class="object-cover object-center rounded" alt="hero" src="/Avatar.png"/>
            </div>
        </div>
        </section>
    
  )
}

export default Header