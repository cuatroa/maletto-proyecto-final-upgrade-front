import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";

// import "../../shared/styles/LongButton/LongButton.scss";
import { Link, useHistory } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import { API } from "../../shared/services/api";
// import "./loginRegister.scss";

import Register from "./SonsPage/Register/Register";
import Login from "./SonsPage/Login/Login";

export const LoginPage = () => {
  return (
    <div className="p-login-register">
     <div>
        <Link to="/world">
          <span className="icon-circle-left p-returnback-login__iconback"></span>
        </Link>
      </div>
      <TabView renderActiveOnly={true}>
        <TabPanel header="Register" leftIcon="pi pi-users">
            <Register ></Register>
              
        </TabPanel>
        <TabPanel header="Login" rightIcon="pi pi-user">
          <Login ></Login>
        </TabPanel>
      </TabView>
    </div>
  );
};
