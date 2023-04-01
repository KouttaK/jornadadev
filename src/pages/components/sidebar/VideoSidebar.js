import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({likes, messages, shares}) {
  const [liked, setliked] = useState(false);

  function handdleLike() {
    setliked(!liked);
  }
  return (
    <div className="videoSidebar" onClick={handdleLike}>
      <div className="videoSidebar__options">
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{ liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__options">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;