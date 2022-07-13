import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(){
  return (
    <div>
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
    <h1>MAJ ALIJU</h1>
    </div>
    
  )
}

export default Navbar;