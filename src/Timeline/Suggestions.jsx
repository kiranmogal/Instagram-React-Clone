import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions-title">
        Suggested for you
        <span>See All</span>
      </div>
      <div className="suggestion-usernames">
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar sx={{ width: 55, height: 55 }}>k</Avatar>
            </span>
            <div className="username-info">
              <span className="username">katherinepierce</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <div className="username-right">
            <button>Follow</button>
          </div>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar sx={{ width: 55, height: 55 }}>k</Avatar>
            </span>
            <div className="username-info">
              <span className="username">katherinepierce</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <div className="username-right">
            <button>Follow</button>
          </div>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar sx={{ width: 55, height: 55 }}>k</Avatar>
            </span>
            <div className="username-info">
              <span className="username">katherinepierce</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <div className="username-right">
            <button>Follow</button>
          </div>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar sx={{ width: 55, height: 55 }}>k</Avatar>
            </span>
            <div className="username-info">
              <span className="username">katherinepierce</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <div className="username-right">
            <button>Follow</button>
          </div>
        </div>
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar sx={{ width: 55, height: 55 }}>k</Avatar>
            </span>
            <div className="username-info">
              <span className="username">katherinepierce</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <div className="username-right">
            <button>Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
