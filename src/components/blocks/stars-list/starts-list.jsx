import React from "react";
import { Title } from "../../ui/title/title";
import { StarCard } from "../../ui/star-card/star-card";
import { Button } from "../../ui/button/button";
import "./styles.css";

export const StarsList = ({ stars }) => {
  return (
    <section className="star-list">
      {stars?.length && (
        <>
          <Title>Наши звёзды</Title>
          <ul className="star-list__list">
            {stars.map((star) => (
              <li key={star.id} className="star-list__item">
                <StarCard {...star} />
              </li>
            ))}
          </ul>
        </>
      )}
      <Button minWidth={353} link="/buy">
        Купить билет
      </Button>
    </section>
  );
};
