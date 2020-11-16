import React from 'react'
import Aveiro from '../../../../assets/img/experiences/Aveiro.jpg'
import Paris from '../../../../assets/img/experiences/Paris.jpg'
import Amsterdam from '../../../../assets/img/experiences/Amsterdam.jpg'
import '../Experiences/Experiences.scss'
import StarRating from '../../../../shared/components/StarRating/StarRating'

export default function MoreExperiences() {
  return (
    <div className="c-allexp">
      <figure className="experience">
        <img
          className="photo"
          src={Aveiro}
          alt="Aveiro"
        ></img>
        <figcaption className="c-experience-caption">
          <h2 className="title">
            Color en Costa Nova
            </h2>
          <p className="text">
            Si estás en Aveiro, no puedes perderte este tour a pie por Costa Nova, la playa más colorida del norte de Portugal. Será como amor a primera vista.
            </p>
          <StarRating />
        </figcaption>
      </figure>
      <figure className="experience">
        <img
          className="photo"
          src={Paris}
          alt="Paris"
        ></img>
        <figcaption className="c-experience-caption">
          <h2 className="title">
            Misterios y leyendas de París
            </h2>
          <p className="text">
            ¿Quién dijo que era la Ciudad del Amor? París esconde infinidad de plazas y callejuelas que han sido escenario de asesinatos, pestes, guerras y corrupción. En este tour descubrirás el lado más oscuro de la capital francesa.
            </p>
          <StarRating />
        </figcaption>
      </figure>
      <figure className="experience">
        <img
          className="photo"
          src={Amsterdam}
          alt="Amsterdam"
        ></img>
        <figcaption className="c-experience-caption">
          <h2 className="title">
            Paseo en barco por los canales
            </h2>
          <p className="text">
            Ámsterdam es una ciudad que debe disfrutarse tanto a pie como navegando por sus canales. En este paseo en barco veréis lo más importante de la ciudad desde otro punto de vista.            </p>
          <StarRating />
        </figcaption>
      </figure>
    </div>
  );
}
