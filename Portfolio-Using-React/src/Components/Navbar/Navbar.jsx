import React from 'react';
import './style.css' 
import {NavLink } from 'react-router-dom';

function Navbar() {
return(
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
          to="/home"
          end
          className={({ isActive}) =>
        isActive ? 'nav-link active' : 'nav-link'
      }
      >
        Home
      </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Project Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default Navbar