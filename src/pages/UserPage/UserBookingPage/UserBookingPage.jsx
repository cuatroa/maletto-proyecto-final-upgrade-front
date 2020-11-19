import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
// import UserPage from "../UserPage";
import Navbar from "./../../../shared/components/Navbar/Navbar";
import "./UserBookingPage.scss";

export default function UserBookingPage() {
  const [user, setUser] = useState([]);
  const _id = useParams()._id;

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + `/user/${_id}`).then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
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
        <h1>{user.name}</h1>
        <div className="div-image-title">
          {/* {user.length
            ? user.map((user) =>
                user.name && user.bookings ? (
                  <div className="image-title" key={user._id}>
                    <div>{user.bookings._id}</div>
                    <hr />
                  </div>
                ) : null
              )
            : null} */}
        </div>
      </div>

      <Navbar />
    </div>
  );
}
