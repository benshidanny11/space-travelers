import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/imgs/logo.png';

function Head() {
  return (
    <nav>
      <div><img src={logo} alt="App logo" /></div>
      <div>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Mission</NavLink>
        <div />
        <NavLink to="/profile">My profile</NavLink>
      </div>
    </nav>
  );
}

export default Head;
