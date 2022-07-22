import React from "react";
import "./Bottom.css";

import ReplayIcon from "@mui/icons-material/Replay";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function Bottom() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButton">
        <ReplayIcon className="person_icon button_replay MultiIconSelector" fontSize="large" />
      </IconButton>

      <IconButton className="swipeButton">
        <CloseIcon className="person_icon button_close MultiIconSelector" fontSize="large" />
      </IconButton>

      <IconButton className="swipeButton">
        <StarRateIcon className="person_icon button_starRate MultiIconSelector" fontSize="large" />
      </IconButton>

      <IconButton className="swipeButton">
        <FavoriteIcon className="person_icon button_favorite MultiIconSelector" fontSize="large" />
      </IconButton>

      <IconButton className="swipeButton">
        <FlashOnIcon  className="person_icon button_flashOn MultiIconSelector" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Bottom;
