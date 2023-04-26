import React from 'react'
import { useState } from 'react'
import { API } from '../../service/api';
import { useNavigate } from "react-router-dom";
import { photo } from '../../constants/data';



const messInitialValue = {
  name:'',
  photo:randomPhoto.url,
  address:'',
  contact:'',
  price:'',
  valueForMoney:"",
}

const randomPhoto = photo[Math.floor(Math.random() * photo.length)];

const Createmess = ({toggleaccount}) => {

    const navigate = useNavigate();
    const[createmess,setMess]= useState(messInitialValue);
    const[error,setError] = useState('');
  

    const onInputChange = (e) => {
      setMess({...createmess, [e.target.name]: e.target.value});
    }

    

    const toggle = () =>{
        toggleaccount('login')
    }


    const createmessUser = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://mess-media.cyclic.app/api/mess/createMess', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(createmess),
        });
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        setMess(messInitialValue);
        navigate('/');
      } catch (err) {
        setError('Something went wrong please try again!');
      }
    };

  return (
    <div className="mx-auto w-full bg-gray-100 text-gray-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
              Create Your Mess
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Full Name</label>
                <input type="text" 
                name="name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required="" 
                onChange={(e) => onInputChange(e)}  
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Address</label>
                <input 
                type="text" 
                name="address" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 
                required="" 
                onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Contact</label>
                <input 
                type="text" 
                name="contact" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 
                required="" 
                onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Price</label>
                <input 
                type="text" 
                name="price" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 
                required="" 
                onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Value For Money</label>
                <input 
                type="text" 
                name="valueForMoney" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                 
                required="" 
                onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-black rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:focus:ring-primary-800 bg-red-400 hover:bg-red-500"
              onClick={(e) => createmessUser(e)}>
              Create Mess</button>
              {error && <div className='pb-4 text-red-600 '>{error}</div>}
            </form>
          </div>
        </div>
  )
}

export default Createmess