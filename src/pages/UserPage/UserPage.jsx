
// import Navbar from '../../shared/components/Navbar/Navbar';// 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function UserPage() {
  return (
    <div>
      <div className="c-page__bottom">
          <Link to="/user-page">
            <button className="">Empezar ya</button>
          </Link>
      </div>    
      <h1>página del user</h1>
     
    </div>
  );
}
