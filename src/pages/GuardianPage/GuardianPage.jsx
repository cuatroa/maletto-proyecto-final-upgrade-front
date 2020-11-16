import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./../../shared/components/Navbar/Navbar";
import "./GuardianPage.scss"

export default function GuardianPage() {

  const [user, setUser] = useState([]);
  // const user = [];

    useEffect(() => {
        axios.get("http://localhost:3001/user/5fabcc0e88fb296090024a82").then((res) => {
            setUser(res.data);
            // setUser = user;
            console.log(res.data);
        });
    }, []);

  return (
    <div className="container">
      <div className="div-image-title">
                {/* {user.map((item, index) => { */}
                    {/* return ( */}
                        <div className="image-title">
                          <div>
                            <h2>{user.name}</h2>
                            <h3 >Puedes ver y editar tu perfil</h3>
                            <img className="image" src={user.img} alt="" />
                          </div>
                          <div>
                          <div>
                            <h3>Invita a tus amigos</h3>
                            <Link className="icon-proximo icono-user-page" to ="/home"/*"Poner redirección"*/> </Link>
                            <h4 className="small-text">Y podrás ganar descuentos para ti</h4>
                            
                            <hr/>
                          </div>
                          <div>
                          <Link className="icon-proximo icono-user-page" to ="/guardian/spaces"/*"Poner redirección"*/> </Link>
                            <h3>Tus anuncios</h3>
                            <h4 className="small-text"></h4>
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

                          </div>
                        </div>
                    {/* ); */}
                {/* })} */}
            </div>
            <Navbar/>
    </div>
    
  );
}
