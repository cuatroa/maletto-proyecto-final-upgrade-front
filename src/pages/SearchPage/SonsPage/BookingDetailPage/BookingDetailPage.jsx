import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BookingDetailPage.scss";
import Navbar from "../../../../shared/components/Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function BookingDetailPage() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
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

  const onSubmit = (values) => {  
    axios
      // .post(process.env.REACT_APP_API_URL + `/booking`, values)
      .post(`http://localhost:3001/booking`, values)
      .then((res) => {
        console.log("Location nueva:", res.data);
      })
      .catch(console.log);
  }
  




  return (
    <div className="p-all">
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <span className="icon-atras p-returnback__iconback"></span>
      </button>

      <div>
        <h1 className="p-title">Detalles de tu Reserva</h1>
      </div>
      <div className="p-header">
        <div className="p-details">
          <h2 className="p-headers2">Llegada</h2>
          <h2 className="p-headers2">Recogida</h2>
          <h2 className="p-headers2">Equipaje</h2>
        </div>
        <div className="p-details">
          <p className="p-text2">30 de Julio</p>
          <p className="p-text2">30 de Julio</p>
          <p className="p-text2">2 equipajes</p>
        </div>
      </div>
      <div>
        <div className="p-table">
          <div className="p-table__left">
            <p className="p-text2" id="value1" type="number">
              Primeras 24 horas 6,00 x 2 equipajes
            </p>
            <p className="p-text2">Gastos de gestión</p>
            <p className="p-text2">Servicio asegurado hasta 100€</p>
            <p className="p-text2">Total</p>
          </div>
          <div className="p-table__right"> </div>

          <p className="p-table__right__text3__1"> 10 €</p>
          <p className="p-table__right__text3__2"> 2 €</p>
          <p className="p-table__right__text3__3">Gratis</p>
          <p className="p-table__right__text3__4"> 12 € </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="city">
            <h3>city</h3>
          </label>
          <input
            type="text"
            name="locationSpace"
            id="locationSpace"
            value={location._id}
            className="transparent-input"
            ref={register({ required: true, min: 1 })}
          />
          <hr />
        </div>
        <div className="p-bot">
          <Link to="/booking/complete">
            <button className="longbutton1">Reservar</button>
          </Link>
        </div>
      </form>
      <h1>{location.title}</h1>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
