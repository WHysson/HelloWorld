import React from 'react';
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={style.nav}>
 
      <NavLink className="link" to="/profile">Profile</NavLink>
      <NavLink className="link" to="/dialogs">Messages</NavLink>
      <NavLink className="link" to="#">News</NavLink>
      <NavLink className="link" to="#">Music</NavLink>
      <NavLink className="link" to="#">Setings</NavLink>

  </nav>
  );
}

export default Navbar;
