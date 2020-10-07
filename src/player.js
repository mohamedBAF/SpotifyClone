import React from "react";
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./body";
import Footer from "./Footer";

function player({ spotify, discover_weekly }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body spotify={spotify} discover_weekly={discover_weekly} />
      </div>
      <Footer spotify={spotify}/>
    </div>
  );
}

export default player;
