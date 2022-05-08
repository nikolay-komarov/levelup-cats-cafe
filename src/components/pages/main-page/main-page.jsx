import React from "react";
import { About } from "../../blocks/about/about";
import { StarsList } from "../../blocks/stars-list/starts-list";
import { TITLE_LEVEL } from "../../ui/title/consts";

export const MainPage = ({ ...props }) => {
  return (
    <>
      <About />
      <StarsList titleLevel={TITLE_LEVEL.H2} {...props} />
    </>
  );
};
