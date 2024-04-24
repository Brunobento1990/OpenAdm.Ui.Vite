import { ReactNode } from "react";
import * as S from "./styles";
import { useTheme } from "styled-components";

interface propsText {
  children: ReactNode;
  fontSize?: string;
  color?: string;
}

export function Text(props: propsText) {
  const theme = useTheme();
  const color = props.color ?? theme.colors.cinza_escuro;
  return <S.TextStyled color={color} font={props.fontSize ?? '1rem'}>{props.children}</S.TextStyled>;
}
