import React from "react";
import { StarIcon } from "../star-icon/star-icon";
import { Title, TITLE_SIZE } from "../title/title";
import "./styles.css";

export const StarCard = ({ name, about, feature, image }) => {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={image}
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StarIcon className="star-card__icon" feature={feature} />
      </figure>
      <Title size={TITLE_SIZE.SMALL}>{name}</Title>
      <p
        className="star-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
};
