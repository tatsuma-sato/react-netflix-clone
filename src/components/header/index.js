import React from "react";
import { Link } from "react-router-dom";
import {
  Logo,
  Background,
  Container,
  ButtonLink,
  Button,
} from "./styles/Header.styles";

const Header = ({ bg = true, children, restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderFrame({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Button = function HeaderButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

export default Header;
