import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./../../../../shared/components/Navbar/Navbar";
import "./PublishPage.scss"

export default function PublishPage() {



  return (
    <div className="container">
      <div className="div-image-title">
        {/* {user.map((item, index) => { */}
        {/* return ( */}
        <div className="image-title">
          <div>
            <h2>Descríbenos tu espacio</h2>


          </div>
          <div>
            <div>
              <h3>Especifica tu propiedad</h3>
              <Link className="icon-descargar" to="/"/*"Poner redirección"*/> </Link>
              <h4 className="small-text">Seleccione una opción</h4>
              <hr />
            </div>
            <div className="tabs">
              <div className="tab">
                <input type="checkbox" id="chck1" />
                <label className="tab-label" for="chck1">
                  Cómo debe ser tu maleta
              </label>
                <hr />
                <div className="tab-content">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
                  reiciendis!
              </div>
              </div>
            </div>
            <div>
              <Link className="icon-descargar" to="/guardian-spaces-page"/*"Poner redirección"*/> </Link>
              <h3>¿Qué tipo de espacio?</h3>
              <h4 className="small-text">Selecciona una opción</h4>
              <hr />
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

  );
}
