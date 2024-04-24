import { ReactNode } from "react";
import * as S from "./styles";

interface propsDivider {
  children?: ReactNode;
}

export function Divider(props: propsDivider) {
  if (props.children) {
    return <S.DividerStyledWithChildren><p>{props.children}</p></S.DividerStyledWithChildren>;
  }

  return <S.DividerStyled />;
}
