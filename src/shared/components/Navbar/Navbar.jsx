
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
<<<<<<< HEAD
  return (
    <nav className="c-navbar">
      <Link className="c-navbar__element icon-home" to="/home"></Link>
      <Link className="c-navbar__element icon-search" to="/search"></Link>
      <Link className="c-navbar__element icon-bubbles4" to="/chat"></Link>
      <Link className="c-navbar__element icon-user" to="/user"></Link>
    </nav>
  );
=======
    return (
      <nav className="c-navbar">
        <Link className="c-navbar__element icon-home" to="/home"></Link>
        <Link className="c-navbar__element icon-search" to="/search"></Link>
        <Link className="c-navbar__element icon-bubbles4" to="/chat"></Link>
        <Link className="c-navbar__element icon-user" to="/user"></Link>
      </nav>
    );
>>>>>>> c40658909d4f661bc98d7d9269ef640c07091657
}

