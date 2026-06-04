import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {

   const [email,setEmail]=useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData,setUserData]=useState({});

    const submitHandler = (e) =>{
      e.preventDefault()
      setUserData({
        fullName:{
          firstName:firstName,
          lastName:lastName
        },
        email:email,
        password:password
      })
    }

  return (
    <div className="py-5 px-5 flex flex-col h-screen justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg w-full font-medium mb-2">What's our captain's name</h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              type="text"
              placeholder="First name"
              className="bg-[rgb(254, 254, 254)]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              required
              type="text"
              placeholder="Last name"
              className="bg-[rgb(254, 254, 254)]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's our captain's email</h3>
          <input
            required
            type="email"
            placeholder="email@example.com"
            className="bg-[rgb(254, 254, 254)] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <h3 className=" text-lg font-medium text-xl mb-2">Enter Password</h3>
          <input
            required
            type="password"
            placeholder="password"
            className="bg-[rgb(254, 254, 254)] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>

    
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and
          <span className="underline"> Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
