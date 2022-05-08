import styled from "styled-components";
import { TITLE_SIZE } from "./consts";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 41px;
  font-size: ${(props) => {
    let fontSize = "36px";
    if (props.size === TITLE_SIZE.BIG) {
      fontSize = "44px";
    }
    if (props.size === TITLE_SIZE.SMALL) {
      fontSize = "28px";
    }
    return fontSize;
  }};
`;
