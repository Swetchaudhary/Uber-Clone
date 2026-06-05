import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate=useNavigate();

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const captainData={
        fullname: {
          firstname: firstName,
          lastname: lastName,
        },
        email: email,
        password: password,
        vehicle: {
          vehicleType: vehicleType,
          color: vehicleColor,
          plate: vehiclePlate,
          capacity: vehicleCapacity,
        },
      }
  
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
      if(response.status === 201){
        const data=response.data;
        setCaptain(data.captain)
        localStorage.setItem('token',data.token)
        navigate('/captain-home')
      }
  
    } catch (error) {
        console.log("Error Response:", error.response?.data);
    console.log("Status:", error.response?.status);
    }
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  };

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
          <h3 className="text-lg w-full font-medium mb-2">
            What's our captain's name
          </h3>
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

          <h3 className="text-lg font-medium mb-2">
            What's our captain's email
          </h3>
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

          <h3 className=" text-lg font-medium mb-2">Enter Password</h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle details</h3>
          <div className="flex gap-3 mb-3">
            <select
              required
              className="bg-[rgb(254, 254, 254)] w-1/2 rounded px-3 py-2 border flex-1 text-lg"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select vehicle type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>

            <input
              required
              type="text"
              placeholder="Vehicle color"
              className="bg-[rgb(254, 254, 254)] w-1/2 rounded px-3 py-2 border flex-1 text-lg placeholder:text-base"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-3 mb-6">
            <input
              required
              type="text"
              placeholder="Plate"
              className="bg-[rgb(254, 254, 254)] w-1/2 rounded px-3 py-2 border flex-1 text-lg placeholder:text-base"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />

            <input
              required
              type="number"
              placeholder="Capacity"
              min="1"
              className="bg-[rgb(254, 254, 254)] w-1/2 rounded px-3 py-2 border flex-1 text-lg placeholder:text-base"
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value);
              }}
            />
          </div>

          <button className="bg-[#111]  text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
            Create Captain Account
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
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and
          <span className="underline"> Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
