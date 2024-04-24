import styled from "styled-components";

export const H1Styled = styled.h1<{
    fontSize: string,
    fontWeight: number, 
    color:string 
}>`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
`