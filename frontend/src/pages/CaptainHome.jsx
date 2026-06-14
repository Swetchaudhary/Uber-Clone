import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  RiMapPinFill,
  RiCurrencyLine,
  RiHome5Line,
  RiLogoutBoxRLine,
  RiTimer2Line,
  RiSpeedUpLine,
  RiBookletLine,
} from "@remixicon/react";
import CaptainDetail from "../components/CaptainDetail";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const ridePopUpPanelRef = useRef(null);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const confirmRidePopUpPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel],
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel],
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

      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://www.spaceotechnologies.com/wp-content/uploads/2021/04/ubermap_blur1.jpg"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetail />
      </div>

      <div
        ref={ridePopUpPanelRef}
        className="w-full fixed z-10   bottom-0 bg-white px-3 py-10 pt-12"
      >
        <RidePopUp
          setRidePopUpPanel={setRidePopUpPanel}
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
        />
      </div>

      <div
        ref={confirmRidePopUpPanelRef}
        className="w-full fixed z-10 h-screen  bottom-0 bg-white px-3 py-10 pt-12"
      >
        <ConfirmRidePopUp
          setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}
          setRidePopUpPanel={setRidePopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
