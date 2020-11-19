import React from "react";
import { Link } from "react-router-dom";
import Dog from "../../assets/img/news/Dog.jpg";
import "./NewsPage.scss";

export default function NewsDogPage() {
  return (
    <div className="news-container">
      <Link className="btnNews" to="/home">
        <span className="icon-atras"></span>
      </Link>
      <h2 className="news-title">Perro Mochilero</h2>
      <p className="news-text">
        ¿Te has planteado la idea de irte de vacaciones con tu mascota pero no
        encuentras información suficiente sobre transportes, documentación,
        requisitos y situaciones que te puedas encontrar si os “embarcáis”
        juntos en esa aventura? Desde hace al menos 14.500 años los perros y los
        seres humanos han sido compañeros de viaje. Desde aquellos tiempos en
        los que probablemente caminaban o corrían juntos hasta llegar a su
        destino, y poco después se ayudaron entre sí con la ayuda de trineos,
        los medios de transporte y las posibilidades de cómo viajar han avanzado
        hasta límites insospechados gracias a la revolución de los transportes y
        las nuevas tecnologías.
      </p>

      <div className="news-image-container">
        <img className="news-img" src={Dog} alt="" />
      </div>

      <div className="news-social-media">
        <button className="icon-pulgares-hacia-arriba btnNews"></button>
        <button className="icon-heart btnNews btnNewsHeart"></button>
        <button className="icon-star-full btnNews btnNewsStar"></button>
      </div>
    </div>
  );
}
