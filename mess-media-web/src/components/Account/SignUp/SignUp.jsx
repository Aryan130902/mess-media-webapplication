import React from 'react'
import { useState } from 'react'
import { API } from '../../../service/api'



const signupInitialVlaue = {
  Name:'',
  Email:'',
  Password:'',
}


const SignUp = ({toggleaccount}) => {

    const[signup,setSignup]= useState(signupInitialVlaue);
    const[error,setError] = useState('');
  

    const onInputChange = (e) => {
      setSignup({...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async(e) => {
      let response = await API.signup(signup);

     
      if(response.isSuccess){

        console.log(response);
        localStorage.setItem('token', response.data.token );
        setSignup(signupInitialVlaue);
        const storedToken = localStorage.getItem('token');
        console.log(`token`);
        console.log(storedToken);
        toggleaccount('login');
      }else if(response.isFailure){
      setError('Something went wrong please try again!')
      }
    }

    const toggle = () =>{
        toggleaccount('login')
    }

  return (
    <div className="w-full bg-gray-100 text-gray-900 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-dark md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Full Name</label>
                <input type="text" 
                name="Name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required="" 
                onChange={(e) => onInputChange(e)}  
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Your email</label>
                <input 
                type="email" 
                name="Email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="name@company.com" 
                required="" 
                onChange={(e) => onInputChange(e)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Password</label>
                <input 
                type="password" 
                name="Password" 
                placeholder="••••••••" 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" 
                onChange={(e) => onInputChange(e)}  
                />
              </div>
              <button type="submit" className="w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-black rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:focus:ring-primary-800 bg-red-400 hover:bg-red-500"
              onClick={(e) => signupUser(e)}>
              Sign in</button>
              {error && <div className='pb-4 text-red-600 '>{error}</div>}
              <p className="text-sm font-light text-gray-900 dark:text-gray-400">
                Already have an account? 
                <button
                href="#" 
                className="font-medium text-primary-600 hover:underline dark:text-primary-500 px-2"
                onClick={() => toggle()}>Log in
                </button>
              </p>
            </form>
          </div>
        </div>
  )
}

export default SignUp