import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="otherQuickOptions">
            <span
              className="bannerCategory"
              onClick={() => setCategory("Auditorium")}
            >
              AUDITORIUM
            </span>
            <span className="bannerCategory" onClick={() => setCategory("Gym")}>
              GYM
            </span>
            <span
              className="bannerCategory"
              onClick={() => setCategory("Swimming Pool")}
            >
              SWIMMING POOL
            </span>
            <span
              className="bannerCategory"
              onClick={() => setCategory("Cafes")}
            >
              CAFES
            </span>
            <span
              className="bannerCategory"
              onClick={() => setCategory("Open Grounds")}
            >
              OPEN GROUNDS
            </span>
            <span
              className="bannerCategory"
              onClick={() => setCategory("Lounges")}
            >
              LOUNGES
            </span>
          </div>
        </div>
        <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div>
      </div>
      {category != null && <DynamicPosts category={category} />}
    </div>
  );
}

export default Banner;
