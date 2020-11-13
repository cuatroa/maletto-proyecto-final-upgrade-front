import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
<<<<<<< HEAD

export default function UserBookingPage() {
   
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/user").then((res) => {
=======
import UserPage from "../UserPage";
import Navbar from "./../../../shared/components/Navbar/Navbar"
import "./UserBookingPage.scss"

export default function UserBookingPage() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/location-space").then((res) => {
>>>>>>> develop
            setUser(res.data);
            console.log(res.data);
        });
    }, []);

    return (
<<<<<<< HEAD
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

           
=======
        <div className="container">
            <div className="container-noNavbar">
           <Link className="icon-atras" to="/user" > </Link>
           
            <div className="bookings">
                <h1>Tus reservas</h1>
                <hr />
            </div>

            <div className="div-image-title">
                {user.map((item, index) => {
                    return (
                        <div className="image-title" key={index}>
                            <h2>{item.title}</h2>
                            <img className="image-location"src={item.img} alt="" />
                            <Link className="icon-proximo" to =""/*"Poner redirección"*/> </Link>
                            <hr/>
                        </div>
                    );
                })}
            </div>
            </div>
            <Navbar />
>>>>>>> develop
        </div>
    );
}


