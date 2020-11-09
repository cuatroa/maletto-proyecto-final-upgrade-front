import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { API, updateAPIToken } from "../../shared/services/api";
import IsLoggedContext from "../../Contexts/IsLoggedContext";

export default function RegisterForm() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [reqError, setReqError] = useState("");
  const [isLogged, setIsLogged] = useContext(IsLoggedContext);

  useEffect(() => {
    if (localStorage.getItem("error")) {
      const error = localStorage.getItem("error");
      setReqError(error);
      localStorage.clear();
    }
  }, []);

  const date = new Date();
  const currentYear = date.getFullYear();
  date.setFullYear(currentYear - 18);
  const years18 = date.toISOString().slice(0, 10);

  const onSubmitRegister = (formData) => {
    // console.log(formData);
    API.post("register", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.error) {
          setReqError(res.data.message);
        } else {
          // console.log(formData);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.id);
          setIsLogged(true);
          updateAPIToken(res.data.token);
          history.push("/home");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmitRegister)}>
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
          />{" "}
          Google
        </a>
      </div>
      <div className="">
        <p className="text-style-small">o utiliza tu correo electrónico</p>
      </div>
      <div>
        {reqError && reqError !== "" && <p className="error"> {reqError}</p>}
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
        <label className="p-login-register__label" htmlFor="namereg">
          Nombre
        </label>
        <input
          className="p-login-register__input"
          id="name"
          name="name"
          type="text"
          placeholder="Carlos"
          ref={register({
            required: true,
          })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className="error">Nombre es necesario</span>
        )}
        <label className="p-login-register__label" htmlFor="surnamereg">
          Apellido
        </label>
        <input
          className="p-login-register__input"
          id="surname"
          name="surname"
          type="text"
          placeholder="Pérez González"
          ref={register({
            required: true,
          })}
        />
        {errors.surname && errors.surname.type === "required" && (
          <span className="error">Apellidos es necesario</span>
        )}
        <label className="p-login-register__label" htmlFor="password">
          Contraseña
        </label>
        <input
          className="p-login-register__input"
          id="password"
          name="password"
          type="password"
          placeholder="********"
          ref={register({
            required: true,
            pattern: {
              value: /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
              message:
                "La contraseña debe tener entre 8 y 16 dígitos, y al menos, 1 mayúscula, 1 minúscula y 1 dígito.",
            },
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <span className="error">Contraseña necesaria</span>
        )}
        {errors.password && errors.password.message && (
          <span className="error">
            La contraseña debe tener entre 8 y 16 dígitos, y al menos, 1
            mayúscula, 1 minúscula y 1 dígito.
          </span>
        )}
        <label className="p-login-register__label" htmlFor="birthdatereg">
          Fecha de nacimiento
        </label>
        <input
          className="p-login-register__input"
          id="birthdate"
          name="birthdate"
          type="date"
          max={years18}
          ref={register({
            required: true,
            // max: {date}
          })}
        />
        {errors.birthdate && errors.birthdate.type === "required" && (
          <span className="error">Fecha de nacimiento es necesaria</span>
        )}
        {errors.birthdate && errors.birthdate.message && (
          <span className="error">
            Para registrarte debes tener más de 18 años.
          </span>
        )}
        <div className="p-login-register-ads">
          <input id="ads" name="ads" type="checkbox" ref={register} />
          <label className="p-login-register__label-check" htmlFor="ads">
            Quiero recibir consejos sobre como gestionar mi equipaje, ofertas,
            novedades y otro correos electrónicos de Maleteo
          </label>
        </div>
        <button type="submit" className="p-login-register__submit longbutton">
          Registrarse
        </button>
      </div>
    </form>
  );
}
