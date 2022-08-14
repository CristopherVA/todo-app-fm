import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RotateSpinner } from "react-spinners-kit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { TodoScreen } from "../components/todo/TodoScreen";
import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { startLoadingTodos } from "../redux/actions/todoAction";
import { login } from "../redux/actions/authAction";

export const AppRouter = () => {
  
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setChecking(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
        dispatch(login(user))
        dispatch(startLoadingTodos());
      } else {
        setIsLogged(false);
      }
    });

    setChecking(false);
  }, []);

  if (checking) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#5c62c5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
        }}
      >
        <RotateSpinner />
      </div>
    );
  }

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute
              path="/auth"
              isAuthenticated={isLogged}
              component={AuthRouter}
            />
            <PrivateRoute
              path="/"
              isAuthenticated={isLogged}
              component={TodoScreen}
            />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
