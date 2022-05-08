import React from "react";
import { StyledTitle } from "./styled";

export const Title = ({ level = 1, size, className, children }) => {
  return (
    <StyledTitle as={`h${level}`} size={size} className={className}>
      {children}
    </StyledTitle>
  );
};
