import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Navbar from "./../../shared/components/Navbar/Navbar";
import "./GuardianPage.scss"

const apiUrl = 'http://localhost:3001';

export default function GuardianPage() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => setUser(data))
      .catch((err) => {
        console.log(err);
        history.push('/home');
      });
  }, []);

  const logout = (values) => {
    axios
      .get(`${apiUrl}/auth/logout`, { withCredentials: true })
      .then(() => {
        history.push('/login');
      })
      .catch(console.log);
  };

  return (
    <div className="container">
          {user ? (
      <div className="div-image-title">
                        <div className="image-title">
                          <div>
                          <h2>
                            {user.name} {user.lastName}
                          </h2>
                            <h3 >Puedes ver y <Link to="/user/edit" className="user-edit-guardian">editar</Link> tu perfil</h3>
                            <img className="image" src={user.img} alt="" />
                          </div>
                          <div>
                          <div>
                          <Link className="icon-proximo icono-user-page" to ="/guardian/spaces"/*"Poner redirección"*/> </Link>
                            <h3>Tus anuncios</h3>
                            <h4 className="small-text">Ver y editar tus anuncios</h4>
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-proximo icono-user-page" to ="/booking-petitions-page"/*"Poner redirección"*/> </Link>
                            <h3>Peticiones de reserva</h3>  
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-proximo icono-user-page" to ="/guardian/publish"/*"Poner redirección"*/> </Link>
                            <h3>Publica tu anuncio</h3>  
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-cog icono-user-page" to ="/guardian"> </Link>
                            <h3>Configuración</h3>
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-info icono-user-page" to ="/guardian"> </Link>
                            <h3>Ayuda</h3>  
                            <hr/>
                          </div>
                          <div>
                            <button className="icon-salir icono-user-page icon-exit-log" onClick={logout}>
                              {' '}
                            </button>
                            <h3>Salir</h3>
                            <hr />
                          </div>
                          <br />
                          <br />
                          </div>
                        </div>
            </div>
            ) : null}
            <Navbar/>
    </div>
    
  );
}
