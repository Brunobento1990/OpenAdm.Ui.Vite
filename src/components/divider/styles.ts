import styled from "styled-components";

export const DividerStyled = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.cinza_claro};
`

export const DividerStyledWithChildren = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.cinza_claro};
    display: flex;
    align-items: center;
    justify-content: center;
    & > * {
        color: ${(props) => props.theme.colors.cinza_escuro};
        height: 25px;
        font-weight: 700;
        font-size: 12px;
        min-width: 45px;
        text-align: center;
    }
`