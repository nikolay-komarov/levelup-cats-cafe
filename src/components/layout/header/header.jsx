import React from "react";
import { Logo } from "../../ui/logo/logo";
import { Nav } from "../nav/nav";
import "./styles.css";

export const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
};
