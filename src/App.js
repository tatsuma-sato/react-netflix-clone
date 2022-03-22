import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, PrivateRoute } from "./helpers/routes";
import { useAuthListner } from "./hooks/useAuthStatus";
import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  const { user } = useAuthListner();

  return (
    <>
      <Router>
        <Routes>
          {/* Only if a user hasn't logged in, can go to home  */}
          <Route
            path={ROUTES.HOME}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />
            }
          >
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>

          {/* Protect browse page */}
          <Route path={ROUTES.BROWSE} element={<PrivateRoute user={user} />}>
            <Route path={ROUTES.BROWSE} element={<Browse />} />
          </Route>

          {/* Check if user already logged in */}
          {/* Sign in route */}
          <Route
            path={ROUTES.SIGN_IN}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />
            }
          >
            <Route path={ROUTES.SIGN_IN} element={<Signin />} />
          </Route>
          {/* Sign up route */}
          <Route
            path={ROUTES.SIGN_UP}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} />
            }
          >
            <Route path={ROUTES.SIGN_UP} element={<Signup />} />
          </Route>

          <Route path={ROUTES.SIGN_UP} element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
