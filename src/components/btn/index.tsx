import * as S from "./styles";

interface propsBtn {
  width?: string;
  heigth?: string;
  type?: "button" | "reset" | "submit";
  variant?: "outilined" | "contained" | "text";
  title?: string;
  onClick?: () => void;
}

export function Btn(props: propsBtn) {
  const title = props.title ?? "Continuar";
  const width = props.width ?? "80px";
  const heigth = props.heigth ?? "35px";
  const type = props.type ?? "button";
  function onClick(e: any){
    e.preventDefault();
    if(props.onClick){
      props.onClick()
    }
  }
  switch (props.variant) {
    case "text":
      return (
        <S.BtnText
          width={width}
          heigth={heigth}
          type={type}
          onClick={onClick}
        >
          {title}
        </S.BtnText>
      );
    case "contained":
      return (
        <S.BtnContained
          width={width}
          heigth={heigth}
          type={type}
          onClick={onClick}
        >
          {title}
        </S.BtnContained>
      );
    default:
      return (
        <S.BtnOutilined
          width={width}
          heigth={heigth}
          type={type}
          onClick={onClick}
        >
          {title}
        </S.BtnOutilined>
      );
  }
}
