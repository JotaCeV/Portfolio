import React, { useEffect, useState } from "react";
import "./header.css";

import ProfilePic from "../../assets/profile-pic.jpeg";
import NavBar from "./nav-bar/NavBar";

function Header({ ref1, ref2, ref3, ref4 }) {
  return (
    <>
      <div className="header-container">
        <NavBar ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} />
        <div className="info-container">
          <div className="text-container">
            <h2>Hola, me llamo</h2>
            <h1>Juan Cruz Vetromile</h1>
            <h3>Desarrolador Web Full-Stack</h3>
          </div>

          <img src={ProfilePic} alt="profile-pic" id="profile-img" />
        </div>

        {/* <div className="fade" /> */}
      </div>
    </>
  );
}

export default Header;
