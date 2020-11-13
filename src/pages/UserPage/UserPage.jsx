import React, { useEffect, useState } from "react";
<<<<<<< HEAD
// import Navbar from '../../shared/components/Navbar/Navbar';
import { Link } from "react-router-dom";
import axios from "axios";
=======
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./../../shared/components/Navbar/Navbar";
import "./UserPage.scss"
>>>>>>> develop

export default function UserPage() {

<<<<<<< HEAD
export default function UserPage() {
  const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/user").then((res) => {
            setUser(res.data);
            console.log(res.data);
        });
    }, []);
  return (
    <div>
      <ul>
          {user.map((item, index) => {
                return (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        
                        <img src={'http://localhost:3001' + item.img} alt="Imagen no disponible" />
                    </div>
                );

            })}
            </ul>
      <div className="c-page__bottom">
          <Link to="/user-booking-page" >
            <button className=""></button>
          </Link>
      </div>    
      
      <h1>Tus reservas</h1>
      <h2>{item.title}</h2>

      {/* <Navbar /> */}
    </div>
=======
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
                            <h3>Conviértete en guardián</h3>
                            <h4 className="small-text">Puedes ganar 400€ de media al mes</h4>
                            <hr/>
                          </div>
                          <div>
                            <h3>Invita a tus amigos</h3>
                            <h4 className="small-text">Y podrás ganar descuentos para ti</h4>
                            <hr/>
                          </div>
                          <div>
                            <h3>Tus reservas</h3>  
                            <hr/>
                          </div>
                          <div>
                            <h3>Configuración</h3>
                            <hr/>
                          </div>
                          <div>
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
    
>>>>>>> develop
  );
}
