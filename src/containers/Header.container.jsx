import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

const HeaderContainer = ({ children }) => {
  const auth = getAuth();
  const navigate = useNavigate();

  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        {/* <Header.Button
          onClick={() => {
            auth.signOut();
            navigate("/");
          }}
        >
          Log out
        </Header.Button> */}
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
