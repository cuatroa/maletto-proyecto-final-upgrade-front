import React from 'react'
import Cairo from '../../../../assets/img/experiences/Cairo.jpg'
import Barcelona from '../../../../assets/img/experiences/Barcelona.jpg'
import Athens from '../../../../assets/img/experiences/Athens1.jpg'
import './Experiences.scss'
import StarRating from '../../../../shared/components/StarRating/StarRating'

export default function Experiences() {
    return (
        <div className="c-allexp">
        <figure className="c-experience">
          <img
            className="c-experience__img"
            src={Cairo}
            alt="Cairo"
          ></img>
          <figcaption className="c-experience-caption">
            <h2 className="c-experience-caption__title">
              Viaja casi 5.000 años en el tiempo
            </h2>
            <p className="c-experience-caption__text">
                Enamórate de Egipto en esta excursión a las pirámides de Giza, la necrópolis de Saqqara y Menfis, antigua capital del país.
            </p>
            <StarRating />
          </figcaption>
        </figure>
        <figure className="c-experience">
          <img
            className="c-experience__img"
            src={Barcelona}
            alt="Barcelona"
          ></img>
          <figcaption className="c-experience-caption">
            <h2 className="c-experience-caption__title">
              Sumérgete en Barcelona
            </h2>
            <p className="c-experience-caption__text">
            Practica paddle surf en Barcelona con este tour y descubre las maravillosas vistas de la capital catalana de día, al atardecer o de noche. ¡Una experiencia única en la Ciudad Condal!
            </p>
            <StarRating />
          </figcaption>
        </figure>
        <figure className="c-experience">
          <img
            className="c-experience__img"
            src={Athens}
            alt="Athens"
          ></img>
          <figcaption className="c-experience-caption">
            <h2 className="c-experience-caption__title">
              Tour mitológico por Atenas
            </h2>
            <p className="c-experience-caption__text">
            La mitología griega aportó legendarias historias. Descubre las más sorprendentes recorriendo la capital helena.
            </p>
            <StarRating />
          </figcaption>
        </figure>
      </div>
    );
}
