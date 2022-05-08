import React from "react";
import { StyledButton } from "./styled";

export const Button = ({ link, className, minWidth, children }) => {
  return (
    <StyledButton
      minWidth={minWidth}
      {...(link ? { href: link } : { as: "button", type: "button" })}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
