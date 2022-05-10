import React from "react";
import { Logo } from "../../ui/logo/logo";
import { StyledSection, Copyright } from "./styled";

export const Footer = () => {
  return (
    <StyledSection>
      <Logo />
      <Copyright>Создано 2022</Copyright>
    </StyledSection>
  );
};
