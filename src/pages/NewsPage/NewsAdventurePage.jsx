import React from "react";
import { Link } from "react-router-dom";
import Ruta from "../../assets/img/news/Ruta.jpg";
import "./NewsPage.scss";

export default function NewsAdventurePage() {
  return (
    <div className="news-container">
      <Link className="btnNews" to="/home">
        <span className="icon-atras"></span>
      </Link>
      <h2 className="news-title">
      LA MÍTICA RUTA 66
      </h2>
      <p className="news-text">
        ¿Un sueño, un mito, una aventura? Recorrer la histórica Ruta 66 desde la
        Costa Este de Estados Unidos hasta la Costa Oeste significa un viaje en
        el tiempo, una forma maravillosa de conocer el país, su forma de vida y
        sus paisajes más representativos. The Main Street of America (La Calle
        Principal de América) se construyó en noviembre de 1926 y,
        originariamente, discurría desde Chicago (Illinois), a través de Missouri,
        Kansas, Oklahoma, Texas, New Mexico, Arizona y California, hasta
        finalizar en Los Ángeles con un recorrido total de 3.939 kilómetros.
      </p>

      <div className="news-image-container">
        <img className="news-img" src={Ruta} alt="" />
      </div>

      <div className="news-social-media">
        <button className="icon-pulgares-hacia-arriba btnNews"></button>
        <button className="icon-heart btnNews btnNewsHeart"></button>
        <button className="icon-star-full btnNews btnNewsStar"></button>
      </div>
    </div>
  );
}
