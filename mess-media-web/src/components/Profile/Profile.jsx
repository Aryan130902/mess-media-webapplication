import { FaEnvelope } from 'react-icons/fa';
import React from 'react'

const Profile = () => {
    return (

        <div class="h-screen w-screen flex bg-dark ">

            <div class=" bg-transparent shadow-xl rounded-lg text-white container m-3 ml-10">
                <div class="rounded-lg  h-48 bg-red-500 "></div>
                <div class="flex justify-between">
                    <div class="flex flex-col">
                        <div class="w-48 h-48 relative left-20 -mt-24 border-4 border-white rounded-full overflow-hidden">
                            <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
                        </div>
                        <div class="text-center relative left-10 mt-2 w-64 h-32">
                            <h2 class="font-semibold">UserName alpha</h2>
                            <p >Alphabeta@gmal.com</p>
                            <p >xxxxxxxxx</p>

                        </div>
                    </div>
                    <div class="bg-transparent sm:flex sm:justify-center sm:items-center sm:space-y-0 sm:space-x-6 border-white border-2 rounded-lg relative -left-6  m-4 ">
                        <img class="block relative left-2 mx-auto h-48 w-96 rounded-lg sm:mx-0 sm:shrink-0 my-4" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
                        <div class="text-center space-y-2 sm:text-left">
                            <div class="space-y-0.5 mx-4">
                                <p class="text-lg font-semibold">
                                    Mess Name
                                </p>
                                <p class=" font-medium">
                                    xxxxxxxxxx
                                </p>
                                <p class=" font-medium">
                                    alphabeta@gmailcom
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
                        <a href="#" class="text-sm font-medium  hover:underline ">
                            View all
                        </a>
                    </div>
                    <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="/Back.png" alt="Neil image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium  truncate dark:text-white">
                                            Mess 1
                                        </p>

                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        $320
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="/Back.png" alt="Bonnie image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium  truncate dark:text-white">
                                            Mess 2
                                        </p>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        $3467
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="/Back.png" alt="Michael image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium  truncate dark:text-white">
                                            Mess 3
                                        </p>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        $67
                                    </div>
                                </div>
                            </li>
                            <li class="py-3 sm:py-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="/Back.png" alt="Lana image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium  truncate dark:text-white">
                                            Mess 4
                                        </p>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold  dark:text-white">
                                        $367
                                    </div>
                                </div>
                            </li>
                            <li class="pt-3 pb-0 sm:pt-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-8 h-8 rounded-full" src="/Back.png" alt="Thomas image" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="text-sm font-medium  truncate dark:text-white">
                                            Mess 5
                                        </p>
                                        <p class="text-sm  truncate ">
                                            xxxxxxxxxx
                                        </p>
                                    </div>
                                    <div class="inline-flex items-center text-base font-semibold dark:text-white">
                                        $2367
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
