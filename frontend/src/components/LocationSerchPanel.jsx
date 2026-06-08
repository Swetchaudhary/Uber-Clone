import React from 'react'
import { RiMapPinFill } from "@remixicon/react";


const LocationSerchPanel = (props) => {

  //sample array for locations

  const locations = [
    "83/22, block C, near peer, Govindpurrum, Ghaziabad",
    "73/11, block b, near Malhotra's cafe, Govindpurrum, Ghaziabad",
    "c-26, block C, near peer, Govindpurrum, Ghaziabad",
    "i-199, block I, near ankit dairy, Govindpurrum, Ghaziabad",
  ]
  return (
    <div>
        {/* this is just a sample data */}

        {
        locations.map((location)=> {
          return <div
          key={location}
          onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }}
          className='flex items-center justify-center border-2 border-gray-50 active:border-black p-3 rounded-xl my-2 gap-4'>
            <h2 className='bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full '><RiMapPinFill /></h2>
            <h4 className='font-medium'>{location}</h4>
        </div>
        })
        }

      
    </div>
  )
}

export default LocationSerchPanel