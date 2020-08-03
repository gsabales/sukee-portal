import Sidebar from "./Sidebar";
import Viewport from "./Viewport";
import React from "react";

const Homepage = () => {
  return (
    <div className="container page-content">
      <div className="row">
        <div className=" sidebar col-lg-3">
          <Sidebar/>
        </div>
        <div className="main-window col-lg-9">
          <Viewport/>
        </div>
      </div>
    </div>
  );
};

export default Homepage