import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './../../LoginPage.scss'
import  "../../../../index.scss";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Register() {

  const apiUrl = 'http://localhost:3001';

  const { handleSubmit, register } = useForm();

  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const history = useHistory();


  const date = new Date();
  const currentYear = date.getFullYear();
  date.setFullYear(currentYear - 18);
  const years18 = date.toISOString().slice(0, 10);


  const registerUser = (values) => {
    axios
      .post(`${apiUrl}/auth/register`, values, { withCredentials: true })
      // Axios returns { data: API_RESPONSE } and our API response has a .data property too
      .then(({ data }) => {
        setUser(data.data);
        history.push("/home");
      })
      .catch(console.log);
  };

  const onSubmit = (values) =>
  registerUser(values);


  return (
    <div> 
      <div className="">
        <p className="text-large">Únete a MALETTO y disfruta de sus ventajas</p>
      </div>
      <div className="p-login-register-social">
        <a
          className="fb p-login-register__btn"
          href="http://localhost:3000/login/facebook"
        >
          <i className="icon-facebook"></i> Facebook
        </a>
        <a
          className="google p-login-register__btn"
          href="http://localhost:3000/register/google"
        >
          <img
            alt="google"
            className="google-icon"
            src="https://img.icons8.com/color/48/000000/google-logo.png"
          />
          Google
        </a>
      </div>
      <div className="">
        <p className="text-style-small">o utiliza tu correo electrónico</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-login-register__form">
        <label className="p-login-register__label" htmlFor="email">
          Dirección de correo electrónico
        </label>
        <input
          className="p-login-register__input"
          id="email"
          name="email"
          type="email"
          placeholder="john@gmail.com"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />

        <label className="p-login-register__label" htmlFor="name">
          Nombre
        </label>
        <input
          className="p-login-register__input"
          id="name"
          name="name"
          type="text"
          placeholder="John"
          ref={register({ required: true, min: 1 })}
        />

        <label className="p-login-register__label" htmlFor="lastName">
          Apellido
        </label>
        <input
          className="p-login-register__input"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Doe"
          ref={register({ required: true, min: 1 })}
        />

        <label className="p-login-register__label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="p-login-register__input"
          id="password"
          name="password"
          type="password"
          placeholder="********"
          ref={register({ required: true, min: 1 })}
        />

        <label className="p-login-register__label" htmlFor="birthDate">
          Fecha de nacimiento
        </label>
        <input
          className="p-login-register__input"
          id="birthDate"
          name="birthDate"
          type="date"
          max={years18}
          ref={register({ required: true, min: 1 })}
        />

        <div className="p-login-register-ads">
          <input id="ads" name="ads" type="checkbox"  />
          <label className="p-login-register__label-check" htmlFor="ads">
            Quiero recibir consejos sobre como gestionar mi equipaje, ofertas,
            novedades y otro correos electrónicos de Maleteo
          </label>
        </div>
        <button type="submit" className="c-page__button1">
          Registrarse
        </button>
      </div>
    </form>
  </div>
  );
}
