import { RiArrowDownWideLine, RiLogoutBoxRLine } from "@remixicon/react";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finsishRidePanelRef = useRef(null);

   useGSAP(
      function () {
        if (finishRidePanel) {
          gsap.to(finsishRidePanelRef.current, {
            transform: "translateY(0)",
          });
        } else {
          gsap.to(finsishRidePanelRef.current, {
            transform: "translateY(100%)",
          });
        }
      },
      [finishRidePanel],
    );

  return (
    <div className="h-screen ">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://freepnglogo.com/images/all_img/uber-logo-c96a.png"
          alt=""
        />

        <Link
          to="/home"
          className="  right-2 h-10 w-10 text-lg font-medium bg-white flex items-center justify-center rounded-full"
        >
          <RiLogoutBoxRLine />
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg"
          alt=""
        />
      </div>

      <div onClick={()=>{
        setFinishRidePanel(true)
      }} className="h-1/5 p-6 flex relative items-center justify-between bg-yellow-400  ">
        <h5
          onClick={() => {
            props.setRidePopUpPanel(false);
          }}
          className="p-1 w-[95%] text-xl text-gray-200 flex justify-center absolute top-0"
        >
          {" "}
          <RiArrowDownWideLine />{" "}
        </h5>

        <h4 className="text-xl font-seminbold">4 KM away</h4>
        <button className="  bg-green-600  text-white font-semibold p-3 px-15 rounded-lg  ">
          Complete ride
        </button>
      </div>

      <div
        ref={finsishRidePanelRef}
        className="w-full fixed z-10   bottom-0 bg-white px-3 py-10 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>

    </div>
  );
};

export default CaptainRiding;
