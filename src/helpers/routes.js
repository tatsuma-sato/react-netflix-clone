import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "../components";

import { useAuthStatus } from "../hooks/useAuthStatus";

export const PrivateRoute = ({ user, children, ...rest }) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus)
    return (
      <Spinner>
        <Spinner.SpinnerRotate />
      </Spinner>
    );

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export const IsUserRedirect = ({ user, loggedInPath, children, ...rest }) => {
  return user ? <Navigate to={{ pathname: loggedInPath }} /> : <Outlet />;
};
