import React from "react";
import { About } from "../../blocks/about/about";
import { StarsList } from "../../blocks/stars-list/starts-list";

export const MainPage = ({ ...props }) => {
  return (
    <>
      <About />
      <StarsList {...props} />
    </>
  );
};
