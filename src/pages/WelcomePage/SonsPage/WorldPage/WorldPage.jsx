import React from 'react'
import { Link } from 'react-router-dom'
import './WorldPage.scss'
import world from '../../../../assets/icons/world@3x.png'

export default function WorldPage() {

  const alertLog = (e) => {
    alert("Debes registrarte o iniciar sesión para continuar");
  };


  return (
    <div className="c-page">
      <div className="c-page__background">
        <div className="c-page__background-element">
          <img
            className="c-page__background-image"
            src={world}
            alt="World"
          />
        </div>
        <div className="c-page__background-element">
          <h2 className="c-page__background-heading">
            El mismo precio en cualquier parte
          </h2>
        </div>

        <div className="c-page__background-element">
          <p className="c-page__background-text">
            Dispondrás de un precio fijo estés donde estés, sin importar el
            tamaño o el peso
          </p>
        </div>

        <div className="c-page__bottom">
           <Link to="/login" onClick={alertLog}>
            <button className="">Empezar ya</button>
          </Link>
          <Link to="/prices">
            <span className="c-page__background-span">
              Consulta los precios
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
