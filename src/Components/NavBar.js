// Navbar.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./NavBar.css";

const Navbar = ({ cartCount }) => {
  return (
    <div className="navbar">
      <h1>Groovin Bros</h1>
      <div className="cart-icon">
        <FaShoppingCart />
        <span>{cartCount}</span>
      </div>
    </div>
  );
};

export default Navbar;
