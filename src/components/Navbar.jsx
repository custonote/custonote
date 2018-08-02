import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar__logo">Custonote</h2>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#" className="navbar__item--link">
            Contact
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__item--button">
            Log In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
