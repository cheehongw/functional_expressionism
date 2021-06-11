import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./views/App/App.js";
import LocationList from "./views/LocationList.js";
import Stalls from "./views/Stalls.js";
import NotFound from "./views/NotFound";
import { CssBaseline } from "@material-ui/core";
import { AuthProvider } from "./auth/use-auth.js";
import PrivateRoute from "./auth/PrivateRoute";
import SignIn from "./auth/SignIn/SignIn.js";
import SignUp from "./auth/SignUp/SignUp.js";
import SignUpDone from "./auth/SignUpDone/SignUpDone.js";

const Routes = () => {
  return (
    <CssBaseline>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/">
              <App />
            </PrivateRoute>
            <Route exact path="/locations" component={ LocationList } />
            <Route exact path="/stalls" component={ Stalls }/>
            <Route exact path="/signin" component={ SignIn } />
            <Route exact path="/signup" component={ SignUp } />
            <Route exact path="/done" component={ SignUpDone } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </CssBaseline>
  );
};

export default Routes;
