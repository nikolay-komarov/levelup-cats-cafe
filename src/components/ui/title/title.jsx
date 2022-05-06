import React from "react";
import "./styles.css";

export const TITLE_SIZE = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

export const Title = ({ size, children }) => {
  return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>;
};
