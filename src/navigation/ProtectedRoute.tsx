import { Component, useContext } from "react";
import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...rest }: any) {
  const isLoggedIn: boolean = false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
