import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover bg-center bg-no-repeat bg-[url(https://i.pinimg.com/736x/d3/47/bb/d347bb1517e4747e1c2309477cf25b1c.jpg)] h-screen pt-8  w-full flex justify-between flex-col bg-red-300'>
        <img className='w-16 ml-8' src="https://freepnglogo.com/images/all_img/uber-logo-c96a.png" alt="" />
        <div className='bg-white px-4 py-4 pb-8'>
            <h2 className='text-[40px] font-semibold'>Get Started With Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-4'>Continue</Link>
        </div>
    </div>
  )
}

export default Start