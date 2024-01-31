// Navbar.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./NavBar.css";
import { FaRedhat } from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  return (
    <>
      <div className="navbar">
        <h1>Groovin Bros<FaRedhat className='logo'/></h1>
        <div className="cart-icon">
          <FaShoppingCart />
          {cartCount > 0 && <span className='counter'>{cartCount}</span>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
