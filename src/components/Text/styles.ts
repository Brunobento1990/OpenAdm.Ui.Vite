import styled from "styled-components";

export const TextStyled = styled.p<{font: string, color: string}>`
  font-size: ${(props) => props.font};
  font-weight: 500;
  color: ${(props) => props.theme.color};
`;
