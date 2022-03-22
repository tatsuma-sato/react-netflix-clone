import React, { useState } from "react";
import { Form } from "../components";
import FooterContainer from "../containers/Footer.container";
import HeaderContainer from "../containers/Header.container";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase.prod";

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const isInvalid = firstName === "" || password === "" || email === "";

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      });

      await setDoc(doc(db, "users", user.uid), { firstName, email, password });

      navigate(ROUTES.BROWSE);
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
          <Form.Title>Sign Up</Form.Title>
          {errorMessage && <Form.Error>{errorMessage}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="post">
            <Form.Input
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              type="email"
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
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user?
            <Form.LinkButton to="/sign-in">Sign in here</Form.LinkButton>
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

export default Signup;
