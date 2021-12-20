import React from "react";

import { Shapes } from "@/assets";

import { GlobalStyle } from "./global-styles";

export const Provider: React.FC = ({ children }) => {
  return (
    <>
      <Shapes />
      <GlobalStyle />
      {children}
    </>
  );
};
