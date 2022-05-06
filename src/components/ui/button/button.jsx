import React from "react";
import "./styles.css";

export const Button = ({ children }) => {
  return (
    <button type="button" className="button">
      {children}
    </button>
  );
};
