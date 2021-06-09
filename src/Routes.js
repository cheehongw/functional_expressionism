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

const Routes = () => {
  return (
    <CssBaseline>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/">
              <App />
            </PrivateRoute>
            <Route exact path="/locations">
              <LocationList />
            </Route>
            <Route exact path="/stalls">
              <Stalls />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </CssBaseline>
  );
};

export default Routes;
