import React from "react";
import { Title } from "../../ui/title/title";
import { TITLE_SIZE } from "../../ui/title/consts";
import { Address, StyledSection, Text, TextWrapper, WorkTime } from "./styled";

export const About = () => {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TITLE_SIZE.BIG}>Первое в России котокафе</Title>
        <Text>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </Text>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address>
          Санкт-Петербург, набережная реки Карповки, дом 5, литера П
        </Address>
      </TextWrapper>
    </StyledSection>
  );
};
