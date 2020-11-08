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
      <img src="" alt=""/>
      <h1>MALETTO</h1>
    </div>);
}
