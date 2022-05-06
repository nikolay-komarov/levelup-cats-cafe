import React from "react";
import logo from "../../../asserts/logo.svg";
import "./styles.css";

export const Logo = () => {
  return (
    <a href="/" className="logo__link">
      <img src={logo} alt="логотип" />
      <span className="logo__text">Котокафе</span>
    </a>
  );
};
