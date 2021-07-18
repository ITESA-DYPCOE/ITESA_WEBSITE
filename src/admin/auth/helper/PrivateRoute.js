import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./index";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          //using props we can pass aditional props. like to, etc
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/admin/sign-in",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
