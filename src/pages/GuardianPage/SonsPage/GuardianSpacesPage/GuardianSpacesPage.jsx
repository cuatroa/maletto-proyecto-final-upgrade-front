import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import UserPage from "../UserPage";
import Navbar from "./../../../../shared/components/Navbar/Navbar";
import "./GuardianSpacesPage.scss"

export default function GuardianSpacesPage() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/location-space").then((res) => {
            setUser(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="container">
            <div className="container-noNavbar">
                <Link className="icon-atras" to="/guardian" > </Link>
                <h1>Tus anuncios</h1>
                <hr />
                <div className="advertisements">
                    {user.map((item, index) => {
                        return (
                            <div className="photoAdvertisements" key={index}>
                                <h2>{item.title}</h2>
                                <img className="image-location" src={item.img} alt="" />
                                <Link className="icon-proximo" to=""/*"Poner redirección"*/> </Link>
                                <hr />
                            </div>
                        );
                    })}
                </div>
                <h2>Añade otro espacio</h2>
                <Link className="icon-plus " to="/guardian/publish"> </Link>
            </div>
            <div>
                <Navbar />
            </div>

        </div>
    );
}


