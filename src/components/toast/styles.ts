import { Icon } from "@iconify/react/dist/iconify.js";
import styled, { keyframes } from "styled-components";

const modalKeyframes = keyframes`
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0);
  }
`;

export const ToastBoxStyled = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToastMainStyled = styled.div<{ color: string }>`
  width: 250px;
  z-index: 2;
  margin-top: 12px;
  box-shadow: 0 0 0 0.7px ${(props) => props.color};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  animation: ${modalKeyframes} 0.3s linear;
`;

export const ToastHeaderStyled = styled.div`
  height: 18px;
  display: flex;
  align-items: end;
  justify-content: end;
  width: 97%;
`;

export const CloseStyled = styled(Icon)<{color: string}>`
  cursor: pointer;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  color: ${(props) => props.color};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.cinza_claro};
  }
`;

export const ToastBodyStyled = styled.div<{ color: string }>`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  margin-left: 5px;
  & > * {
    color: ${(props) => props.color};
  }
`;
