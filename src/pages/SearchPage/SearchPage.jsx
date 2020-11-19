import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../shared/components/Navbar/Navbar";
import "./SearchPage.scss";
import marker from "../../assets/icons/marker.png";
import Geocoder from "react-map-gl-geocoder";
import MapGL, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const locationCoords = {
  madrid: {
    latitude: 40.416761,
    longitude: -3.703794,
  },
  barcelona: {
    latitude: 41.386957,
    longitude: 2.171227,
  },
};

export default function SearchPage() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [locations, setLocations] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");
  const date = query.get("date");

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      // Si hay name => http://localhost:xxxx/location-space?name=madrid
      .get(`${apiUrl}/location-space?${name ? `name=${name}` : ""}`, {
        withCredentials: true })

      .then(({ data }) => {
        // Seteamos las localizaciones en el state para pintarlas en el mapa
        console.log(data);
        setLocations(data);
        console.log("hiiii****")
      })
      .catch((err) => {
        console.log("ERROR****")
        console.log(err);
      });
  },
  
  []);




  

  const locationToCenter = locationCoords[name] || locationCoords.madrid;
  const [viewport, setViewport] = useState({
    ...locationToCenter,
    width: "100vw",
    height: "60vh",
    zoom: 12,
  });

  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

  return (
    <div className="general">
      <div style={{ height: "60vh" }}>
        <div
          ref={geocoderContainerRef}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        />
        <MapGL
          ref={mapRef}
          {...viewport}
          width="100%"
          height="100%"
          // marker={(marker.options.color : "orange")}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/coritah44/ckhffmpjs0g9e19md6lbpfbke"
        >
          <Geocoder
            mapRef={mapRef}
            containerRef={geocoderContainerRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
            placeholder="buscar"
          />

          {/* {locations.length
            ? locations.map((location) =>
                location.latitude && location.longitude ? (
                  <Popup
                    key={location._id}
                    latitude={Number(location.latitude)}
                    longitude={Number(location.longitude)}
                    closeButton={true}
                    closeOnClick={true}
                    onClose={() => {
                      setLocations(null);
                    }}
                  >
                    <p>{location.title}</p>
                    <img src={marker} alt="" />
                  </Popup>
                ) : null
              )
            : null} */}

          {locations.length
            ? locations.map((location) =>
              location.latitude && location.longitude ? (
                <Marker
                  key={location._id}
                  latitude={Number(location.latitude)}
                  longitude={Number(location.longitude)}
                >
                  <img src={marker} alt="" />
                </Marker>
              ) : null
            )
            : null}
        </MapGL>
      </div>

      <br />

      {locations.length
        ? locations.map((location) =>
          location.title && location.img ? (
            <div key={location._id}>
              <div className="card-a">
                <div className="slide">
                  <Link to={"search/" + location._id}>
                    <div className="card">
                      <div
                        className="card__img"
                        style={{ backgroundImage: `url(${location.img})` }}
                      ></div>
                      <div className="card__content">
                        <h2 className="card__content-header">
                          {location.user.name} {location.user.lastName}
                        </h2>
                        <img
                          className="profile_img"
                          src={location.user.img}
                          alt=""
                        />
                        <div className="card_stars">
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-full"></span>
                          <span className="icon-star-empty"></span>
                          <span className="icon-star-empty"></span>
                        </div>
                        <p className="card__content-paragraph">
                          {location.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : null
        )
        : null}
      <br />
      <br />
      <br />
      <br />
      <Navbar />
    </div>
  );
}
