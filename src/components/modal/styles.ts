import styled, { keyframes } from "styled-components";
import { Icon } from "@iconify/react";

const modalKeyframes = keyframes`
  from {
    transform: translateY(-400px);
  }
  to {
    transform: translateY(0);
  }
`;

export const BoxStyled = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 2;
  position: absolute;
  background-color: rgba(47, 43, 61, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxModalStyled = styled.div<{width: string, height: string}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.backGroundColor.cinza};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  animation: ${modalKeyframes} .3s linear;
`;

export const HeaderModalStyled = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: end;
  border-bottom: solid 1px ${(props) => props.theme.colors.cinza_claro};
`;

export const CloseStyled = styled(Icon)`
  cursor: pointer;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.cinza_claro};
  }
`;

export const FooterModalStyled = styled.div`
  height: 40px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: end;
  border-top: solid 1px ${(props) => props.theme.colors.cinza_claro};
`;
