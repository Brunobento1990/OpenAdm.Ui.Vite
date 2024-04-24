import styled from "styled-components";

export const TableStyled = styled.table`
  box-shadow: 0 0 0 0.7px ${(props) => props.theme.colors.cinza_claro};
  border-radius: 5px;
  border-collapse: collapse;
`;
export const TableHeadStyled = styled.thead`
  border-bottom: 1px solid ${(props) => props.theme.colors.cinza_escuro};
  height: 45px;
`;
export const TableBodyStyled = styled.tbody``;
export const TrHeaderStyled = styled.tr``;
export const ThHeaderStyled = styled.th`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  padding: 5px;
`;
export const TrBodyStyled = styled.tr`
  height: 30px;
`;
export const ThBodyStyled = styled.th`
  padding: 5px;
  font-size: 12px;
  text-align: left;
`;
