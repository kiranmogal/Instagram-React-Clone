import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { IoIosMore } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { TbSend } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa";

const Post = ({ user, postImage, likes, timestamp }) => {
  return (
    <div className="post">
      <div className="postHeader">
        <div className="postHeader-author">
          <Avatar className="postHeaderElement">
            {user.charAt(0).toUpperCase()}
          </Avatar>
          {user}
          <span className="seperator"> • </span>
          <span className="timestamp">{timestamp}</span>
        </div>
        <IoIosMore className="moreHoriz">ś</IoIosMore>
      </div>

      <div className="postImage">
        <img src={postImage} alt="Post-Image" />
      </div>
      <div className="postFooter">
        <div className="postFooterIcons">
          <div className="postIconsMain">
            <FaRegHeart className="interaction" />
            <RiChat3Line className="interaction" />
            <TbSend className="interaction" />
          </div>
          <div className="postIconsSave">
            <FaRegBookmark className="savePost" />
          </div>
        </div>

        <div className="postDetails">
          {likes} likes
          <span className="caption-username">{user}</span>
          View all comments
        </div>
      </div>
    </div>
  );
};

export default Post;
