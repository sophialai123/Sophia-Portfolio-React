import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">

      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img className='logo' src={require("../Images/logo.png")} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav active ">
            <li className="nav-item ">
              <a className="nav-link " aria-current="page" href="#Home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;



// <ul className="navbar-nav active ">
// <li className="nav-item ">
//   <a className="nav-link " aria-current="page" href="Home">Home</a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="About">About</a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="Projects">Projects</a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="Contact">Contact</a>
// </li>
// </ul>