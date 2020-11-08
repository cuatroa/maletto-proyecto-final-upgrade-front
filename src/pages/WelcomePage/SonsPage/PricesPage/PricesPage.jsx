import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../shared/components/Navbar/Navbar";
import './PricesPage.scss'

export default function PricesPage() {
  return (
    <div className="p-prices">
    <div>
      <Link to="/world">
        <span className="icon-circle-left p-returnback-prices__iconback"></span>
      </Link>
    </div>

    <div className="p-prices-selection">
      <p className="p-prices-selection__text">Selecciona</p>
      <select className="p-prices-selection__select">
        <option>Europa</option>
        <option>Asia</option>
        <option>América</option>
      </select>
    </div>
    <div className="p-prices-prices">
      <p className="p-prices-prices__title">Nuestras tarifas fijas</p>
      <div className="p-prices-prices__card blue">
        <p className="p-prices-card__text1">24 Horas</p>
        <p className="p-prices-card__text2">6€</p>
        <p className="p-prices-card__text1">Por equipaje</p>
      </div>
      <div className="p-prices-prices__card red">
        <p className="p-prices-card__text1">Día adicional</p>
        <p className="p-prices-card__text2">4€</p>
        <p className="p-prices-card__text1">Por equipaje</p>
      </div>
    </div>
    <Navbar/>
  </div>
  );
}
