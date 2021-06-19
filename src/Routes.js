import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./views/App/App.js";
import LocationList from "./views/LocationList/LocationList.js";
import Stalls from "./views/Stalls.js";
import NotFound from "./views/NotFound";
import { CssBaseline } from "@material-ui/core";
import { AuthProvider } from "./auth/use-auth.js";
import SignIn from "./auth/SignIn/SignIn.js";
import SignUp from "./auth/SignUp/SignUp.js";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword.js";
import PrivateRoute from "./auth/PrivateRoute";
import Profile from "./views/Profile/Profile.js";
import OnetimeSetup from "./auth/OnetimeSetup/OnetimeSetup.js";

const Routes = () => {
  return (
    <CssBaseline>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/locations" component={LocationList} />
            <Route exact path="/stalls" component={Stalls} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgot" component={ForgotPassword} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/onetimesetup" component={OnetimeSetup} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </CssBaseline>
  );
};

export default Routes;
