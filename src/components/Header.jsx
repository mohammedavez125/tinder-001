import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import MessageIcon from "@mui/icons-material/Message";

function Header() {
  return (
    <div className="header">
      {/* Person Icon */}
      <IconButton>
        <PersonIcon className="person_icon" fontSize="large" />
      </IconButton>

      {/* Logo Here */}
      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png" alt="Logo" className="siteLogo" ></img>

      {/* Messages */}
      <IconButton>
        <MessageIcon className="person_icon" fontSize="large" />
      </IconButton>

    </div>
  );
}

export default Header;
