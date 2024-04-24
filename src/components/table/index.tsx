import * as S from "./styles";

interface ITable {
  headerName: string;
  props: string;
}

export interface IPropsTable {
  table: ITable[];
  values: any[];
}

export function Table(props: IPropsTable) {
  function handleBodyTabel(value: any) {
    return Object.keys(value).map((key, index) => (
      <S.ThBodyStyled key={key}>{value[props.table[index].props]}</S.ThBodyStyled>
    ));
  }

  return (
    <S.TableStyled>
      <S.TableHeadStyled>
        <S.TrHeaderStyled>
          {props.table.map((table) => (
            <S.ThHeaderStyled key={table.props}>
              {table.headerName}
            </S.ThHeaderStyled>
          ))}
        </S.TrHeaderStyled>
      </S.TableHeadStyled>
      <S.TableBodyStyled>
        {props.values.map((value) => (
          <S.TrBodyStyled key={value["id"]}>
            {handleBodyTabel(value)}
          </S.TrBodyStyled>
        ))}
      </S.TableBodyStyled>
    </S.TableStyled>
  );
}
