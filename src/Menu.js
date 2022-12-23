import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Bouquet from "./Bouquet";
import About from "./About";
import Contact from "./Contact";
import { HashLink } from 'react-router-hash-link';


function Menu (){

    return <Router>
        <nav> 
            <Link to="/#home_section" className="Link">Home</Link>
            <Link to="/ourpropact#bouquet_section" className="Link">Bouquet</Link>
            <Link to="/#about_section" className="Link">About</Link>
            <Link to="/#contact_section" className="Link">Contact</Link>
        </nav>
        <div>
       
          <Bouquet />
          <About />
          <Contact />
      </div>
    </Router>
}

export default Menu;