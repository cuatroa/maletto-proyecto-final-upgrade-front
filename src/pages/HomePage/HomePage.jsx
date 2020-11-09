import React, { useEffect, useState } from "react";
import "./HomePage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../shared/components/Navbar/Navbar";

// import "../shared/components/Navbar/Navbar.scss";


import Card from "../../components/card/Card";
import { CalendarDemo } from "../../components/calendar/Calendar";
import { Carousel } from "../../components/carousel/Carousel";
import { PositionContext } from "../../shared/contexts/PositionContext";
import { PetitionInfoContext } from "../../shared/contexts/PetitionInfoContext";
import MoreExperience from "../../components/MoreExperiences/MoreExperiences";



export default function HomePage() {
  const [ownPosition, setOwnPosition] = useContext(PositionContext);
  const [petitionInfo, setPetitionInfo] = useContext(PetitionInfoContext);
  const history = useHistory();
  const [date1, setDate1] = useState(
    petitionInfo.entryDate ? new Date(petitionInfo.entryDate) : ""
  );
  const [date2, setDate2] = useState(
    petitionInfo.departureDate ? new Date(petitionInfo.departureDate) : ""
  );
  const [cases, setCases] = useState(
    petitionInfo.cases ? petitionInfo.cases : ""
  );
  const [showMore, setShowMore] = useState(true);


  const handleSearch = () => {
    if (date1 && date2 && ownPosition.name && cases !== "") {
      setPetitionInfo({
        entryDate: date1,
        departureDate: date2,
        cases: cases,
      });
      console.log(cases);
      history.push("/ubication-map");
    }
    // history.push('/search-location-map');
  };

  return (
    <div className="c-all">
      <div className="c-home">
        <div className="c-home__margin">
          <div className="c-home-formData">
            <h2 className="c-home__title">Encuentra tu guardián</h2>
            <form className="c-home-formData-form">
              <div className="c-home-formData__form">
                <img
                  src="/assets/images/lupa@3x.png"
                  className="c-home__input-location_search"
                  alt=""
                />
                <Link
                  id="position"
                  to="/search-location"
                  className="c-home__input-location"
                >
                  {ownPosition.name
                    ? ownPosition.name
                    : "¿Dónde te encuentras? Madrid, Barcelona..."}
                </Link>
              </div>
              <div className="c-home-formData__calendar">
                <CalendarDemo
                  date1={date1}
                  setDate1={setDate1}
                  date2={date2}
                  setDate2={setDate2}
                  className="c-home__calendar"
                />
              </div>
              <div className="c-home__case-element">
                <div className="c-home-formData__cases">
                  <img
                    src="/assets/images/maletita@3x.png"
                    className="c-home__case-element-pic"
                    alt=""
                  />
                  {/* <label htmlFor="cases" className="c-home__case-element-text">
                  Nº de piezas
                </label> */}
                  <input
                    type="number"
                    id="cases"
                    className="c-home__case-element-number"
                    placeholder="Nº de piezas"
                    value={cases}
                    onChange={(e) => setCases(e.target.value)}
                    defaultValue={petitionInfo.cases ? petitionInfo.cases : ""}
                  />
                </div>
                <div className="c-home__button">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSearch();
                    }}
                    className="shortbutton c-home__button"
                  >
                    Buscar
                </button>
                </div>
              </div>
            </form>
          </div>
          <div className="c-home-novelty">
            <h2 className="c-home-novelty__title">Novedades</h2>
            <Carousel />
            {/* <img className="c-home__novelty-carousel-image" src="assets/images/rectangle_2@3x.png" alt="" /> */}
          </div>
          <div className="c-home-novelty">
            <h2 className="c-home-novelty__title">Experiencias</h2>
            <div className="c-home__experience">
              <Experience />
            </div>
          </div>
          <div className="c-button-center">
            {/* <Link to="/guardiansfile"> */}

            {/* </Link> */}
            {!showMore && <MoreExperience>
            </MoreExperience>}
            <button
              className="c-home__button-more"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Mostrar más" : "Mostrar menos"}
            </button>

          </div>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}

