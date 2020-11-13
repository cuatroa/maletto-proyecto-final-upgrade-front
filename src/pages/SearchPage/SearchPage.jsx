import React, { useState, useRef, useCallback } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Navbar from "../../shared/components/Navbar/Navbar";
import "./SearchPage.scss";
import "mapbox-gl/dist/mapbox-gl.css";
import marker from "../../assets/icons/marker.png";





export default function SearchPage() {


    const [viewport, setViewport] = useState({
      latitude: 40.406288,
      longitude: -3.751542,
      width: "100vw",
      height: "60vh",
      zoom: 12,
    });



 
    return (
      <div className="general">
        <div>
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={
              "pk.eyJ1IjoiY29yaXRhaDQ0IiwiYSI6ImNraGMybzFtOTA2dzkydG1obG15Y2N5ejMifQ.gRgDwZ05972n1N3QPw1TpA"
            }
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
            mapStyle="mapbox://styles/coritah44/ckhffmpjs0g9e19md6lbpfbke"
          >
            <Marker latitude={40.404711} longitude={-3.750979}>
              <img src={marker} alt="" />
            </Marker>
            <Marker latitude={40.400553} longitude={-3.745668}>
              <img src={marker} alt="" />
            </Marker>
            <Marker latitude={40.3876} longitude={-3.748254}>
              <img src={marker} alt="" />
            </Marker>
          </ReactMapGL>
        </div>
        <div class="height-div"></div>
        <div class="card-a">
          <div class="slide">
            <a href="http://localhost:3000/search/info">
              <div class="card">
                <div
                  class="card__img"
                  style={{
                    backgroundImage:
                      "url(https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
                  }}
                ></div>
                <div class="card__content">
                  <h2 class="card__content-header">Sara García</h2>
                  <img
                    class="profile_img"
                    src="https://www.betrendsetter.com/wp-content/uploads/2017/01/shag-with-waves-round-face-2.jpg"
                    alt=""
                  />
                  <div class="card_stars">
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                    <span class="icon-star-full"></span>
                    <span class="icon-star-empty"></span>
                    <span class="icon-star-empty"></span>
                  </div>
                  <p class="card__content-paragraph">3 minutos a pie</p>
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
