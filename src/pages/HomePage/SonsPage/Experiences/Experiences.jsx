import React from 'react'
import Cairo from '../../../../assets/img/experiences/Cairo.jpg'
import Barcelona from '../../../../assets/img/experiences/Barcelona.jpg'
import Athens from '../../../../assets/img/experiences/Athens1.jpg'
import './Experiences.scss'
import StarRating from '../../../../shared/components/StarRating/StarRating'

export default function Experiences() {
  return (
    <div className="c-allexp">
      <figure className="experience">
        <img
          className="photo"
          src={Cairo}
          alt="Cairo"
        ></img>
        <figcaption className="squaredContainer">
          <h3 className="title">
            Viaja casi 5.000 años en el tiempo
            </h3>
          <p className="text">
            Enamórate de Egipto en esta excursión a las pirámides de Giza, la necrópolis de Saqqara y Menfis, antigua capital del país.
            </p>
          <StarRating />
        </figcaption>

      </figure>
      <figure className="experience">
        <img
          className="photo"
          src={Barcelona}
          alt="Barcelona"
        ></img>
        <figcaption className="squaredContainer">
          <h3 className="title">
            Sumérgete en Barcelona
            </h3>
          <p className="text">
            Practica paddle surf en Barcelona con este tour y descubre las maravillosas vistas de la capital catalana de día, al atardecer o de noche. ¡Una experiencia única en la Ciudad Condal!
            </p>
          <StarRating />
        </figcaption>
      </figure>
      <figure className="experience">
        <img
          className="photo"
          src={Athens}
          alt="Athens"
        ></img>
        <figcaption className="squaredContainer">
          <h3 className="title">
            Tour mitológico por Atenas
            </h3>
          <p className="text">
            La mitología griega aportó legendarias historias. Descubre las más sorprendentes recorriendo la capital helena.
            </p>
          <StarRating />
        </figcaption>
      </figure>
    </div>
  );
}
