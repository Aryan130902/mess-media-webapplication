import React from 'react'
import { useEffect, useState } from 'react'
import { API } from '../../service/api';
import { Link } from 'react-router-dom';


const Cards = () => {

    const [mess,setMess] = useState([]);
    


    const loadData = async()=>{
      try {
          const response = await API.getAllMesses();
          console.log(response.data.data);
          setMess(response.data.data);
      } catch (error) {
          console.error(error);
      }
  }

    useEffect(()=>{
      loadData()
     },[])


    return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  
  <p className="text-white text-3xl font-bold mb-4 mt-0 flex justify-center">Find the Best Messes in your town</p>
    <div className="flex flex-wrap -m-4">
  
            {
                mess.map(fruit => (
                    
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={fruit.id}>
                    <Link to={`/mess/${fruit.id}`} key={fruit.id}>
                        <a className="block relative h-48 rounded overflow-hidden">
                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={fruit.photo}/>
                        </a>
                        <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{fruit.name}</h3>
                        <h2 className="text-gray-500 title-font text-lg font-medium">{fruit.price}</h2>
                        <p className="mt-1">{fruit.address}</p>
                        </div>
                    </Link>
                    </div>
                
                ))
            }
        </div>
    </div>
</section>
    
    )
    }
export default Cards