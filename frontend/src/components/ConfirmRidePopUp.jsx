import {
  RiArrowDownWideLine,
  RiCurrencyLine,
  RiMapPinFill,
} from "@remixicon/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
        className="p-3 text-xl text-gray-200 flex justify-center w-[93%] absolute top-0"
      >
        {" "}
        <RiArrowDownWideLine />{" "}
      </h5>

      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="https://img.freepik.com/premium-photo/passport-photo-portrait-young-man-white-background_1028938-330506.jpg?w=2000"
            alt=""
          />
          <h2 className="text-lg font-medium">Sarthak Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
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

        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e)=> setOtp(e.target.value)}
              type="text"
              className="bg-[#eee]  px-6 py-4 font-mono text-lg rounded-lg w-full mt-5 outline-none"
              placeholder="Enter OTP"
            />
            <Link
              onClick={() => {}}
              to="/captain-riding"
              className="flex justify-center text-lg w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg  "
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className=" w-full mt-2 text-lg text-white bg-red-400 font-semibold p-3 rounded-lg  "
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
