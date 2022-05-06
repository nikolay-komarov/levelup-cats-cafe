import React from "react";
import { Title } from "../../ui/title/title";
import { StarCard } from "../../ui/star-card/star-card";
import { Button } from "../../ui/button/button";
import "./styles.css";

export const StarsList = () => {
  return (
    <section className="star-list">
      <Title>Наши звёзды</Title>
      <ul className="star-list__list">
        <li className="star-list__item">
          <StarCard />
        </li>
      </ul>
      <Button minWidth={353}>Купить билет</Button>
    </section>
  );
};
