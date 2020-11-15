import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./../../../../shared/components/Navbar/Navbar";
import "./PublishPage.scss";

export default function PublishPage() {
  return (
    <div className="container">
      <div className="container-noNavbar">
      <Link className="icon-atras" to="/guardian" >  </Link>
      
      <div className="div-image-title">
        {/* {user.map((item, index) => { */}
        {/* return ( */}
        <div className="image-title">
          <div>
            <h2>Descríbenos tu espacio</h2>
          </div>
          <div>
            <div>
              <div className="icon-descargar" to="/" /*"Poner redirección"*/>
                {" "}
              </div>
              <h3>Especifica tu propiedad</h3>
              <hr />
            </div>

            <div className="row">
              <div className="tabs">
                <div className="tab">
                  <input type="checkbox" id="chck1" />
                  <label className="tab-label" for="chck1">
                    Seleccione una opción &nbsp;
                  </label>
                  <hr />
                  <div className="tab-content">Casa</div>
                  <div className="tab-content">Hotel</div>
                  <div className="tab-content">Establecimiento</div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="icon-descargar"
                to="/guardian-spaces-page" /*"Poner redirección"*/
              >
                {" "}
              </div>
              <h3>¿Qué tipo de espacio?</h3>

              <hr />
            </div>

            <div className="row">
              <div className="tabs">
                <div className="tab">
                  <input type="checkbox" id="chck2" />
                  <label className="tab-label" for="chck2">
                    Seleccione una opción &nbsp;
                  </label>
                  <hr />
                  <div className="tab-content">Habitación</div>
                  <div className="tab-content">Hall</div>
                  <div className="tab-content">Trastero</div>
                  <div className="tab-content">Buhardilla</div>
                  <div className="tab-content">Garaje</div>
                </div>
              </div>
            </div>

            <div>
              <h3>Ubicación</h3>
              <hr />
            </div>
            <div>
              <h3>Fotos</h3>
              <hr />
            </div>
            <div>
              <h3>Título</h3>
              <hr />
            </div>
            <div>
              <h3>Disponibilidad y horarios</h3>
              <hr />
            </div>
            <div>
              <h3>Servicios</h3>
              <hr />
            </div>
          </div>
        </div>
        {/* ); */}
        {/* })} */}
      </div>
      <Navbar />
      </div>
    </div>
  );
}
