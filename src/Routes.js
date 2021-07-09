import React from "react";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import App from "./views/App/App.js";
import LocationList from "./views/LocationList/LocationList.js";
import StallList from "./views/StallList/StallList.js";
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
import ChangePassword from "./auth/ChangePassword/ChangePassword.js";
import ChangeProfile from "./auth/ChangeProfile/ChangeProfile.js";
import DeleteAccount from "./auth/DeleteAccount/DeleteAccount.js";
import FeelingLucky from "./views/FeelingLucky/FeelingLucky.js";

const Routes = () => {
  return (
    <CssBaseline>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />

            <Route path="/locations" component={LocationRouter} />

            <Route exact path="/stalls" component={Stalls} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/forgot" component={ForgotPassword} />
            
            <Route path="/profile" component={ProfileRouter} />

            <Route exact path="/onetimesetup" component={OnetimeSetup} />
            <Route exact path="/suggestions" component={FeelingLucky} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </CssBaseline>
  );
};

function LocationRouter() {
  let match = useRouteMatch();

  return (
    <>
      <Route exact path={`${match.url}`} component={LocationList} />
      <Route path={`${match.url}/:LocationID`} component={StallList} />
    </>
  )

}


function ProfileRouter() {
  let match = useRouteMatch();

  return (
    <>
      <PrivateRoute exact path={`${match.url}/`} component={Profile} />
      <PrivateRoute exact path={`${match.url}/passwordchange`} component={ChangePassword} />
      <PrivateRoute exact path={`${match.url}/profilechange`} component={ChangeProfile} />
      <PrivateRoute exact path={`${match.url}/accountdelete`} component={DeleteAccount} />
    </>
  )
}

export default Routes;
