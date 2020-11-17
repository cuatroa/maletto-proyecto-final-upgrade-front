import React, { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
  const apiUrl = "http://localhost:3001";
  const [locations, setLocations] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const name = query.get("name");

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      // Si hay name => http://localhost:xxxx/location-space?name=madrid
      .get(`${apiUrl}/location-space?${name ? `name=${name}` : ""}`, {
        withCredentials: true,
      })
      .then(({ data }) => {
        // Seteamos las localizaciones en el state para pintarlas en el mapa
        console.log(data);
        setLocations(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const [viewport, setViewport] = useState({
    latitude: 40.406288,
    longitude: -3.751542,
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

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiY29yaXRhaDQ0IiwiYSI6ImNraGMybzFtOTA2dzkydG1obG15Y2N5ejMifQ.gRgDwZ05972n1N3QPw1TpA";

  return (
    <div className="general">
      <div style={{ height: "60vh" }}>
        <div
          ref={geocoderContainerRef}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
        />
        {/* {user[0] && user[0].locationSpaces && user[0].locationSpaces[0] && (    */}
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
            // inputValue="madrid"
            // onLoading={(value) => getResponse(value)}
            // localGeocoder:{(value) => getResponse(value)}
          />
          {/* <Popup
            longitude={-3.750979}
            latitude={40.404711}
            closeButton={true}
            closeOnClick={true}
            onClose={() => {
              setUser(null);
            }}
          >
            <h1>{user[0].name}</h1>
            Hi there! 👋
          </Popup> */}

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
      {/* <h1>{user[0].locationSpaces[0].latitude}</h1>
       <h1>{user[0].name}</h1> */}
      <div className="height-div"></div>
      <div className="card-a">
        <div className="slide">
          <a href="http://localhost:3000/search/info">
            <div className="card">
              <div
                className="card__img"
                style={{
                  backgroundImage:
                    "url(https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
                }}
              ></div>
              <div className="card__content">
                <h2 className="card__content-header">Sara García</h2>
                <img
                  className="profile_img"
                  src="https://www.betrendsetter.com/wp-content/uploads/2017/01/shag-with-waves-round-face-2.jpg"
                  alt=""
                />
                <div className="card_stars">
                  <span className="icon-star-full"></span>
                  <span className="icon-star-full"></span>
                  <span className="icon-star-full"></span>
                  <span className="icon-star-empty"></span>
                  <span className="icon-star-empty"></span>
                </div>
                <p className="card__content-paragraph">3 minutos a pie</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      <Navbar />
    </div>
  );
}
