import React from "react";
import { ReactComponent as LogoImage } from "/src/asserts/logo.svg";
import { Text, StyledLogo } from "./styled";

export const Logo = () => {
  return (
    <StyledLogo href="/">
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
};
