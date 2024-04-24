import { ReactNode } from "react";
import * as S from "./styles";
import { useNavigationApp } from "../../hooks/use-navigation-app";

interface propsLink {
  children: ReactNode;
  route?: string;
  onClick?: () => void;
}

export function Link(props: propsLink) {
  const location = useNavigationApp();
  return (
    <S.LinkStyled
      onClick={() => {
        if (props.route) {
          location.navigate(props.route);
        }
        if (props.onClick) {
          props.onClick();
        }
      }}
    >
      {props.children}
    </S.LinkStyled>
  );
}
