import { useState } from "react";
import * as S from "./styles";
import { Btn } from "../btn";
import { Text } from "../Text";

interface IConfigureModal {
  width?: string;
  height?: string;
}

let show: (message: string, confirmed?: () => void) => void;
let close: () => void;
let confirmed: () => void;
let configuracao: IConfigureModal = {
  height: "170px",
  width: "300px",
};

function Modal() {
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessate] = useState<string>("");

  show = (msg: string, crm?: () => void) => {
    setMessate(msg);
    setOpen(true);
    if(crm){
      confirmed = crm
    }
  };

  close = () => {
    setOpen(false);
  };
  if (!open) {
    return null;
  }
  return (
    <S.BoxStyled>
      <S.BoxModalStyled
        width={configuracao.width ?? "300px"}
        height={configuracao.height ?? "170px"}
      >
        <S.HeaderModalStyled>
          <S.CloseStyled icon="iconoir:cancel" onClick={close} />
        </S.HeaderModalStyled>
        <Text>{message}</Text>
        <S.FooterModalStyled>
          <Btn heigth="25px" onClick={confirmed} />
        </S.FooterModalStyled>
      </S.BoxModalStyled>
    </S.BoxStyled>
  );
}

export function useModal(config?: IConfigureModal) {
  if (config) {
    configuracao = config;
  }

  return {
    show,
    close,
    component: Modal,
  };
}
