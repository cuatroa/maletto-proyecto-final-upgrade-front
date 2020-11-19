import React, { useState, useRef, useCallback, useEffect } from "react";
import "./SearchInfoPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import MapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import marker from "../../../assets/icons/marker.png";

export default function SearchInfoPage() {
  const { handleSubmit, register } = useForm();
  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

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

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "60vh",
    zoom: 12,
    //  latitude: {location.latitude},
    //  longitude: {location.longitude}
    //  latitude: 40,
    //  longitude: -3
  });

  return (
    <div>
      {/* <h1>{Number(location.longitude)}</h1> */}
      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={location.img} alt="" />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/139303/pexels-photo-139303.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>

        {/* {location.map.img((item, index) => (
            <div key={index}>
              // <img src={item.img} alt="" />
            </div>
          ))} */}
      </Carousel>

      <div className="card-a">
        <div className="slide">
          <div className="card1">
            <div className="card__info">
              <h4>{location.title}</h4>
              <h5>{location.location}</h5>
              <p className="uppercase">{location.city}</p>
            </div>
            <div className="card__content">
              <h2 className="card__content-header">
                {/* {location.user[0].name} {location.user[0].lastName} */}
              </h2>
              {/* <img className="profile_img" src={location.user.img} alt="" /> */}

              <div className="card_stars">
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-full"></span>
                <span className="icon-star-empty"></span>
                <span className="icon-star-empty"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        <div>
          <h2>
            <b>Normas de {location.title}</b>
          </h2>
          <div className="tabs">
            <div className="tab">
              <input type="checkbox" id="chck1" />
              <label className="tab-label" for="chck1">
                Cómo debe ser tu maleta
              </label>
              <hr />
              <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
                reiciendis!
              </div>
            </div>

            <div className="tab">
              <input type="checkbox" id="chck2" />
              <label className="tab-label" for="chck2">
                Tipo de cancelación de reserva
              </label>
              <hr />
              <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>

            <div className="tab">
              <input type="submit" value="http://localhost:3000/chat" />
              <a href="http://localhost:3000/chat">
                <label className="tab-label" for="chck3">
                  Contactar con tu guardián
                </label>
              </a>
              <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "30vh" }}>
        <MapGL
          ref={mapRef}
          {...viewport}
          width="100%"
          height="100%"
          // longitude={Number(location.longitude)}
          // latitude={Number(location.latitude)}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/coritah44/ckhffmpjs0g9e19md6lbpfbke"
        >
          {/* <Marker
            key={location._id}
            latitude={Number(location.latitude)}
            longitude={Number(location.longitude)}
          >
            <img src={marker} alt="" />
          </Marker> */}
        </MapGL>
      </div>

      <div className="row-width">
        <h2>
          <b>Reseñas</b>
        </h2>
      </div>
      <div>
        <div className="card-info">
          <div>
            <img
              src="https://images.pexels.com/photos/3761521/pexels-photo-3761521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="card-text">
            <h3>
              <b>Robert</b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              assumenda delectus? Fuga sed voluptate iure eos dolorem ratione
              dignissimos cupiditate error. Saepe quas nemo sit beatae sint
              ducimus voluptatibus necessitatibus.
            </p>
          </div>
        </div>
        <div className="hrname">
          <hr />
        </div>

        <div className="card-info">
          <div>
            <img
              src="https://jimsravesnrants.files.wordpress.com/2017/06/rhiannon.jpg?w=584"
              alt=""
            />
          </div>
          <div className="card-text">
            <h3>
              <b>Tina</b>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              assumenda delectus? Fuga sed voluptate iure eos dolorem ratione
              dignissimos cupiditate error. Saepe quas nemo sit beatae sint
              ducimus voluptatibus necessitatibus.
            </p>
          </div>
        </div>
        <div className="hrname">
          <hr />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div className="banda-reserva">
        <div className="reserva0">
          <h3>
            TOTAL <b className="boldito">12€</b>
          </h3>
        </div>
        <section className="reserva">
          <Link to={"/booking/" + location._id}>
            <button className="reservaBtn">Reservar ahora</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
