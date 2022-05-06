import React from "react";
import "./styles.css";

export const Button = ({ minWidth, children }) => {
  return (
    <button type="button" style={{ minWidth: minWidth }} className="button">
      {children}
    </button>
  );
};
