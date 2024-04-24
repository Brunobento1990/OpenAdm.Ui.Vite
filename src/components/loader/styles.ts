import styled, { keyframes } from "styled-components";

const isrotate = keyframes`
    to{
        transform: rotate(1turn);
    }
`

export const LoaderBodyStyled = styled.div`
    background-color: #cbcbcbb3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    cursor: not-allowed;
`

export const LoaderStyled = styled.div`
    width: 30px;
    height: 30px;
    border: 4px solid ${(props) => props.theme.colors.cinza_claro};
    border-top-color: ${(props) => props.theme.colors.primary};
    animation: ${isrotate} 1s infinite;
    border-radius: 50%;
    background-color: #ddddddb3;
`