import { RiArrowDownWideLine, RiUser3Fill } from '@remixicon/react';
import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>

        <h5
        onClick={()=>{ 
          props.setVehiclePanel(false);
        }}
        className="p-3 text-xl text-gray-200 flex justify-center w-[93%] absolute top-0"> <RiArrowDownWideLine /> </h5>

        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className=" p-3 w-full mb-2 border-2 border-transparent active:border-black rounded-xl flex items-center justify-between">
          <img
            className="h-12"
            src="https://pluspng.com/img-png/free-png-hd-of-cars-car-png-file-png-image-1312.png"
            alt=""
          />

          <div className="ml-2 w-[50%]">
            <h4 className="flex font-medium text-base">
              UberGO{" "}
              <span>
                <RiUser3Fill className="h-5" />{" "}
              </span>
              4
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, Compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className=" p-3 w-full mb-2 border-2 border-transparent  active:border-black rounded-xl flex items-center justify-between">
          <img
            className="h-12"
            src="https://static.vecteezy.com/system/resources/previews/024/819/250/large_2x/electric-motorbike-electric-bike-e-bike-e-motorbike-electric-vehicle-e-vehicle-transparent-background-ai-generated-png.png"
            alt=""
          />

          <div className="ml-2 w-[50%]">
            <h4 className="flex font-medium text-base">
              Moto{" "}
              <span>
                <RiUser3Fill className="h-5" />{" "}
              </span>
              1
            </h4>
            <h5 className="font-medium text-sm">4 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, motorcycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹80</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className=" p-3 w-full border-2 border-transparent active:border-black rounded-xl flex items-center justify-between">
          <img
            className="h-12 "
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt=""
          />

          <div className="ml-2 w-[50%]">
            <h4 className="flex font-medium text-base">
              UberAuto{" "}
              <span>
                <RiUser3Fill className="h-5" />{" "}
              </span>
              3
            </h4>
            <h5 className="font-medium text-sm">6 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹118</h2>
        </div>

    </div>
  )
}

export default VehiclePanel