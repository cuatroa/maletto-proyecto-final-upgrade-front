
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="c-navbar">
             <Link className="c-navbar__element icon-home" to="/"></Link>
             <Link className="c-navbar__element icon-search"></Link>
             <Link className="c-navbar__element icon-bubbles4"></Link>
             <Link className="c-navbar__element icon-user"></Link>
        </nav>
    )
}

