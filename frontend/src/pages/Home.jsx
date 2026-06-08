import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideLine, RiUser3Fill  } from "@remixicon/react";
import LocationSerchPanel from "../components/LocationSerchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingforDriverRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
   const [vehicleFound, setVehicleFound] = useState(false);
   const [waitingforDriver,setWaitingForDriver ] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: "24px",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: "0px",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen],
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel],
  );

   useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel],
  );



  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound],
  );

   useGSAP(
    function () {
      if (waitingforDriver) {
        gsap.to(waitingforDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingforDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingforDriver],
  );


  return (
    <div className="relative overflow-hidden">
      <img
        className="w-16  absolute left-5 top-5"
        src="https://freepnglogo.com/images/all_img/uber-logo-c96a.png"
        alt=""
      />

      <div className=" h-screen w-screen">
        {/* temporary image  */}
        <img
          className="w-full h-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg"
          alt=""
        />
      </div>

      <div  className="z- flex flex-col justify-end h-screen absolute w-full top-0  ">
        <div className="bg-white h-[30%] p-5 relative">
          <RiArrowDownWideLine
            ref={panelCloseRef}
            className="absolute right-6 top-6 text-3xl cursor-pointer"
            onClick={() =>
              panelOpen ? setPanelOpen(false) : setPanelOpen(true)
            }
          />
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[36%] left-10 bg-gray-900 rounded-full "></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setpickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 outline-none"
              type="text"
              placeholder="Add a pick-up location"
            />

            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3 outline-none"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="h-0 bg-white   ">
          <LocationSerchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="w-full fixed z-10  translate-y-full bottom-0 bg-white px-3 py-10 pt-12"
      >

        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="w-full fixed z-10  translate-y-full bottom-0 bg-white px-3 py-6 pt-12"
      >

        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

       <div
        ref={vehicleFoundRef}
        className="w-full fixed z-10  translate-y-full bottom-0 bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>


       <div
        ref={waitingforDriverRef}
        className="w-full fixed z-10   bottom-0 bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}  />
      </div>


    </div>
  );
};

export default Home;
