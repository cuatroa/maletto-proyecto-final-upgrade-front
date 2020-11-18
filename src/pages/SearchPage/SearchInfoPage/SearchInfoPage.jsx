import React, { useState, useEffect } from "react";
import "./SearchInfoPage.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function SearchInfoPage() {

  const { handleSubmit, register } = useForm();
 

  const _id = useParams()._id;

  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + `/location-space/${_id}`).then((res) => {
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
