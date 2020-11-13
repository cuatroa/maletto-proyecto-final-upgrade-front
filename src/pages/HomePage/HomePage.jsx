import React, { useState } from "react";
import "./HomePage.scss";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Navbar from "../../shared/components/Navbar/Navbar";
import MoreExperiences from "./SonsPage/MoreExperiences/MoreExperiences";
import Experiences from "./SonsPage/Experiences/Experiences"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import Calendar from 'react-calendar';


export default function HomePage() {

  const [showMore, setShowMore] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <main className="StructureHome">
        <div className="HomeFormData">
          <h1 className="home_title">Encuentra tu guardián</h1>

          <form class="structure_application">
            {/* Search Ubication */}

            <section className="homeSearch">
              <i className="icon-search"></i>
              <input type="text" placeholder="Búsqueda..." id="search" />
            </section>

            {/* Calendario */}
            <section>
              <div>
                {/* <Calendar
                  onChange={onChange}
                  value={value}
                /> */}
                <i className="icon-calendar"></i>
                <input type="datetime-local" className="input-calendar" placeholder="Depósito"></input>
              </div>
              <div>
                <i className="icon-calendar"></i>
                <input type="datetime-local" className="input-calendar" placeholder="Retirada"></input>
              </div>

            </section>

            {/* Nº de maletas */}
            <section>
              <i className="icon-suitcase" aria-hidden="true"></i>
              <select type="menu" width="1rem">
                <option value="0" >Nº de Piezas</option>
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
            </section>

            <section className="homeBtn">
              {/* Btn Buscar -- se redirecciona al Maps  */}
              <button className="btn">Buscar</button>
            </section>
          </form>
        </div>

        <section className="homeExtras">
          <article>
            <h2 >Novedades</h2>
            <div className="general">
              <Carousel
                autoPlay
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
              >
                <div>
                  <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1008&q=80" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1522509585149-c9cd39d1ff08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1073&q=80" />
                </div>
                <div>
                  <img src="https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
              </Carousel>
            </div>

            {/* Se ha de vincular con el carrusel */}
          </article>

          <article>
            <h2 >Experiencias</h2>
            <Experiences />
          </article>

          {!showMore && <MoreExperiences />}
          <button
            className="morehome"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Mostrar más" : "Mostrar menos"}
          </button>


        </section>

      </main>

      <div>
        <Navbar />
      </div>

    </div >
  );
}

