import React from "react";
import { MainPage } from "../../pages/main-page/main-page";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import "./styles.css";

export const PageWrapper = ({ ...props }) => {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage {...props} />
      </main>
      <Footer />
    </>
  );
};
