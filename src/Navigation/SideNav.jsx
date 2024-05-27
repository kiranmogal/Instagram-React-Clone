import React from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { RiMessengerLine } from "react-icons/ri";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { BsThreads } from "react-icons/bs";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

const SideNav = () => {
  return (
    <div className="sidenav-container">
      <img className="sidenavLogo" src="public/logo.png" alt="InstagramLogo" />

      <div className="sidenavButtons">
        <button className="sidenavbutton">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="sidenavbutton">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="sidenavbutton">
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </button>

        <button className="sidenavbutton">
          <SlideshowIcon />
          <span>Reels</span>
        </button>

        <button className="sidenavbutton">
          <RiMessengerLine className="nav-icon" />
          <span>Messages</span>
        </button>

        <button className="sidenavbutton">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>

        <button className="sidenavbutton">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>

        <button className="sidenavbutton">
          <Avatar
            alt="Katherine Pierce"
            src="public\kp1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <span>Profile</span>
        </button>
      </div>
      <div className="sidenavbelow">
        <button className="sidenavbutton">
          <BsThreads className="nav-icon" />
          <span>Threads</span>
        </button>

        <button className="sidenavbutton">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
