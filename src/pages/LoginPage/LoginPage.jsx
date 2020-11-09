import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";

// import "../../shared/styles/LongButton/LongButton.scss";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
// import { API } from "../../shared/services/api";
// import "./loginRegister.scss";
import LoginForm from '../../shared/components/LoginForm/LoginForm';
import RegisterForm from "../../shared/components/RegisterForm/RegisterForm";

export const LoginPage = () => {
  return (
    <div className="p-login-register">
     <div>
        <Link to="/world">
          <span className="icon-circle-left p-returnback-login__iconback"></span>
        </Link>
      </div>
      <TabView renderActiveOnly={false}>
        <TabPanel header="Register" leftIcon="pi pi-users">
         
            <RegisterForm ></RegisterForm>
        </TabPanel>
        <TabPanel header="Login" rightIcon="pi pi-user">
          <LoginForm ></LoginForm>
        </TabPanel>
      </TabView>
    </div>
  );
};
