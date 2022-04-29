import React, { useState } from "react";
import BrowseContainer from "../containers/Browse.container";
import HeaderContainer from "../containers/Header.container";
import useContent from "../hooks/use-content";
import selectionFilter from "../utils/selection-filter";

const Browse = () => {
  const [loading, setLoading] = useState(true);

  const { test } = useContent("test");
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter({ series, test });

  return <BrowseContainer slides={slides} />;
};

export default Browse;
