// import React, { useState, useContext } from "react";
// import "./HomePage.scss";
// import axios from "axios";
// import { Link, useHistory } from "react-router-dom";
// import Navbar from "../../shared/components/Navbar/Navbar";
// import Experiences from "./SonsPage/Experiences/Experiences";
// import MoreExperiences from "./SonsPage/MoreExperiences/MoreExperiences"
// import { CalendarScroll } from "../../shared/components/Calendar/CalendarScroll";
// // import { InfoContext } from "../../shared/contexts/InfoContext";
// // import { PositionContext } from "../../shared/contexts/PositionContext";

// // import "../shared/components/Navbar/Navbar.scss";
// // import Card from "../../components/card/Card";
// // import { CalendarDemo } from "../../components/calendar/Calendar";
// // import { Carousel } from "../../components/carousel/Carousel";
// // import { PositionContext } from "../../shared/contexts/PositionContext";
// // import { PetitionInfoContext } from "../../shared/contexts/PetitionInfoContext";


// export default function HomePage() {
//   const [ownPosition, setownPosition] = useContext(PositionContext);
//   const [Info, setInfo] = useContext(InfoContext);
//   const history = useHistory();
//   const [date1, setDate1] = useState(
//     Info.entryDate ? new Date(Info.entryDate) : ""
//   );
//   const [date2, setDate2] = useState(
//     Info.departureDate ? new Date(Info.departureDate) : ""
//   );
//   const [cases, setCases] = useState(
//     Info.cases ? Info.cases : ""
//   );
//   const [showMore, setShowMore] = useState(true);

//   //Alude a la fecha actual y fecha de recogia + el nº de maletas y estipula según tu ubicación los guardianes
//   const handleSearch = () => {
//     if (date1 && date2 && ownPosition.name && cases !== "") {
//       setInfo({
//         entryDate: date1,
//         departureDate: date2,
//         cases: cases,
//       });
//       console.log(cases);
//       history.push("/ubication-map");
//     }
//     // history.push('/search-location-map');
//   };

//   return (
//     <head>
//       <main className="StructureHome">
//         {/* Se hace la 1º cajita para el form */}
//         <div className="HomeFormData">
//           <h2 className="home_title">Encuentra tu guardián</h2>
//           <form>
//             {/* Se crea la estructura de nuestro search form */}
//             <section className="home__formSearch">
//               <span className="home_search_ubication icon-search"></span>
//               <Link
//                 id="position"
//                 to="/search-location"
//                 className="home_search"
//               >
//                 {ownPosition.name
//                   ? ownPosition.name
//                   : "¿Dónde te encuentras? Madrid, Barcelona..."}
//               </Link>
//             </section>

//             <section className="home__calendar">
//               <CalendarScroll
//                 date1={date1}
//                 setDate1={setDate1}
//                 date2={date2}
//                 setDate2={setDate2}
//                 className="home__calendar"
//               />
//             </section>

//             <section className="home__suitcase">
//               <div className="suitcase__cases">
//                 <span className="icon-suitcase"></span>
//                 {/* Creamos unos styles que aluden a la function de JS de arriba para dar opciones de nº de maletas según ubicación */}
//                 <input
//                   type="hyden"
//                   name="number"
//                   min="1"
//                   max="20"
//                   id="cases"
//                   className="suitcase__cases-number"
//                   placeholder="Nº de piezas"
//                   value={cases}
//                   onChange={(e) => setCases(e.target.value)}
//                   defaultValue={Info.cases ? Info.cases : ""}
//                 />
//               </div>

//               <div className="home__buttonSearch">
//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleSearch();
//                   }}
//                   className="shortbutton home__buttonSearch"
//                 >
//                   Buscar
//                 </button>
//               </div>
//             </section>
//           </form>
//         </div>

//         {/* <div className="c-home-novelty">
//           <h2 className="c-home-novelty__title">Novedades</h2>
//           <Carousel />
//           {/* <img className="c-home__novelty-carousel-image" src="assets/images/rectangle_2@3x.png" alt="" /> *
//         </div> */}

//         <div className="c-home-novelty">
//           <h2 className="c-home-novelty__title">Experiencias</h2>
//           <div className="c-home__experience">
//             <Experiences />
//           </div>
//         </div>

//         {/*Generamos el btn para dar la opción de ver más o menos cantidad en la web*/}
//         <div className="HomeBtnOption">
//           {!showMore && <MoreExperiences>
//           </MoreExperiences>}
//           <button
//             className="c-home__button-more"
//             //se alude a la función de JS -- para que se aplique en btn que queremos que se ejecute en dos funcionalidades.
//             onClick={() => setShowMore(!showMore)}
//           >
//             {showMore ? "Mostrar más" : "Mostrar menos"}
//           </button>

//         </div>

//       </main>
//       <div>
//         <Navbar />
//       </div>
//     </head>
//   );
// }

