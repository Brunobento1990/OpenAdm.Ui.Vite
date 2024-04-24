import { useTheme } from "styled-components";
import * as S from "./styles";
import { useState } from "react";

interface propsInput {
  value: any;
  label: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  hyperText?: any;
  required?: boolean;
  type?: string;
  startIcon?: string;
  endIcon?: string;
  width?: string;
}

export function Input(props: propsInput) {
  const theme = useTheme();
  const [type, setType] = useState(props.type ?? "text");
  const isPassword = props.type === 'password';
  const width = props.width ?? '100%';

  function handleTypeInput() {
    if (type === 'password') {
      setType('text');
      return;
    }

    setType('password');
  }

  return (
    <S.BoxMainStyled width={width}>
      <S.BoxLabel>
        <S.LabelStyled
          htmlFor={props.id}
          color={
            props.error ? theme.colors.error.primary : theme.colors.cinza_escuro
          }
        >
          {props.label}
        </S.LabelStyled>
        {props.required &&
          <S.LabelStyled
            htmlFor={props.id}
            color={theme.colors.error.primary}
          >
            *
          </S.LabelStyled>
        }
      </S.BoxLabel>
      <S.BoxStyled
        color={
          props.error ? theme.colors.error.primary : theme.colors.cinza_claro
        }
      >
        <S.InputStyled
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type={type}
          left={props.startIcon ? '35px' : '0'}
        />
        {props.startIcon &&
          <S.IconStartStyled icon={props.startIcon} />
        }
        {isPassword &&
          <S.IconStyled icon={type === 'password' ? 'iconamoon:eye-thin' : 'iconamoon:eye-off'} onClick={handleTypeInput} />
        }
        {props.endIcon &&
          <S.IconStyled icon={props.endIcon} />
        }
      </S.BoxStyled>
      {props.hyperText &&
        <S.LabelStyled
          htmlFor={props.id}
          color={
            props.error ? theme.colors.error.primary : theme.colors.cinza_escuro
          }
        >
          {props.hyperText}
        </S.LabelStyled>
      }
    </S.BoxMainStyled>
  );
}
