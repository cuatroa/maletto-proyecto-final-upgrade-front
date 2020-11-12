import React, { useState, useEffect } from "react";
import Navbar from "../../../shared/components/Navbar/Navbar";
import "./SearchInfoPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function SearchInfoPage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="general">
      <Carousel
        autoPlay
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="https://images.pexels.com/photos/5196650/pexels-photo-5196650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/3915707/pexels-photo-3915707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
      </Carousel>

      <div className="row">
        <div className="col">
          <h2>
            <b>Normas de Sara</b>
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
              <input type="checkbox" id="chck3" />
              <label className="tab-label" for="chck3">
                Contactar con tu guardián
              </label>
              <div className="tab-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card-info">
          <div>
            <img
              src="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
              alt=""
            />
          </div>
          <div className="card-text">
            <h2>
              <b>Robert</b>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              assumenda delectus? Fuga sed voluptate iure eos dolorem ratione
              dignissimos cupiditate error. Saepe quas nemo sit beatae sint
              ducimus voluptatibus necessitatibus.
            </p>
          </div>
        </div>
        <div className="hrname">
          {/* <hr /> */}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <Navbar />
    </div>
  );
}
