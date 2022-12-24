import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";

import { HashLink as Link} from 'react-router-hash-link';


function Menu (){

    return <Router>
        <nav> 
            <Link smooth to="/#home_section" className="Link">Home</Link>
            <Link smooth to="/#bouquet_section" className="Link">Bouquet</Link>
            <Link smooth to="/#about_section" className="Link">About</Link>
            <Link smooth to="/#contact_section" className="Link">Contact</Link>
        </nav>
    
    </Router>
}

export default Menu;