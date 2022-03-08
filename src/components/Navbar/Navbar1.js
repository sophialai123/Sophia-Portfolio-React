import React, { useState } from 'react';
import { Link } from "react-router-dom"
import "./Navbar.css"
//npm install @material-ui/core and npm install @material-ui/icons
import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar(props) {
  // create [value, function]=useState()
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks); // this is opposite of openLinks start vaule, if openLinks is fales, then this will be true
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}> {/* Use ternary operator, if openLinks is true , id will be "open", otherwise "close"*/}
        <img className="logo" src={require("../Images/SL-logo.png")} style={{ width: "80px", height: "80px" }} />
        <div className='hiddenLinks'>
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </div>

      </div>
      <div className='rightSide'>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
