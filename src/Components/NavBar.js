import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import "./NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Groovin Bros</h1>
      <div className="cart-icon">
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
