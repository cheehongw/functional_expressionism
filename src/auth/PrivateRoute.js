import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./use-auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser, doneOnetimeSetup } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          doneOnetimeSetup ? (
            <RouteComponent {...routeProps} />
          ) : (
            <Redirect to={"/onetimesetup"} />
          )
        ) : (
          <Redirect to={"/signin"} />
        )
      }
    />
  );
};

export default PrivateRoute;
