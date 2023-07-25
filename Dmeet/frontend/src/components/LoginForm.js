import React,{ useState } from 'react';

function LoginhtmlForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:',username);
        console.log('Password:',password);
        // add state
        setUsername('')
        setPassword('')
    }

  return (
    <div>
        <div className="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-xl" >
            <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" ><span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-900 from-blue-900">WELCOME BACK!</span></h1>
            <p className="text-slate-900 grid place-content-center">Excited to c u </p>
        </div>
        <div className="w-full max-w-xl">
            <form className="bg-slate-200 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={ handleSubmit }>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="username" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                id="password" type="password" placeholder="******************"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Log In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
                    htmlForgot Password?
                </a>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default LoginhtmlForm