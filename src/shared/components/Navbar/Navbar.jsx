
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    return (
        <nav>
             <Link className="" to="/">Home</Link>
             <Link className="" to="/search">Buscar</Link>
             <Link className="" to="/chat">Chat</Link>
             <Link className="" to="/user">Usuario</Link>
        </nav>
    )
}

