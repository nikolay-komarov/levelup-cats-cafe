import React from "react";
import { PageWrapper } from "../layout/page-wrapper/page-wrapper";
import { starList } from "../../mocks/star-list";
import "./styles.css";

export const App = () => {
  return <PageWrapper stars={starList} />;
};
