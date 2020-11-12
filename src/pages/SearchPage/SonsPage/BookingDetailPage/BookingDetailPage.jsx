import React from 'react'
import { Link } from 'react-router-dom'
import './BookingDetailPage.scss'
import Navbar from "../../../../shared/components/Navbar/Navbar";

export default function BookingDetailPage() {
    return (
        <div className="p-all">
        <div>
         <Link to='/search/info'>
        <span className="icon-atras p-returnback__iconback" ></span>
        </Link>
        </div>
        <div>
          <h1 className="p-title">Detalles de tu Reserva</h1>
        </div>
        <div className="p-header">
          <div className="p-details">
            <h2 className="p-headers2">Llegada</h2>
            <h2 className="p-headers2">Recogida</h2>
            <h2 className="p-headers2">Equipaje</h2>
          </div>
          <div className="p-details">
            <p className="p-text2">30 de Julio</p>
            <p className="p-text2">30 de Julio</p>
            <p className="p-text2">2 equipajes</p>
          </div>
        </div>
        <div>
          <div className="p-table">
            <div className="p-table__left">
              <p className="p-text2" id='value1' type='number'>
                Primeras 24 horas 6,00 x 2 equipajes
              </p>
              <p className="p-text2">Gastos de gestión</p>
              <p className="p-text2">Servicio asegurado hasta 100€</p>
              <p className="p-text2">Total</p>
            </div>
            <div className="p-table__right"  > </div>
           
            <p className="p-table__right__text3__1" > 10 €</p>
            <p className="p-table__right__text3__2" > 2 €</p>
            <p className="p-table__right__text3__3">Gratis</p>
            <p className="p-table__right__text3__4"> 12 € </p>
          
          </div>
        </div>
  
        <div className="p-bot">
          <Link to="/booking-complete">
          <button className="longbutton1">
            Reservar
          </button>
          </Link>
        </div>
  
        <br />
        <br />
        <br />
        <br />
  
        <Navbar/>
      </div>
    )
}
