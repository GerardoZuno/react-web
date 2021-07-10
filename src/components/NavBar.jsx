import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navBar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRLV
            <i className={"fas fa-times"} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>  
              <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
