import { RiCurrencyLine, RiHome5Line, RiMapPinFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen ">

    <Link to="/home" className="fixed top-2 right-2 h-10 w-10 text-lg font-medium bg-white flex items-center justify-center rounded-full">
        <RiHome5Line />
    </Link>

      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between ">
          <img
            className="h-12"
            src="https://pluspng.com/img-png/free-png-hd-of-cars-car-png-file-png-image-1312.png"
            alt=""
          />
          <div className="text-right ">
            <h2 className="text-lg font-medium">Rahul</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">UP37 BM 6578</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
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

        <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg  ">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
