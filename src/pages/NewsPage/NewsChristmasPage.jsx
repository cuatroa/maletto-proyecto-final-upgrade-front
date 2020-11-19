import React from "react";
import { Link } from "react-router-dom";
import Navidad from "../../assets/img/news/Navidad.jpg";
import "./NewsPage.scss";

export default function NewsChristmasPage() {
  return (
    <div className="news-container">
      <Link className="btnNews" to="/home">
        <span className="icon-atras"></span>
      </Link>
      <h2 className="news-title">
        Esta Navidad, escribe un mensaje a tus seres queridos y Papá Noel se lo enviará
      </h2>
      <p className="news-text">
        Este año ha sido difícil ver a nuestros seres queridos. O incluso
        imposible. Y con la Navidad a la vuelta de la esquina, los sentimientos
        de paz y amor están más a flor de piel que nunca. Las restricciones y
        medidas adoptadas ante la crisis provocada por la pandemia van
        actualizándose día a día y lo tenemos asumido: estas serán unas
        Navidades muy extrañas. Sin embargo, también sabemos que la distancia
        separa cuerpos, pero no corazones. Por eso, para acercarnos un poco a
        las personas que más nos importan, Visit Finland ha lanzado la
        iniciativa 'Say it with Santa', con la ayuda de Papá Noel. ¿En qué
        consiste? Muy sencillo: escribe un mensaje a quien tú quieras y Papá
        Noel se lo transmitirá con un video personalizado. ¡Tienes hasta el 29
        de noviembre para enviarlo!
      </p>

      <div className="news-image-container">
        <img className="news-img" src={Navidad} alt="" />
      </div>

      <div className="news-social-media">
        <button className="icon-pulgares-hacia-arriba btnNews"></button>
        <button className="icon-heart btnNews btnNewsHeart"></button>
        <button className="icon-star-full btnNews btnNewsStar"></button>
      </div>
    </div>
  );
}
