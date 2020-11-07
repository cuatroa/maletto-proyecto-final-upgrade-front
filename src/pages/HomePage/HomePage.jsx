import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function HomePage() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/user").then((res) => {
      setUser(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="gallery">
      <ul>
        {user.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.name}</h1>
              <h1>{item.email}</h1>
              <img src={'http://localhost:3001' + item.img} alt="" />
            </div>
          );
          
        })}
      </ul>


      <h1>Register</h1>

  <form action="/user" method="POST">
    <label for="email">
      <p>Email</p>
      <input type="text" name="email"/>
    </label>

    <label for="password">
      <p>Password</p>
      <input type="password" name="password"/>
    </label>

    <input type="submit" value="Register now!"/>


  </form>
    </div>
  );
}
