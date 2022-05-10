import React from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Main } from "./styled";

export const PageWrapper = ({ ...props }) => {
  return (
    <>
      <Header />
      <Main>
        <MainPage {...props} />
      </Main>
      <Footer />
    </>
  );
};
