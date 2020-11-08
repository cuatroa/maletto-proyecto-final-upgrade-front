
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav className="c-navbar">
             <Link className="c-navbar__element" to="/">Home</Link>
             <Link className="c-navbar__element">Buscar</Link>
             <Link className="c-navbar__element">Chat</Link>
             <Link className="c-navbar__element">Usuario</Link>
        </nav>
    )
}

