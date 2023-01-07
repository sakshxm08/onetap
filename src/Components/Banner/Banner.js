import React, { useState } from "react";
import DynamicPosts from "../DynamicPosts/DynamicPosts";

import "./Banner.css";

function Banner() {
  let [category, setCategory] = useState();

  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <select
              name="Category"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {" "}
              <option value="null">ALL CATEGORIES</option>
              <option value="Auditorium">Auditorium</option>
              <option value="Gym">Gym</option>
              <option value="Swimming Pool">Swimming Pool</option>
              <option value="Cafes">Cafes</option>
              <option value="Open Grounds">Open Grounds</option>
              <option value="Lounges">Lounges</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span onClick={() => setCategory("Auditorium")}>Auditorium</span>
            <span onClick={() => setCategory("Gym")}>Gym</span>
            <span onClick={() => setCategory("Swimming Pool")}>
              Swimming Pool
            </span>
            <span onClick={() => setCategory("Cafes")}>Cafes</span>
            <span onClick={() => setCategory("Open Grounds")}>
              Open Grounds
            </span>
            <span onClick={() => setCategory("Lounges")}>Lounges</span>
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
