import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

function Head() {
  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="App logo" />
        <h1>Space Travellers&apos; Hub</h1>
      </div>
      <div className="links">
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Mission</NavLink>

        <NavLink to="/profile">My profile</NavLink>
      </div>
    </nav>
  );
}

export default Head;
