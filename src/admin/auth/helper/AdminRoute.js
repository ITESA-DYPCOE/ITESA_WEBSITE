import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() && isAuthenticated().role === 1 ? (
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

export default AdminRoute;
