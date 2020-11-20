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
  const apiUrl = "http://localhost:3001";
  const [user, setUser] = useState(null);
  // const amount = query.get("amount");

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => setUser(data))
      .catch((err) => {
        console.log(err);
        // Llevo al user a la home en caso de que no esté logeado
        history.push("/home");
      });
  }, []);

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
      .post(`http://localhost:3001/booking`, values, { withCredentials: true })
      .then((res) => {
        console.log("Booking nueva:", res.data);
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
                <td className="infoData">2 </td>
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
              <td>Item 7</td>
            </tr>
          </table>
          <hr />
        </section>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="locationSpace" className="ubication">
            {/* <h3>city</h3> */}
            <input
              type="text"
              name="locationSpace"
              id="locationSpace"
              value={location._id}
              className="transparent-input"
              ref={register({ required: true, min: 1 })}
            />
          </label>

          <div className="bottom-btn">
            <button type="submit" className="longbutton1">
              Reservar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
