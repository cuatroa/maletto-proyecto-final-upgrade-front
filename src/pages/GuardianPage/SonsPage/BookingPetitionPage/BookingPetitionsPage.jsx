import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import UserPage from "../UserPage";
import Navbar from "../../../../shared/components/Navbar/Navbar";
import "./BookingPetitionsPage.scss";

export default function UserBookingPage() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/location-space").then((res) => {
            setUser(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <main>
            <div className="structureBooking">
                <Link className="icon-atras" to="/guardian" > </Link>
            </div>

            <div className="containerBooking">
                <h1>Petición de Reservas</h1>
                <section className="petitions">
                    <div>
                        <h3>{user.name} Laura</h3>
                        <p>Aquí irán los datos del date-time del home -- con props --</p>
                    </div>
                    <div className="btnBooking">
                        <button className="btnA">Aceptar</button>
                        <button className="btnB">Declinar</button>
                    </div>
                </section>
                <hr />
                <section className="petitions">
                    <div>
                        <h3>{user.name} Laura</h3>
                        <p>Aquí irán los datos del date-time del home -- con props --</p>
                    </div>
                    <div className="btnBooking">
                        <button className="btnA">Aceptar</button>
                        <button className="btnB">Declinar</button>
                    </div>
                </section>
                <hr />
                <section className="petitions">
                    <div>
                        <h3>{user.name} Laura</h3>
                        <p>Aquí irán los datos del date-time del home -- con props --</p>
                    </div>
                    <div className="btnBooking">
                        <button className="btnA">Aceptar</button>
                        <button className="btnB">Declinar</button>
                    </div>
                </section>
                <hr />


            </div>


            <div>
                <Navbar />
            </div >

        </main>


    );
}
