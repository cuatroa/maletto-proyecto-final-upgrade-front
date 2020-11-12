import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserBookingPage() {
   
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/user").then((res) => {
            setUser(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="gallery">
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

            <h1>Register</h1>

           
        </div>
    );
}


