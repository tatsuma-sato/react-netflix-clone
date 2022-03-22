import React from "react";
import HeaderContainer from "../containers/Header.container";
import useContent from "../hooks/use-content";

const Browse = () => {
  const { series } = useContent("series");
  const { films } = useContent("films");

  return <HeaderContainer></HeaderContainer>;
};

export default Browse;
