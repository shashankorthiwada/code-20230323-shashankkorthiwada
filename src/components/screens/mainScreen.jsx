import React from "react";
import { Navbar } from "../navbar";
import { Banner } from "../Banner";
import ArrowIcon from "../../images/downArrow.png";
import { SecondScreen } from "./secondScreen";
import { ThirdScreen } from "./thirdScreen";
import { FourthScreen } from "./fourthScreen";

export const MainScreen = () => {
  return (
    <>
      <div className="main-screen">
        <Navbar />
        <Banner />
        <img
          src={ArrowIcon}
          style={{
            position: "absolute",
            width: "35px",
            height: "24.5px",
            left: "740px",
            top: "630px",
          }}
          alt="Arrow Icon"
        />
      </div>
      <div className="second-screen">
        <SecondScreen />
      </div>
      <div className="third-screen">
        <ThirdScreen />
      </div>
      <div className="fourth-screen">
        <FourthScreen />
      </div>
    </>
  );
};
