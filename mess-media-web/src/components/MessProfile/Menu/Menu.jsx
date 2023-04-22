import React from 'react'

const Menu = () => {
  return (
    <div className="w-full py-12">
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
      <div className="flex flex-col justify-center p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dummy Menu Will be updated soon</h5>
      </div>
    </div>
  </div>
  )
}

export default Menu