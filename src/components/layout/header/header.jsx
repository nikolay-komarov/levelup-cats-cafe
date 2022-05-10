import React from "react";
import { Logo } from "../../ui/logo/logo";
import { Nav } from "../nav/nav";
import { StyledHeader } from "./styled";

export const Header = () => {
  return (
    <StyledHeader as="header">
      <Logo />
      <Nav />
    </StyledHeader>
  );
};
