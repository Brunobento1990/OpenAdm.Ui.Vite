import { Icon } from "@iconify/react/dist/iconify.js";
import styled from "styled-components";

export const InputStyled = styled.input<{left: string}>`
  flex-grow: 1;
  border: none;
  font-size: 14px;
  height: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.cinza_escuro};
  left: ${(props) => props.left};
  &:focus {
    outline: none;
  }
`;

export const BoxMainStyled = styled.div<{width: string}>`
  width: ${(props) => props.width}
`

export const BoxStyled = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid ${(props) => props.color};
    border-radius: 5px;
    padding: 2px 30px 2px 5px;
    width: 100%;
    box-sizing: border-box;
`;

export const BoxLabel = styled.div`
`

export const IconStyled = styled(Icon)`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 30px;
  height: 20px;
  border-left: 1px solid ${(props) => props.theme.colors.cinza_claro};
`;

export const IconStartStyled = styled(Icon)`
  position: absolute;
  left: 4px;
  cursor: pointer;
  width: 30px;
  height: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.cinza_claro};
`;

export const LabelStyled = styled.label<{ color: string }>`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.color};
  width: 100%;
  height: 20px;
  margin-left: 5px;
`;
