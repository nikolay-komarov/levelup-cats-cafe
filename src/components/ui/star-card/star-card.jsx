import React from "react";
import { Title } from "../title/title";
import { TITLE_LEVEL, TITLE_SIZE } from "../title/consts";
import { Figure, Image, StyledStarCard, StyledStarIcon, Text } from "./styled";

export const StarCard = ({ name, about, feature, image }) => {
  return (
    <StyledStarCard>
      <Figure>
        <Image
          src={image}
          className="star-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <StyledStarIcon feature={feature} />
      </Figure>
      <Title size={TITLE_SIZE.SMALL} level={TITLE_LEVEL.H3}>
        {name}
      </Title>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </StyledStarCard>
  );
};
