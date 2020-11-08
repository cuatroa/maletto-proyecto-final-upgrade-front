import React from 'react'
import { Link } from 'react-router-dom'
import './WelcomePage.scss'
import cadena from '../../assets/icons/cadena@3x.png'

export default function WelcomePage() {
  return (
    <div className="c-page">
      <div className="c-page__background1">
        <div className="c-page__background-element1">
          <img
            className="c-page__background-images1"
            src={cadena}
            alt="Cadena"
          />
        </div>
        <div className="c-page__background-element1">
          <h2 className="c-page__background-heading1">
            Prepárate para liberarte de tu equipaje
          </h2>
        </div>

        <div className="c-page__background-element1">
          <p className="c-page__background-text1">
            Encuentra a tu guardián y disfruta a tu manera. Miles de usuarios ya
            están aprovechando las ventajas
          </p>
        </div>

        <div className="c-page__background-element1">
          <Link to="/world">
            <button className="c-page__button1">Continuar</button>
          </Link>
        </div>
        <div className="c-page__background-element"></div>
      </div>
    </div>
  )
}

