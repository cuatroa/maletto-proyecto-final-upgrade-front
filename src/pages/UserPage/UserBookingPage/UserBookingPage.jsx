import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./../../../shared/components/Navbar/Navbar";
import "./UserBookingPage.scss";

export default function UserBookingPage() {
  const [user, setUser] = useState({});
  const [usuario, setUsuario] = useState({});
  const apiUrl = "http://localhost:3001";
  const history = useHistory();

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => {setUser(data)
       console.log(data)})
      .catch((err) => {
        console.log(err);
        history.push("/home");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrl}/user/${user._id}`, { withCredentials: true })
      .then((res) => {
        setUsuario(res.data)
        console.log("Usuario editado:", res.data);
      })
      .catch(console.log);
  }, []);


  return (
    <div className="container">
      <div className="container-noNavbar">
        <Link className="icon-atras icono-user-booking" to="/user">
          {" "}
        </Link>
        <div className="bookings">
          <h1>Tus reservas</h1>
          <hr />
        </div>
        <h1>{usuario.lastName}</h1>
        <div className="div-image-title">
          {usuario.length
            ? usuario.bookings?.map((usuario) =>
                usuario.name && usuario.bookings ? (
                  <div className="image-title" key={user._id}>
                    <div>{usuario.bookings[0]}</div>
                    <hr />
                  </div>
                ) : null
              )
            : null}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
