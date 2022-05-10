import React from "react";
import { StyledStarIcon } from "./styled";

export const CAT_FEATURE = {
  NEW: "new",
  SOFT: "soft"
};

export const StarIcon = ({ className = "", feature }) => {
  let options;

  switch (feature) {
    case CAT_FEATURE.NEW:
      options = {
        text: "New",
        bgColor: "#ffb334"
      };
      break;
    case CAT_FEATURE.SOFT:
      options = {
        text: "Ласковый",
        bgColor: "#7fc92e"
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#000"
      };
      break;
  }

  return (
    <>
      {options.text && (
        <StyledStarIcon className={className} bgColor={options.bgColor}>
          {options.text}
        </StyledStarIcon>
      )}
    </>
  );
};
