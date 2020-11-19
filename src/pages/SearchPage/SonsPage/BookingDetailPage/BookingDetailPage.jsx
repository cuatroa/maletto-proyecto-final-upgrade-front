/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BookingDetailPage.scss";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import SearchPage from "../../SearchPage";

export default function BookingDetailPage() {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const _id = useParams()._id;
  const [location, setLocation] = useState([]);
  // const amount = query.get("amount");

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
  };

  return (
    <div>
      {/* <h1 {this.props.amount}></h1> */}
      {/* <SearchPage amount={this.props.amount} /> */}
      <Link className="icon-atras" onClick={() => history.goBack()}>
        {" "}
      </Link>
      <main className="structureDetailPage">
        <h1 className="titleDetail">Detalles de tu Reserva</h1>
        <section>
          <table>
            <tbody>
              <tr className="details">
                <td className="infoTab">Llegada</td>
                <td className="infoTab">Recogida</td>
                <td className="infoTab">Equipaje</td>
              </tr>
              <tr className="details">
                <td className="infoData">30 de Julio</td>
                <td className="infoData">2 de Agosto</td>
                {/* <td className="infoData">{amount}</td> */}
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <hr />
          <table>
            <tr>
              <th className="detailsInfo">Gastos de gestión:</th>
              <td>Item 1</td>
            </tr>
            <tr>
              <th className="detailsInfo">Servicio asegurado:</th>
              <td>Item 4</td>
            </tr>
            <tr>
              <th className="detailsInfo">Total:</th>
              <td>Item 7</td>{" "}
            </tr>
          </table>
          <hr />
        </section>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="citySearch" className="ubication">
            {/* <h3>city</h3> */}
            <input
              type="text"
              name="locationSpace"
              id="locationSpace"
              value={location._id}
              // placeholder="Calle Gran Vía..."
              className=""
              ref={register({ required: true, min: 1 })}
            />
          </label>
          <Link to="/booking/complete">
            <button className="longbutton1">Reservar</button>
          </Link>
        </form>
      </main>
    </div>
  );
}
