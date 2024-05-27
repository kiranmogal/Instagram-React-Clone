import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./Posts/Post";
import { Avatar } from "@mui/material";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "katherinepierce",
      postImage: "public/kp2.jpg",
      likes: 300,
      timestamp: "2d",
    },
    {
      user: "stefansalvatore",
      postImage: "public/stf.jpg",
      likes: 190,
      timestamp: "3d",
    },
    {
      user: "damonsalvatore",
      postImage: "public/dam.jpg",
      likes: 200,
      timestamp: "2h",
    },
    {
      user: "elenagilbert",
      postImage: "public/eg.jpg",
      likes: 180,
      timestamp: "4d",
    },
    {
      user: "carolineforbes",
      postImage: "public/cf.jpg",
      likes: 150,
      timestamp: "2h",
    },
  ]);
  return (
    <>
      <div className="feed">
        <div className="top-container">
          <div className="stories">
            <Avatar
              className="story-users"
              src="public\cf.jpg"
              sx={{ width: 55, height: 55 }}
            ></Avatar>
            username
            <Avatar
              className="story-users"
              src="public\dam.jpg"
              sx={{ width: 55, height: 55 }}
            ></Avatar>
            username
            <Avatar
              className="story-users"
              src="public\eg.jpg"
              sx={{ width: 55, height: 55 }}
            ></Avatar>
            username
            <Avatar
              className="story-users"
              src="public\kp1.jpg"
              sx={{ width: 55, height: 55 }}
            ></Avatar>
            username
            <Avatar
              className="story-users"
              src="public\stf.jpg"
              sx={{ width: 55, height: 55 }}
            ></Avatar>
            username
            <Avatar
              className="story-users"
              src="public\kp3.jpg"
              sx={{ width: 55, height: 55 }}
            ></Avatar>
            username
            <Avatar
              className="story-users"
              src="public\eg.jpg"
              sx={{ width: 55, height: 55 }}
            ></Avatar>
            username
          </div>
          <div className="profile">Profile</div>
        </div>
        <div className="timeline">
          <div className="timelineleft">
            {posts.map((post) => (
              <Post
                user={post.user}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
              />
            ))}
          </div>
          <div className="timelineright">
            <Suggestions />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
