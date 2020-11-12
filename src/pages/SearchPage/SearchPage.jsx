import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Navbar from "../../shared/components/Navbar/Navbar";
import "./SearchPage.scss";


export default function SearchPage() {


    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "100vw",
        height: "60vh",
        zoom: 6,
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
                    mapStyle="mapbox://styles/coritah44/ckhcn7gg01n4a19o4kembizsi"
                ></ReactMapGL>
            </div>
            <ul>
                <li class="card">
                    <a
                        href="#"
                        class="featured-image"
                        style={{
                            backgroundImage:
                                "url(https://images.pexels.com/photos/5411784/pexels-photo-5411784.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)",
                        }}
                    />
                    <article class="card-body">
                        <header>
                            <a href="utilidata-national-governors-association-meeting">
                                <div class="title">
                                    <h3>Sara García</h3>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT621TlX12PE1LjWn4Djl1ZLj1-i0dR0I9OxA&usqp=CAU"
                                        alt=""
                                    />
                                    <div>
                                        <span class="icon-star-full"></span>
                                        <span class="icon-star-full"></span>
                                        <span class="icon-star-full"></span>
                                        <span class="icon-star-empty"></span>
                                        <span class="icon-star-empty"></span>
                                    </div>
                                </div>

                                <p class="meta">
                                    <span class="author">Utilidata</span>
                                    <span> | </span>
                                    <time class="updated" datetime="" itemprop="datePublished">
                                        July 27, 2017
                  </time>
                                </p>
                            </a>
                        </header>
                    </article>
                </li>
            </ul>

            {/* <div className="right-action">
        <div className="text">
          <h4>titulo1</h4>
        </div>
        <div>
          <span className="icon-star-full"></span>
        </div>
      </div> */}

            <br />
            <br />
            <br />
            <br />
            <br />

            <Navbar />
        </div>
    );
}
