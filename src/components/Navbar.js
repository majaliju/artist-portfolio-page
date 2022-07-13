import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar(){
  return (
    <div>
      <ul>
      <li><NavLink to="/Home" exact>
      <Button variant="outlined" href="#outlined-buttons">
          Home
      </Button>
      </NavLink></li>
      <li><NavLink to="/About" exact>
      <Button variant="outlined" href="#outlined-buttons">
        About
      </Button>
      </NavLink></li>
      <li><NavLink to="/SongRequests" exact>
      <Button variant="outlined" href="#outlined-buttons">
          SongRequests
      </Button>
      </NavLink></li>
    </ul>
    <h1>MAJ ALIJU</h1>
    </div>
    
  )
}

export default Navbar;