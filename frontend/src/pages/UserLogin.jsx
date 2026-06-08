import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDataContext } from '../context/UserContext'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({});

  const {user,setUser} = useContext(userDataContext);
  const navigate=useNavigate();


  const submitHandler = async(e) =>{
    e.preventDefault();
     try {
    const userData = {
      email,
      password
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }
  } catch (error) {
    console.log("Login Error:", error.response?.data);
    console.log("Status:", error.response?.status);
  }
};

  return (
    <div className='p-7 flex flex-col h-screen justify-between'>
    <div>
       <img className='w-16 mb-10' src="https://freepnglogo.com/images/all_img/uber-logo-c96a.png" alt="" />

      <form onSubmit={(e)=> {submitHandler(e)}}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input required 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value);
        }}
        type="email" placeholder='email@example.com'
         className='bg-[rgb(254, 254, 254)] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />
        <h3 className=' text-lg font-medium  mb-2'>Enter Password</h3>
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