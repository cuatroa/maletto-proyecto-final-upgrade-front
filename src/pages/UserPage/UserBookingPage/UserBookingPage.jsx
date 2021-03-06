import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./../../../shared/components/Navbar/Navbar";
import "./UserBookingPage.scss";

export default function UserBookingPage() {
  const [user, setUser] = useState([]);
  const [person, setPerson] = useState([]);
  const apiUrl = "http://localhost:3001";
  const history = useHistory();

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => {
        setUser(data);
        axios
          .get(`http://localhost:3001/user/${data._id}`)
          .then((res) => {
            setPerson(res.data);
            console.log(res.data);
          });
      })
      .catch((err) => {
        console.log(err);
        history.push("/home");
      });
  }, []);

  return (
    <main>
      <div className="Space">
        <Link className="icon-atras" to="/user">
          {" "}
        </Link>
        <h1>Tus Reservas</h1>
        <section className="container-noNavbar">
          <hr className="hrInfo" />
          <div className="advertisements">
            {person.locationSpaces?.map((item, index) => {
              return (
                <div className="photoAdvertisements" key={index}>
                  <h2>{item.title}</h2>
                  <img className="photo-location" src={item.img} alt="" />
                  <Link className="icon-proximo" to="" /*"Poner redirección"*/>
                    {" "}
                  </Link>
                  <hr className="hrInfo" />
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div>
        <Navbar />
      </div>
    </main>
  );
}
