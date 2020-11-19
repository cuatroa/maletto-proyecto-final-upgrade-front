import React, { useState, useEffect } from "react";
import "./BookingInfoPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function BookingInfoPage() {
  const apiUrl = "http://localhost:3001";

  const [user, setUser] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => setUser(data))
      .catch((err) => {
        console.log(err);
        history.push("/home");
      });
      
  }, []);



useEffect(() => {
  axios
    .get(
      `${apiUrl}/user/${user._id}`,
      { withCredentials: true },
      
    )
    .then((res) => {
      console.log("Usuario editado:", res.data);
    })
    .catch(console.log);
}, []);

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <img src={user.img} alt="" />

        {/* {location.map.img((item, index) => (
            <div key={index}>
              // <img src={item.img} alt="" />
            </div>
          ))} */}
      </Carousel>
    </div>
  );
}
