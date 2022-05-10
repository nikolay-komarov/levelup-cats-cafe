import React from "react";
import { Title } from "../../ui/title/title";
import { StarCard } from "../../ui/star-card/star-card";
import { Button } from "../../ui/button/button";
import { StarItem, StarList, StyledStarsList } from "./styled";

export const StarsList = ({ stars, titleLevel }) => {
  return (
    <StyledStarsList>
      {stars?.length && (
        <>
          <Title level={titleLevel}>Наши звёзды</Title>
          <StarList isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
        </>
      )}
      <Button minWidth={353} link="/buy">
        Купить билет
      </Button>
    </StyledStarsList>
  );
};
