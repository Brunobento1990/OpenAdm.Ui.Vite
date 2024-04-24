import styled from "styled-components";

export const FormStyled = styled.form`
    width: 90%;
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 0 0 0.7px ${(props) => props.theme.colors.cinza_claro};
`

export const FormTitleStyled = styled.h1`
    padding: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
`

export const FormBoxSubmitStyled = styled.div`
    width: 95%;
    height: 60px;
    align-items: center;
    display: flex;
    justify-content: end;
    gap: 15px;
`

export const FormRowStyled = styled.div<{ columns: string, gridgap: string }>`
    display: grid;
    grid-template-columns: ${(props) => props.columns};
    grid-gap: ${(props) => props.gridgap};
    @media (max-width: 768px) {
        grid-template-columns: auto;
    } 
`