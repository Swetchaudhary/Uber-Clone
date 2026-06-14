import { RiArrowDownWideLine, RiCurrencyLine, RiMapPinFill } from '@remixicon/react';
import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>

         <h5
         onClick={()=>{
            props.setRidePopUpPanel(false);
         }}
        className="p-3 text-xl text-gray-200 flex justify-center w-[93%] absolute top-0"
      >
        {" "}
        <RiArrowDownWideLine />{" "}
      </h5>

      <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
        <div className='flex items-center gap-3'>
            <img className='h-12 w-12 object-cover rounded-full' src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330506.jpg?w=2000" alt="" />
            <h2 className='text-lg font-medium'>Sarthak Patel</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.2 KM</h5>
      </div>

      <div className="flex gap-2 mt-5 justify-between flex-col items-center">
        

        <div className="w-full">

          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <RiMapPinFill />
            <div>
              <h3 className="text-lg font-medium">526/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div> 
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <RiMapPinFill />
            <div>
              <h3 className="text-lg font-medium">526/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-5 p-3  ">
            <RiCurrencyLine />
            <div>
              <h3 className="text-lg font-medium">526/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

        </div>

        <div className='flex mt-5 items-center justify-between w-full'>

           <button onClick={()=>{
            props.setRidePopUpPanel(false)
        }} className="  text-white bg-red-400 font-semibold p-3 px-15 rounded-lg  ">
          Ignore
        </button>

          <button onClick={()=>{
            props.setConfirmRidePopUpPanel(true)
        }} className="  bg-green-600 text-white font-semibold p-3 px-15 rounded-lg  ">
          Accept
        </button>

      
        </div>

      </div>

    </div>
  )
}

export default RidePopUp