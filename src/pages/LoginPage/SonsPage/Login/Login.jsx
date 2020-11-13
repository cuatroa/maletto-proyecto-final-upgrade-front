import React from "react";
import './../../LoginPage.scss'

export default function Login() {
 
  return (
    <div>
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
      <form className="p-login-register__form" >
      <div className="p-login-register-divInput">
        <label className="p-login-register__label" htmlFor="email">
          Dirección de correo electrónico
        </label>

        <input
          className="p-login-register__input"
          id="email"
          name="email"
          type="email"
          placeholder="john@gmail.com"
          // ref={register({
          //   required: true,
          //   pattern: {
          //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          //     message: "invalid email address",
          //   },
          // })}
        />
        
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
          placeholder="********"
          // ref={register({
          //   required: true,
          // })}
        />
        
      </div>

      <br/>

      <input
        value="Iniciar Sesión"
        type="submit"
        className="c-page__button1"
      ></input>
    </form>
    </div>
  );
}
