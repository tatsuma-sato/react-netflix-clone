import React from "react";
import { Container, SpinnerRotate } from "./styles/spinner.styles";

const Spinner = ({ children }) => {
  return <Container>{children}</Container>;
};

Spinner.SpinnerRotate = function ({ children }) {
  return <SpinnerRotate>{children}</SpinnerRotate>;
};

export default Spinner;
