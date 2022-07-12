import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
  return (
    <ul>
      <li><NavLink to="/Home" exact>
        Home
      </NavLink></li>
      <li><NavLink to="/About" exact>
        About 
      </NavLink></li>
      <li><NavLink to="/SongRequests" exact>
        Song Requests 
      </NavLink></li>
    </ul>
  )
}

export default Navbar;