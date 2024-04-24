import { useState } from "react";
import * as S from "./styles";
import { Text } from "../Text";
import { useTheme } from "styled-components";

interface IConfigureToast {
  type: "success" | "error" | "warning";
}

let show: (msg: string) => void;
let close: () => void;
let configure: IConfigureToast = {
  type: "success",
};

function Toast() {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const theme = useTheme();

  function getColorType(): string {
    if (configure.type === "success") {
      return theme.colors.success.tertiary;
    }

    if (configure.type === "error") {
      return theme.colors.error.tertiary;
    }

    return theme.colors.warning.tertiary;
  }

  show = (msg: string) => {
    setMessage(msg);
    setOpen(true);
  };

  close = () => {
    setOpen(false);
  };

  if (!open) return null;

  setTimeout(() => {
    close();
  }, 2000);
  
  return (
    <S.ToastBoxStyled>
      <S.ToastMainStyled color={getColorType()}>
        <S.ToastHeaderStyled>
          <S.CloseStyled
            icon="iconoir:cancel"
            onClick={close}
            color={getColorType()}
          />
        </S.ToastHeaderStyled>
        <S.ToastBodyStyled color={getColorType()}>
          <Text fontSize=".8rem" color={theme.colors.error.primary}>{message}</Text>
        </S.ToastBodyStyled>
      </S.ToastMainStyled>
    </S.ToastBoxStyled>
  );
}

export function useToast(config?: IConfigureToast) {
  if (config) {
    configure = config;
  }
  return {
    show,
    close,
    component: Toast,
  };
}
