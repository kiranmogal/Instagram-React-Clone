import React from "react";
import "./HomePage.css";
import SideNav from "./Navigation/SideNav";
import Timeline from "./Timeline/Timeline";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="timeline">
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;
