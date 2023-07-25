import React from 'react'

function signupForm() {
    return (
        <div>
            <div class="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-xl" >
                <h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" ><span class="text-transparent bg-clip-text bg-gradient-to-r to-purple-900 from-blue-900">WELCOME</span></h1>
                <p class="text-slate-900 grid place-content-center">Excited to c u !!!</p>
            </div>
            <div class="w-full max-w-xl">
                <form class="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
      )
}

export default signupForm