import { RiBookletLine, RiCurrencyLine, RiMapPinFill, RiSpeedUpLine, RiTimer2Line } from '@remixicon/react'
import React from 'react'

function CaptainDetail() {
  return (
    <div>

      <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://tse1.mm.bing.net/th/id/OIP.XMa6K9nT4_GC-DOq_ReaigHaLH?pid=Api&P=0&h=180"
              alt=""
            />
            <h4 className="text-lg font-medium">Harsh Patel</h4>
          </div>

          <div>
            <h4 className="text-xl font-semibold">₹295.20 </h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
          <div className="flex flex-col items-center justify-center">
            <RiTimer2Line className="text-3xl mb-2 font-thin" />
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <RiSpeedUpLine className="text-3xl mb-2 font-thin" />
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <RiBookletLine className="text-3xl mb-2 font-thin" />
            <h5 className="text-lg font-medium">10.2</h5>
            <p className="text-sm text-gray-600">Hours Online</p>
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

export default CaptainDetail