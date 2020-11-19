import React, { useState } from "react";
import "./HomePage.scss";
import Navbar from "../../shared/components/Navbar/Navbar";
import MoreExperiences from "./SonsPage/MoreExperiences/MoreExperiences";
import Experiences from "./SonsPage/Experiences/Experiences"
import photo1 from "../../assets/img/carousel/a.jpg";
import photo2 from "../../assets/img/carousel/b.jpg";
import photo3 from "../../assets/img/carousel/c.jpg";
import photo5 from "../../assets/img/carousel/e.jpg";
import photo6 from "../../assets/img/carousel/f.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import qs from "qs";


export default function HomePage() {

  const { handleSubmit, register } = useForm();
  const history = useHistory();

  const [showMore, setShowMore] = useState(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const onSubmit = (values) => {
    const searchValues = {};
    Object.keys(values).forEach((key) => {
      if (values[key]) {
        searchValues[key] = values[key];
      }
    })
    const params = qs.stringify(searchValues);
    history.push(`/search?${params}`);
  };

  // Vamos a SearchPage con un query param llamado name que es igual al search del formulario
  // history.push(`/departure?$departure ? `name=${departure}` : ''`;
  // Vamos a SearchPage con un query param llamado name que es igual al search del formulario
  return (
    <div className="homePage">
      <main className="StructureHome">
        <div className="HomeFormData">
          <h1 className="title">Encuentra tu guardián</h1>

          <form className="structure_application"
            onSubmit={handleSubmit(onSubmit)}>
            {/* Search Ubication */}

            <section className="homeSearch">
              <i className="icon-search"></i>
              <input
                type="text"
                placeholder="Búsqueda..."
                id="name"
                name="name"
                ref={register({})}
              />
            </section>

            {/* Calendario */}
            <section>
              <div>
                <i className="icon-calendar"></i>
                <input type="datetime-local" id="arrival" name="arrival" className="input-calendar" placeholder="Depósito" ref={register({})}></input>
              </div>
              <div>
                <i className="icon-calendar"></i>
                <input type="datetime-local" id="departure" name="departure" className="input-calendar" placeholder="Retirada" ref={register({})}></input>
              </div>

            </section>

            {/* Nº de maletas */}
            <section>
              <i className="icon-suitcase" aria-hidden="true"></i>
              <select type="menu" id="amount" name="amount" width="1rem" ref={register({ required: true })}>
                <option value="" >Nº de Piezas</option>
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
              <button type="submit" className="btn">Buscar</button>
            </section>

          </form>
        </div>

        <section className="homeExtras">
          <article>
            <h2 >Novedades</h2>
            <div className="photoText">
              <Carousel
                autoPlay
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}>
                <div>
                  <img src={photo5} className="desvanecer" alt="" />
                  <p className="text">prueba a</p>
                </div>
                <div>
                  <img src={photo3} className="desvanecer" alt="" />
                  <p className="text">prueba a</p>
                </div>
                <div>
                  <img src={photo1} className="desvanecer" alt="" />
                  <p className="text">prueba a</p>
                </div>
                <div>
                  <img src={photo6} className="desvanecer" alt="" />
                  <p className="text">prueba a</p>
                </div>

                <div>
                  <img src={photo2} className="desvanecer" alt="" />
                  <p className="text">prueba a</p>
                </div>

              </Carousel>
            </div>

            {/* Se ha de vincular con el carrusel */}
          </article>

          <article>
            <h2 >Experiencias</h2>
            <Experiences />
          </article>

          <div className="btnExtras">
            {!showMore && <MoreExperiences />}
            <button
              className="morehome"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Mostrar más" : "Mostrar menos"}
            </button>

          </div>

        </section>

      </main>

      <div>
        <Navbar />
      </div>

    </div >
  );


}