import React from 'react'
import { useEffect, useState } from 'react'



const Cards = () => {

    const [mess,setMess] = useState([]);

    const loadData = async()=>{
     let response = await fetch("https://mess-media.cyclic.app/api/mess",{
       method:"GET",
       headers:{
         'content-Type' : 'application/json'
       }
     })
     response = await response.json();   
    setMess(response['data']);
    console.log(response['data']);
    }
  
    useEffect(()=>{
      loadData(),
      console.log(mess);
     },[])


    return (
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
  
  <p className="text-white text-3xl font-bold mb-4 mt-0 flex justify-center">Find the Best Messes in your town</p>
    <div class="flex flex-wrap -m-4">
  
            {
                mess.map(fruit => (
               
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={fruit.photo}/>
                    </a>
                    <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{fruit.name}</h3>
                    <h2 class="text-gray-500 title-font text-lg font-medium">{fruit.price}</h2>
                    <p class="mt-1">{fruit.address}</p>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
</section>
    
    )
    }
export default Cards