import React from "react";
import { Link } from "react-router-dom";
import Flower from "../../assets/img/news/Flower.jpg";
import "./NewsPage.scss";

export default function NewsFlowerPage() {
  return (
    <div className="news-container">
      <Link className="btnNews" to="/home">
        <span className="icon-atras"></span>
      </Link>
      <h2 className="news-title">
        ¡Qué bien le sienta el traje amarillo a Soria!
      </h2>
      <p className="news-text">
      Los girasoles sorianos sirven de nuevo reclamo turístico de la provincia. Se cuelan en cientos de selfies de vecinos y visitantes que han aprendido a valorar la imagen y colorido que proporciona uno de los cultivos más importantes por número de hectáreas. Soria se viste en estos días con un traje de alta costura y color amarillo. Es un vestido bordado a base de girasoles, los que ocupan las 44.500 hectáreas que se dedican a este cultivo en la provincia.
      </p>

      <div className="news-image-container">
        <img className="news-img" src={Flower} alt="" />
      </div>

      <div className="news-social-media">
        <button className="icon-pulgares-hacia-arriba btnNews"></button>
        <button className="icon-heart btnNews btnNewsHeart"></button>
        <button className="icon-star-full btnNews btnNewsStar"></button>
      </div>
    </div>
  );
}
