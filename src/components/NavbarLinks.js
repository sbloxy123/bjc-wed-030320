import React from "react";
import { Link } from "gatsby";

const NavbarLinks = () => {
  return (
    <div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/careGuide/" className="nav-link">
            Care guide
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/imports/" className="nav-link">
            Imports
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/gallery/" className="nav-link">
            Gallery
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/contact/" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/shop/" className="nav-link">
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
