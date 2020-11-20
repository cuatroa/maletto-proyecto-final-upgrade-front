import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import UserPage from "../UserPage";
import Navbar from "../../../../shared/components/Navbar/Navbar";
import "./BookingPetitionsPage.scss";

export default function UserBookingPage() {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/booking").then((res) => {
            setBooking(res.data);
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
                        <h3>{booking[0].user.name} {booking[0].user.lastName} </h3>
                        <img alt="" className="imgPetitions" src={booking[0].user.img}></img>
                        <p>Nº de reserva: {booking[0]._id}</p>
                    </div>
                    <div className="btnBooking">
                        <Link to="/guardian"><button className="btnA">Aceptar</button></Link>
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
