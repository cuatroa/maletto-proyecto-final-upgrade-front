import React, { useState } from "react";
import "./HomePage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../shared/components/Navbar/Navbar";
import Experiences from "./SonsPage/Experiences/Experiences";
import MoreExperiences from "./SonsPage/MoreExperiences/MoreExperiences"
import { CalendarScroll } from "../../shared/components/Calendar/CalendarScroll";
// import { InfoContext } from "../../shared/contexts/InfoContext";
// import { PositionContext } from "../../shared/contexts/PositionContext";


export default function HomePage() {

  return (
    <head>
      <main className="StructureHome">

        <div className="HomeFormData">
          <h2 className="home_title">Encuentra tu guardián</h2>

          {/* Se hace la 1º cajita para el form */}
          <form>

            {/* Search Ubication */}
            <section className="home__formSearch">
              <span className="home_search_ubication icon-search"></span>
              <input type="search" placeholder="Búsqueda" size="40"></input>
            </section>

            {/* Calendario */}
            <section className="home__calendar">
              <CalendarScroll className="home__calendar icon-calendar" />
              <input type="datetime-local" name="Depósito"></input>
            </section>

            <section className="home__calendar">
              <CalendarScroll className="home__calendar icon-calendar" />
              <input type="datetime-local" name="Retirada"></input>
            </section>

            {/* Nº de maletas */}
            <section className="home__suitcase">
              <div className="suitcase__cases">
                <span className="icon-suitcase"></span>
                <label></label>
                <select name="menu">
                  <option value="0">...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              {/* Btn Buscar -- se redirecciona al Maps  */}
              <div className="buttonSearch">
                <button className="home__buttonSearch">Buscar</button>
              </div>
            </section>
          </form>
        </div>

        <section className="home_extras">
          <article>
            <h2 className="home__title">Novedades</h2>
            {/* Se ha de vincular con el carrusel */}
          </article>

          <article>
            <h2 className="home__title">Experiencias</h2>
            <div className="c-home__experience">
              <Experiences />
            </div>
          </article>

          {/*Generamos el btn para dar la opción de ver más o menos cantidad en la web*/}
          <button className="Home_btnExperiences">
            <MoreExperiences />
          </button>

        </section>

      </main>
      <div>
        <Navbar />
      </div>
    </head>
  );
}

