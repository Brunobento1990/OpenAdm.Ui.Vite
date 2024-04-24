import styled from "styled-components";

const BtnDefault = styled.button`
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.3s ease;
  text-align: center;
  border-radius: 5px;
`

export const BtnOutilined = styled(BtnDefault)<{ width: string; heigth: string }>`
  box-shadow: 0 0 0 0.7px ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  &:hover {
    box-shadow: 0 0 0 1.2px ${(props) => props.theme.colors.primary};
  }

  &:active {
    background: linear-gradient(
      to right,
      #b68ff5,
      #c2a2f4,
      #ceb5f3,
      #d9c9f1,
      #e4dcef
    );
  }
`;

export const BtnContained = styled(BtnDefault)<{ width: string; heigth: string }>`
  color: ${(props) => props.theme.colors.white};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  background-color: ${(props) => props.theme.colors.primary};
  &:hover {
    box-shadow: 0 0 0 .5px ${(props) => props.theme.colors.primary};
  }

  &:active {
    background: linear-gradient(
      to right,
      #b68ff5,
      #c2a2f4,
      #ceb5f3,
      #d9c9f1,
      #e4dcef
    );
  }
`;

export const BtnText = styled(BtnDefault)<{ width: string; heigth: string }>`
  color: ${(props) => props.theme.colors.primary};
  width: ${(props) => props.width};
  height: ${(props) => props.heigth};
  &:hover {
    background-color: ${(props) => props.theme.backGroundColor.violeta};
  }

  &:active {
    background: linear-gradient(
      to right,
      #b68ff5,
      #c2a2f4,
      #ceb5f3,
      #d9c9f1,
      #e4dcef
    );
  }
`;
