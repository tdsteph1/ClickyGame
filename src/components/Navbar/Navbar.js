import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>



<nav className="navbar navbar-dark bg-primary">
  <a className="navbar-brand" >
    Clicky Game
  </a>

  <a className="navbar-brand" >
   <span className="msg"> {props.navbarMsg} </span>
  </a>

  <a className="navbar-brand" >
    Score: <span className="currentScore"> {props.score} </span> | Top Score:<span className="topScore"> {props.topScore} </span>
  </a>
</nav>



export default Navbar;
