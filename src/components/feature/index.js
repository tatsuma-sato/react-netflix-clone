import React from "react";
import { Container, Title, Subtitle } from "./styles/Feature.styles";

const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restPorps }) {
  return <Title {...restPorps}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle({ children, ...restPorps }) {
  return <Subtitle {...restPorps}>{children}</Subtitle>;
};

export default Feature;
