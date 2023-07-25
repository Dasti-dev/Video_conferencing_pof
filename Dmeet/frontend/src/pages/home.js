import React from 'react'
import Option from '../components/option';

function home() {
  return (
    <div class="grid place-content-center h-screen">
        <h1 class="mb-6 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-4xl dark:text-white">Hello <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">INTERSECTION OF INFINITE PATHS !!!</span></h1>
        <Option />
    </div>
  )
}

export default home