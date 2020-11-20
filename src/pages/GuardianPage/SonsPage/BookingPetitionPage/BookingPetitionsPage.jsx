import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import UserPage from "../UserPage";
import Navbar from "../../../../shared/components/Navbar/Navbar";
import "./BookingPetitionsPage.scss";

export default function UserBookingPage() {
    const [show, setShow] = useState({})
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/user").then((res) => {
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
                {user.length
        ? user.map((user, index) =>
            user.name && user.img ? (
                <section className={show[index] ? "petitionsDelete" : "petitions"}>
                    <div key={user._id}>
                        <h3>{user.name}</h3>
                        <img alt="" className="imgPetitions" src={user.img}></img>
                        <p>Nº de reserva: {user.createdAt}</p>
                    </div>
                    <div className="btnBooking">
                        <Link to="/guardian"><button className="btnA">Aceptar</button></Link>
                        <button onClick={() => setShow({...show, [index]:!show[index]})} className="btnB">Declinar</button>
                    </div>
                </section>
                
            ) : null
          )
        : null}

               
            </div>


            <div>
                <Navbar />
            </div >

        </main>


    );
}
