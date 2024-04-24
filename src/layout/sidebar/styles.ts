import styled from "styled-components";

export const Aside = styled.section`
  width: 98%;
  height: 100%;
  max-height: 100vh;
  border-right: 1px solid ${(props) => props.theme.colors.cinza_claro};
`;

export const Ul = styled.ul`
  padding: 0;
  width: 100%;
  max-height: calc(100vh - 35px);
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-behavior: auto;
  overflow-y: auto;
`;

export const Link = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.cinza_escuro};
  min-width: 150px;
  height: 25px;
`;

export const Li = styled.li<{
  active: string;
  width?: string;
}>`
  height: 2.3rem;
  display: flex;
  width: ${(props) => props.width ?? "90%"};
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 3px;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 6px;
  margin: 5px;
  background-color: ${(props) =>
    props.active === "true" ? props.theme.backGroundColor.violeta : undefined};
  color: ${(props) =>
    props.active === "true" ? props.theme.colors.primary : undefined};
  & > * {
    color: ${(props) =>
      props.active === "true" ? props.theme.colors.primary : undefined};
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.backGroundColor.violeta};
    & > * {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OpenMenuDiv = styled.div<{
  width: string;
  justifycontent: string;
}>`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifycontent};
  width: ${(props) => props.width};
  box-sizing: border-box;
  border-bottom: 1px solid #b7b7b7;
  padding: 2px;
`;

export const OpenMenuBtn = styled.div`
  cursor: pointer;
  border: solid 1px #d6e9f9;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  transition: box-shadow 0.3s ease;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.backGroundColor.violeta};
  }
`;

export const Title = styled.h1`
  margin-left: 15px;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.5s;
`;
