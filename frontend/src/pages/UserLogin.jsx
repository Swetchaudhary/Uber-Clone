import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({});

  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password
    }) 
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
    <div>
       <img className='w-16 mb-10' src="https://tse3.mm.bing.net/th/id/OIP.mzogwijpMisG1IbuHAWqWAHaCk?pid=Api&P=0&h=180" alt="" />

      <form onSubmit={(e)=> {submitHandler(e)}}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input required 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        type="email" placeholder='email@example.com'
         className='bg-[rgb(254, 254, 254)] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />
        <h3 className=' text-lg font-medium text-xl mb-2'>Enter Password</h3>
         <input 
         value={password}
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
         required type="password"  placeholder='password'
         className='bg-[rgb(254, 254, 254)] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'/>
         <button className='bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>
      </form>

          <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link>
           </p>
    </div>

    <div>
      <Link
       to='/captain-login'
      className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
    </div>
    </div>
  )
}

export default UserLogin