import React from "react";
import { Link } from "react-router-dom";
import "./NewsPage.scss";
import Travel from '../../assets/img/news/Travel.jpg'

export default function NewsTravelPage() {
  return (
    <div className="news-container">
      <Link className="btnNews" to="/home"><span className="icon-atras"></span></Link>
      <h2 className="news-title">Los viajes en 2021</h2>
      <p className="news-text">
        ¿Cómo viajaremos en 2021? Esta es sin duda, una de los grandes
        interrogantes que se plantea el sector hotelero. ¿De qué forma tenemos
        que llegar a los huéspedes? ¿Qué van a a buscar en nuestro alojamiento?
        La pandemia ha cambiado radicalmente nuestra forma de vida y costumbres,
        incluyendo nuestras elecciones a la hora de viajar. Aun así, de lo que no
        cabe duda es de que las personas continúan soñado con descubrir nuevos
        destinos.
      </p>

      <div className="news-image-container">
        <img
          className="news-img"
          src={Travel}
          alt=""
        />
      </div>

      <div className="news-social-media">
        <button className="icon-pulgares-hacia-arriba btnNews"></button>
        <button className="icon-heart btnNews btnNewsHeart"></button>
        <button className="icon-star-full btnNews btnNewsStar"></button>
      </div>
    </div>
  );
}
