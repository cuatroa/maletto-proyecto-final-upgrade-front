import React, { useState, useEffect } from "react";
import "./BookingInfoPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


export default function BookingInfoPage() {

   const _id = useParams()._id;

   const [location, setLocation] = useState([]);

   useEffect(() => {
     axios
       .get(process.env.REACT_APP_API_URL + `/location-space/${_id}`)
       .then((res) => {
         console.log(res.data);
         setLocation(res.data);
       });
   }, []);
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <img src={location.img} alt="" />

        {/* {location.map.img((item, index) => (
            <div key={index}>
              // <img src={item.img} alt="" />
            </div>
          ))} */}
      </Carousel>
    </div>
  );
}
