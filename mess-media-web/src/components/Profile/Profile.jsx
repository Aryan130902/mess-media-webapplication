import React from 'react'

const Profile = () => {
    return (

        <div class="h-screen w-screen flex bg-dark ">

            <div class=" bg-transparent shadow-xl rounded-lg text-white container m-3 ml-10">
                <div class="rounded-lg  h-48 bg-red-500 "></div>
                <div class="flex justify-between">
                    <div class="flex flex-col">
                        <div class="w-48 h-48 relative left-20 -mt-24 border-4 border-white rounded-full overflow-hidden">
                            <img class="object-cover object-center h-48" src='https://media.istockphoto.com/id/1139722168/photo/mid-adult-man-smiling-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=Hk4bTLaIWEOAvY6v768OlpPycRLXLgZiPTjrT-rjCSY=' alt='man looking front' />
                        </div>
                        <div class="text-center relative left-10 mt-2 w-64 h-32">
                            <h2 class="font-semibold">User Name</h2>
                            <p >+91 9873245456</p>
                            <p >Usermail1213@gmail.com</p>

                        </div>
                    </div>
                    <div class="bg-transparent sm:flex sm:justify-center sm:items-center sm:space-y-0 sm:space-x-6 border-white border-2 rounded-lg relative -left-6  m-4 ">
                        <img class="block relative left-2 mx-auto h-48 w-96 rounded-lg sm:mx-0 sm:shrink-0 my-4" src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Mess Photo" />
                        <div class="text-center space-y-2 sm:text-left">
                            <div class="space-y-0.5 mx-4">
                                <p class="text-lg font-semibold">
                                    Mess Name
                                </p>
                                <p class=" font-medium">
                                    +91 8934788763
                                </p>
                                <p class=" font-medium">
                                    MessWala456@gmailcom
                                </p>
                            </div>
                            <button class="px-4 py-1 mx-4 text-sm  font-semibold rounded-full border  hover:text-white bg-red-500 hover:border-transparent">Unsubscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-2/5 m-8  rounded-lg text-white">
                <div class="w-full max-w-md p-4  border-2 border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                        <h5 class="text-xl font-bold leading-none">Favourite</h5>
                        <a href="#" class="text-base font-medium  hover:underline ">
                            View all
                        </a>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-10 h-10 rounded-full" src="/photo.jpg" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <a href="#" class=" font-semibold text-lg  truncate dark:text-white hover:underline">Mess 1</a>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        ₹340
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-10 h-10 rounded-full" src="/photo2.jpg" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <a href="#" class=" font-semibold text-lg  truncate dark:text-white hover:underline">Mess 2</a>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        ₹320
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-10 h-10 rounded-full" src="/photo.jpg" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <a href="#" class=" font-semibold text-lg  truncate dark:text-white hover:underline">Mess 3</a>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        ₹330
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-10 h-10 rounded-full" src="/photo2.jpg" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <a href="#" class=" font-semibold text-lg  truncate dark:text-white hover:underline">Mess 4</a>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        ₹340
                                    </div>
                                </div>
                            </li>
                            <li class="pt-3 pb-0 sm:pt-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-10 h-10 rounded-full" src="/photo.jpg" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <a href="#" class=" font-semibold text-lg  truncate dark:text-white hover:underline">Mess 5</a>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        ₹350
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile
