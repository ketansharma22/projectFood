import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbaar from "../Components/Navbaar";
import '../styling/Home.css'
const Home = () => {
  return (
    <div>
      <Navbaar />
      <div id="homemain"></div>
    </div>
  );
};

export default Home;
