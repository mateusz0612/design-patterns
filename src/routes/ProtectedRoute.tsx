import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export const ProtectedRoute: React.FC<RouteProps> = ({ path }) => {
  const user = true;

  if (user) {
    return <Route path={path} />;
  }

  return <Redirect to="/" />;
};
