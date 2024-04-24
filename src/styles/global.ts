import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    margin: 0;
    background-color: ${(props) => props.theme.backGroundColor.cinza};
    position: relative;
    overflow: hidden;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.primary};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.colors.cinza_claro};
  }
`;
