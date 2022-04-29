import React, { useContext, useState } from "react";
import { Form } from "../components";
import FooterContainer from "../containers/Footer.container";
import HeaderContainer from "../containers/Header.container";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate(ROUTES.BROWSE);
      }
    } catch (error) {
      setEmail("");
      setPassword("");
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {errorMessage && <Form.Error>{errorMessage}</Form.Error>}
          <Form.Base onSubmit={handleSignin} method="post">
            <span style={{ color: "white" }}>demo</span>
            <span style={{ color: "white" }}>Email: user@mail.com</span>
            <span style={{ color: "white" }}>Password: 123123</span>
            <Form.Input
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="password"
              autoComplete="off"
              value={password}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?
            <Form.LinkButton to="/sign-up">Sign up now</Form.LinkButton>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCaputure to ensure you're Learm
            more
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signin;
