import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="auth">
      <Switch>
          
        <Route path="/auth/login" component={LoginScreen} />
        <Route path="/auth/register" component={RegisterScreen} />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};
