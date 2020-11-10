import React, { useState, useContext, } from "react";
import { useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { API, updateAPIToken } from "../../shared/services/api";
import IsLoggedContext from "./../../Contexts/IsLoggedContext";
import axios from 'axios';

export default function LoginForm() {
 
  return (
    <form className="p-login-register__form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-large">Inicia sesión ahora</p>
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
          href="http://localhost:3000/login/google"
        >
          <img
            alt="google"
            className="google-icon"
            src="https://img.icons8.com/color/48/000000/google-logo.png"
          />{" "}
          Google
        </a>
      </div>
      <div>
        <p className="text-style-small">o utiliza tu correo electrónico</p>
      </div>
      <div>
        {reqError && reqError !== "" && <p className="error"> {reqError}</p>}
      </div>
      <div className="p-login-register-divInput">
        <label className="p-login-register__label" htmlFor="email">
          Dirección de correo electrónico
        </label>

        <input
          className="p-login-register__input"
          id="email"
          name="email"
          type="email"
          placeholder="carlos@gmail.com"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
        />
        {errors.email && errors.email.type && (
          <span className="error">El email es necesario</span>
        )}
        {errors.email && errors.email.message && (
          <span className="error">Email inválido</span>
        )}
      </div>
      <div className="p-login-register-divInput">
        <label className="p-login-register__label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="p-login-register__input"
          id="password"
          name="password"
          type="password"
          leftIcon="pi pi-eye-slash"
          placeholder="********"
          ref={register({
            required: true,
          })}
        />
        {errors.password && errors.password.type && (
          <span className="error">La contraseña es necesaria</span>
        )}
      </div>

      <input
        value="Iniciar Sesión"
        type="submit"
        className="p-login-register__submit longbutton"
      ></input>
    </form>
  );
}
