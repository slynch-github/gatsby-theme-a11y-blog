import "./src/styles/global.css";
import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";
import "focus-visible/dist/focus-visible";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.object.isRequired,
};