import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./../../shared/components/Navbar/Navbar";
import "./UserPage.scss"

export default function UserPage() {

  const [user, setUser] = useState([]);
  const apiUrl = 'http://localhost:3001';

  useEffect(() => {
    axios
      // We have to use { withCredentials: true } to send and receive valid cookies
      .get(`${apiUrl}/auth/profile`, { withCredentials: true })
      .then(({ data }) => setUser(data))
      .catch(console.log);
  }, []);

  const logout = (values) => {
    axios
      .get(`${apiUrl}/auth/logout`, { withCredentials: true })
      .then(() => setUser())
      .catch(console.log);
  };

  return (
    <div className="container">
      <div className="div-image-title">
                {/* {user.map((item, index) => { */}
                    {/* return ( */}
                        <div className="image-title">
                          <div>
                            <h2>{user.name} {user.lastName}</h2>
                            <h3 >Puedes ver y <Link to="/user/edit" className="user-edit">editar</Link> tu perfil</h3>
                            <img className="image" src={user.img} alt="" />
                          </div>
                          <div>
                          <div>
                            <h3>Conviértete en guardián</h3>
                            <Link className="icon-proximo icono-user-page" to="/guardian"> </Link>
                            <h4 className="small-text">Puedes ganar 400€ de media al mes</h4>
                            
                            <hr/>
                          </div>
                          <div>
                            <h3>Invita a tus amigos</h3>
                            <Link className="icon-proximo icono-user-page"> </Link>
                            <h4 className="small-text">Y podrás ganar descuentos para ti</h4>
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-proximo icono-user-page" to ="/user"/*"Poner redirección"*/> </Link>
                            <h3>Tus reservas</h3>  
                            
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-cog icono-user-page" to ="/user"/*"Poner redirección"*/> </Link>
                            <h3>Configuración</h3>
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-info icono-user-page" to ="/user"/*"Poner redirección"*/> </Link>
                            <h3>Ayuda</h3>  
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-salir icono-user-page" to ="/login" onClick={logout}> </Link>
                            <h3>Salir</h3>  
                            <hr/>
                          </div>
                          <br/>
                          <br/>

                          </div>
                        </div>
                    {/* ); */}
                {/* })} */}
            </div>
            <Navbar/>
    </div>
    
  );
}
