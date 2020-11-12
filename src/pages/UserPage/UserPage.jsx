import React, { useEffect, useState } from "react";
// import Navbar from '../../shared/components/Navbar/Navbar';
import { Link } from "react-router-dom";
import axios from "axios";


export default function UserPage() {
  const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/user").then((res) => {
            setUser(res.data);
            console.log(res.data);
        });
    }, []);
  return (
    <div>
      <ul>
          {user.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        
                        <img src={'http://localhost:3001' + item.img} alt="Imagen no disponible" />
                    </div>
                );

            })}
            </ul>
      <div className="c-page__bottom">
          <Link to="/user-booking-page" >
            <button className=""></button>
          </Link>
      </div>    
      
      <h1>Tus reservas</h1>
      <h2>{item.title}</h2>

      {/* <Navbar /> */}
    </div>
  );
}
