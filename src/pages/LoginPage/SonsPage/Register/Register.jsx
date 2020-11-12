import React from "react";
import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { API, updateAPIToken } from "../../shared/services/api";
import './../../LoginPage.scss'
import  "../../../../index.scss";
// import IsLoggedContext from "../../Contexts/IsLoggedContext";

export default function Register() {
  return (
    <form>
      <div className="">
        <p className="text-large">Únete a Maleteo y disfruta de sus ventajas</p>
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
      <div>
        <p className="error"> </p>
      </div>
      <div className="p-login-register__form">
        <label className="p-login-register__label" htmlFor="emailreg">
          Dirección de correo electrónico
        </label>
        <input
          className="p-login-register__input"
          id="email"
          name="email"
          type="email"
          placeholder="carlos@gmail.com"
          // ref={register({
          //   required: true,
          //   pattern: {
          //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          //     message: "invalid email address",
          //   },
          // })}
        />

        <span className="error">El email es necesario</span>

        <span className="error">Email inválido</span>

        <label className="p-login-register__label" htmlFor="namereg">
          Nombre
        </label>
        <input
          className="p-login-register__input"
          id="name"
          name="name"
          type="text"
          placeholder="Carlos"
          // ref={register({
          //   required: true,
          // })}
        />

        <span className="error">Nombre es necesario</span>

        <label className="p-login-register__label" htmlFor="surnamereg">
          Apellido
        </label>
        <input
          className="p-login-register__input"
          id="surname"
          name="surname"
          type="text"
          placeholder="Pérez González"
          // ref={register({
          //   required: true,
          // })}
        />

        <span className="error">Apellidos es necesario</span>

        <label className="p-login-register__label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="p-login-register__input"
          id="password"
          name="password"
          type="password"
          placeholder="********"
          // ref={register({
          //   required: true,
          //   pattern: {
          //     value: /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
          //     message:
          //       "La contraseña debe tener entre 8 y 16 dígitos, y al menos, 1 mayúscula, 1 minúscula y 1 dígito.",
          //   },
          // })}
        />

        <span className="error">Contraseña necesaria</span>

        <span className="error">
          La contraseña debe tener entre 8 y 16 dígitos, y al menos, 1
          mayúscula, 1 minúscula y 1 dígito.
        </span>

        <label className="p-login-register__label" htmlFor="birthdatereg">
          Fecha de nacimiento
        </label>
        <input
          className="p-login-register__input"
          id="birthdate"
          name="birthdate"
          type="date"
          max=""
          // ref={register({
          //   required: true,
          //   // max: {date}
          // })}
        />

        <span className="error">Fecha de nacimiento es necesaria</span>

        <span className="error">
          Para registrarte debes tener más de 18 años.
        </span>

        <div className="p-login-register-ads">
          <input id="ads" name="ads" type="checkbox"  />
          <label className="p-login-register__label-check" htmlFor="ads">
            Quiero recibir consejos sobre como gestionar mi equipaje, ofertas,
            novedades y otro correos electrónicos de Maleteo
          </label>
        </div>
        <button type="submit" className="p-login-register__btn longbutton ">
          Registrarse
        </button>
      </div>
    </form>
  );
}
