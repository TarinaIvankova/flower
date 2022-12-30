import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Menu (){

    return (
        <nav> 
            <HashLink smooth to="/#home_section" className="Link">Home</HashLink>
            <HashLink smooth to="/#bouquet_section" className="Link">Bouquet</HashLink>
            <HashLink smooth to="/#about_section" className="Link">About</HashLink>
            <HashLink smooth to="/#contact_section" className="Link">Contact</HashLink>
            <Link to="/cart" className="Link">CART</Link>
        </nav>
    );
};

export default Menu;