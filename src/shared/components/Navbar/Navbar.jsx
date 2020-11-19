
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {

  const apiUrl = 'http://localhost:3001';

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => setUser(data))
      .catch(console.log);
  }, []);

  return (
    <nav className="c-navbar">
      <Link className="c-navbar__element icon-home" to="/home"></Link>
      <Link className="c-navbar__element icon-search" to="/search"></Link>
      <Link className="c-navbar__element icon-bubbles4" to="/chat"></Link>
      <Link className="c-navbar__element icon-user" to={ user.guardian ? "/guardian" : "/user"}></Link>
    </nav>
  );
}
