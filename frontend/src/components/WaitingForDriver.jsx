import { RiArrowDownWideLine, RiCurrencyLine, RiMapPinFill } from '@remixicon/react';
import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingforDriver(false);
        }}
        className="p-3 text-xl text-gray-200 flex justify-center w-[93%] absolute top-0"
      >
        {" "}
        <RiArrowDownWideLine />{" "}
      </h5>

      <div className='flex items-center justify-between'>
        <img
          className="h-12"
          src="https://pluspng.com/img-png/free-png-hd-of-cars-car-png-file-png-image-1312.png"
          alt=""
        />
        <div className='text-right '>
          <h2 className='text-lg font-medium'>Rahul</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP37 BM 6578</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
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
      </div>
    </div>
  )
}

export default WaitingForDriver