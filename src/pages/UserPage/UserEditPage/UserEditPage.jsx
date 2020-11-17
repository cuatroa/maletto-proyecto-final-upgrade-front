import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./../../../shared/components/Navbar/Navbar";
import "./UserEditPage.scss";
import { useForm } from "react-hook-form";

export default function UserEditPage() {
  const { handleSubmit, register } = useForm();

  const [user, setUser] = useState([]);
  const apiUrl = 'http://localhost:3001';

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => setUser(data))
      .catch(console.log);
  }, []);

  const onSubmit = (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      if (typeof values[key] !== "undefined") {
        formData.append(key, values[key]);
      }
    });
    console.log(formData);

    axios
      .put(`http://localhost:3001/user/${user._id}`, formData, {
        headers: {'Content-Type': 'multipart/form-data' }
      })
      .then((res) => {
        console.log('Usuario editado:', res.data);
      })
      .catch(console.log);
  };


  return (
    <div className="container">
      <div className="container-noNavbar">
      <Link className="icon-atras" to="/user" >  </Link>
      
      <div className="div-image-title">
        <div className="image-title">
          <div>
            <h2>Editar perfil</h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

          <div>
          <div>
              <label htmlFor="name"><h3>Inserta nuevo nombre</h3></label>
              <input type="text" name="name" id="name" placeholder="..." className="input-publish" ref={register({required: true, min: 1})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="lastName"><h3>Inserta nuevo apellido</h3></label>
              <input type="text" name="lastName" id="lastName" placeholder="..." className="input-publish" ref={register({required: true, min: 1})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="img"><h3>Foto de perfil</h3></label>
              <input type="file" name="img" id="img" placeholder="" className="input-publish__img" ref={register()}/>
              <hr />
            </div>
            <div>
              <label htmlFor="address"><h3>Dirección</h3></label>
              <input type="text" name="address" id="address" placeholder="Calle Gran Vía..." className="input-publish" ref={register({required: true, min: 1})}/>
              <hr />
            </div>
            <div>
              <label htmlFor="birthDate"><h3>Fecha de nacimiento</h3></label>
              <input type="date" name="birthDate" id="birthDate" placeholder="" className="input-publish__date" ref={register({required: true, min: 1})}/>
              <hr />
            </div>

          </div>
          <div className="container-button-publish">
          <button type="submit" className="button-publish">Guardar</button>
          </div>
          </form>
        </div>
      </div>
      </div>
      <Navbar />
    </div>
  );
}