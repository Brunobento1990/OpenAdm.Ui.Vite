import styled from "styled-components";

export const LinkStyled = styled.a`
    cursor: pointer;
    width: 98%;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.cinza_escuro};
    height: 25px;
    font-size: 1rem;
    font-weight: 500;
    padding: 2px;
    &:hover{
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.backGroundColor.violeta};
    }
`