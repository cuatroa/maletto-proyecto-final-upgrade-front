import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./../../../../shared/components/Navbar/Navbar";
import "./GuardianSpacesPage.scss"

export default function GuardianSpacesPage() {

    const [user, setUser] = useState([]);
    const [person, setPerson] = useState([]);
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
        axios.get(`http://localhost:3001/user/${user._id}`).then((res) => {
            setPerson(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <main>
            <div className="Space">
                <Link className="icon-atras" to="/guardian" > </Link>
                <h1>Tus anuncios</h1>
                <section className="container-noNavbar">
                    <hr />
                    <div className="advertisements">
                        {person.locationSpaces?.map((item, index) => {
                            return (
                                <div className="photoAdvertisements" key={index}>
                                    <h2>{item.title}</h2>
                                    <img className="photo-location" src={item.img} alt="" />
                                    <Link className="icon-proximo" to=""/*"Poner redirección"*/> </Link>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                </section>
                <div className="otherSpace">
                    <h2>Añade otro espacio</h2>
                    <Link className="icon-plus " to="/guardian/publish"> </Link>
                </div>
            </div>


            <div>
                <Navbar />
            </div>

        </main>
    );
}


