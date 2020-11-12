import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Link } from "react-router-dom";
import Register from "./SonsPage/Register/Register";
import Login from "./SonsPage/Login/Login";
import "./LoginPage.scss"

export const LoginPage = () => {
  return (
    <div className="p-login-register">
      <div>
        <Link to="/world">
          <span className="icon-atras p-returnback-login__iconback"></span>
        </Link>
      </div>
      <TabView renderActiveOnly={true}>
        <TabPanel header="Register" clasName="" leftIcon="">
          <Register ></Register>
        </TabPanel>
        <TabPanel header="Login" className="" rightIcon="">
          <Login ></Login>
        </TabPanel>
      </TabView>
    </div>
  );
};
