import React, { useEffect, useState } from "react";
import AddPost from "./addPost";
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
import { Avatar, Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { loginUser, logoutUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { IoIosSettings } from "react-icons/io";
import { LuActivity } from "react-icons/lu";
import { FiBookmark } from "react-icons/fi";
import { WiDaySunny } from "react-icons/wi";
import { TbMessageReport } from "react-icons/tb";

const style = {
  position: "absolute",
  top: "60%",
  left: "10%",
  transform: "translate(-50%, -50%)",
  height: 400,
  width: 190,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  elevation: 3,
};

const SideNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(loginUser());
    signOut(auth);
  };

  // const [post, addPost] = useEffect("");
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

        <button onClick={handleOpen} className="sidenavbutton">
          <MenuIcon />
          <span>More</span>
        </button>
        <Modal open={open} onClose={handleClose}>
          <Box className="modal-box" sx={style}>
            <button className="more-button">
              <IoIosSettings style={{ width: 24, height: 24 }} />
              Settings
            </button>
            <button className="more-button">
              <LuActivity style={{ width: 24, height: 24 }} /> Your Activity
            </button>
            <button className="more-button">
              <FiBookmark style={{ width: 24, height: 24 }} />
              Saved
            </button>
            <button className="more-button">
              <WiDaySunny style={{ width: 24, height: 24 }} />
              Switch Appearance
            </button>
            <button className="more-button">
              <TbMessageReport style={{ width: 24, height: 24 }} />
              Report a problem
            </button>
            <button className="more-button">Switch accounts</button>
            <button onClick={handleLogout} className="more-button">
              Log Out
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default SideNav;
