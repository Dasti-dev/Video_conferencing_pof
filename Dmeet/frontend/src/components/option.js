import React from 'react'
import Janwar from '../images/janwar.jpg';

function option() {
  return (
    <div class="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-4xl flex ">
        <div class="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-3xl w-6/12">
            <img src={Janwar} alt="YAHA EK JANWAR HONA CHAHIYE THA"/>
        </div>
        <div class="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-2xl w-6/12 grid place-content-center">
            <div class="flex-col">
                <div class="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-64">
                    <button class="bg-slate-600 rounded-full ...">SIGN UP</button>
                </div>
                <div class="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-64">
                    <button class="bg-slate-600 rounded-full ...">LOGIN</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default option