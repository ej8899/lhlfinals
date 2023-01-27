import React, { useEffect, useRef, useState, useContext } from "react";
import ThemeSwitch from "../ThemeSwitch.jsx";
import ToggleColorMode from "../ThemeSwitch/index.jsx";

import './NavBar.scss';
function NavBar(props) {
  
  return (
  <nav className="navbar-main">
  <span>this is the nav bar</span> <span><ThemeSwitch/></span>

  <span>
    <ToggleColorMode></ToggleColorMode>
  </span>
  </nav>
  );
};
export default NavBar;