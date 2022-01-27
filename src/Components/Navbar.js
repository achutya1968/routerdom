
import React from 'react'
import {Routes, Route} from "react-router-dom"
import { NavLink } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Contact from "./Contact";
import Directions from "./Directions";
import Hours from  "./Hours" 

function Navbar() {
    return (
      <div>
        <ul>
          <NavLink activeClassName="active_Styles" end to ="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active_Styles" end to="/About">
            <li>About</li>
          </NavLink>
          <NavLink activeClassName="active_Styles" end to="/Contact">
            <li>Contact</li>
          </NavLink>
          <NavLink activeClassName="active_Styles" end to="/Directions">
            <li>Directions</li>
          </NavLink>
          <NavLink activeClassName="active_Styles" end to="/Hours">
            <li>Hours</li>
          </NavLink>
        </ul>
        <Routes>
          <Route  path="/" element ={<Home />}></Route>
          <Route  path="/About" element={<About />}></Route>
          <Route  path="/Contact" element={<Contact />}></Route>
          <Route  path="/Directions" element={<Directions />}></Route>
          <Route path="/Hours" element={<Hours />}></Route>
        </Routes>
      </div>
    );
}

export default Navbar
