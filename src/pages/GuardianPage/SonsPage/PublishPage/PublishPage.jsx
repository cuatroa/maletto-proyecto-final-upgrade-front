import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./../../../../shared/components/Navbar/Navbar";
import "./PublishPage.scss";
import { useForm } from "react-hook-form";

const apiUrl = 'http://localhost:3001';

export default function PublishPage() {
  const { register, handleSubmit } = useForm();

  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => setUser(data))
      .catch((err) => {
        console.log(err);
        history.push('/home');
      });
  }, []);

  const onSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      if (typeof values[key] !== 'undefined') {
        formData.append(key, values[key]);
      }
    });
    console.log(formData);

    axios
      .post(`${apiUrl}/location-space`,  values, { withCredentials: true })
      .then((res) => {
        console.log('Location nueva:', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="container">
      <div className="container-noNavbar">
      <Link className="icon-atras" to="/user">
          {' '}
        </Link>
      
      {/* {user ? ( */}
      <div className="div-image-title">
        <div className="image-title">
          <div>
            <h2>Descríbenos tu espacio</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

          <div>
          <div>
              <label htmlFor="type"><h3>Especifica tu propiedad</h3></label>
              <select type="text" name="type" id="type" className="input-publish input-select" ref={register({required: true, min: 1})}>
                <option value="casa">Casa</option>
                <option value="trastero">Trastero</option>
                <option value="trastero">Oficina</option>
                <option value="hotel">Hotel</option>
                <option value="establecimiento">Establecimiento</option>
              </select>
              <hr />
            </div>
            <div>
              <label htmlFor="location"><h3>Ubicación</h3></label>
              <input type="text" name="location" id="location" placeholder="Calle Gran Vía..." className="input-publish" ref={register({required: true, min: 1})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="city"><h3>Ciudad</h3></label>
              <input type="text" name="city" id="city" placeholder="Madrid..." className="input-publish" ref={register({required: true, min: 1})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="img"><h3>Foto</h3></label>
              <input type="file" name="img" id="img" placeholder="" className="input-publish__img" ref={register({})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="title"><h3>Título</h3></label>
              <input type="text" name="title" id="title" placeholder="El maletero de John..." className="input-publish" ref={register({required: true, min: 1})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="availability"><h3>Horario</h3></label>
              <input type="datetime-local" name="availability" id="availability" placeholder="" className="input-publish" ref={register({required: true, min: 1})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="capacity"><h3>Disponibilidad</h3></label>
              <select type="number" name="capacity" id="capacity" className="input-publish input-select" ref={register()}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <hr />
            </div>
          </div>
          <div className="container-button-publish">
          <button type="submit" className="button-publish">Publicar</button>
          </div>
          </form>
        </div>
      </div>
      {/* ) : null} */}
      </div>
      <Navbar />
    </div>
  );
}
