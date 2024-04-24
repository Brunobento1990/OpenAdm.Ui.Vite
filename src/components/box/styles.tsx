import styled from "styled-components";

export const BoxStyled = styled.div<{ 
    width: string; 
    height: string;
    alignitems: string;
    justifycontent: string; 
    flexdirection:string;
    backgroundcolor:string;
    borderradius?:string;
    boxshadow?:string;
    gap?:string;
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex;
    align-items: ${(props) => props.alignitems};
    justify-content: ${(props) => props.justifycontent};
    flex-direction: ${(props) => props.flexdirection};
    background-color: ${(props) => props.backgroundcolor};
    border-radius: ${(props) => props.borderradius};
    box-shadow: ${(props) => props.boxshadow};
    gap: ${(props) => props.gap}
`