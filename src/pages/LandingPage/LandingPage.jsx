import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import './LandingPage.scss'

export default function LandingPage() {
    const history = useHistory();

    useEffect(() => {
      let temporizador = setTimeout(() => history.push("/welcome"), 2000);
      return () => {
        clearTimeout(temporizador);
      };
    }, []);
  
    return (
      <div className="c-homepage">
            <span
            className="c-homepage__maleta icon-logo_maletto"
            src="assets/images/maleta@3x.png"
            alt="maleta"
            />
        <h1 className="c-homepage__texto-maleteo">MALETTO</h1>
      </div>
    );
  }