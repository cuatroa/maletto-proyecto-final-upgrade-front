import React, { useState } from "react";
import "./HomePage.scss";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Navbar from "../../shared/components/Navbar/Navbar";
import CalendarScroll from "../../shared/components/Calendar/CalendarScroll";
import MoreExperiences from "./SonsPage/MoreExperiences/MoreExperiences";
import Experiences from "./SonsPage/Experiences/Experiences"


export default function HomePage() {

  const [showMore, setShowMore] = useState(true);

  return (
    <div>
      <main className="StructureHome">
        <div className="HomeFormData">
          <h2 className="home_title">Encuentra tu guardián</h2>

          {/* Se hace la 1º cajita para el form */}
          <form>

            {/* Search Ubication */}
            <section className="inner-addon right-addon">
              <i className="glyphicon icon-search"></i>
              <input type="text" class="form-control" placeholder="Búsqueda..." />
            </section>

            {/* Calendario */}
            <section className="home__calendar">
              {/* <CalendarScroll className="home__calendar icon-calendar" /> */}
              <input type="datetime-local" className="icon-calendar" name="Depósito"></input>
            </section>

            <section className="home__calendar ">
              {/* <CalendarScroll className="home__calendar icon-calendar" /> */}
              <input type="datetime-local" className="icon-calendar" name="Retirada"></input>
            </section>

            {/* Nº de maletas */}
            <section className="suitcase">
              <div className="suitcase">
                <select name="menu" >
                  <option value="0" ><i className="icon-suitcase" aria-hidden="true"></i>...</option>
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
            </section>
            <section className="buttonSearch">
              {/* Btn Buscar -- se redirecciona al Maps  */}
              <button className="home__buttonSearch">Buscar</button>
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
            <div className="home__experience">
              <Experiences />
            </div>
          </article>

          {/*Generamos el btn para dar la opción de ver más o menos cantidad en la web*/}
          <button className="piki">hi</button>

          {/* <div className="home_buttonMore">
            {!showMore && <MoreExperiences />}
            <button
              className="home_btnExperiences"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Mostrar más" : "Mostrar menos"}
            </button>

          </div> */}
        </section>

      </main>

      <div>
        <Navbar />
      </div>

    </div >
  );
}

