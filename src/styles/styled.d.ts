import "styled-components";

interface IThemeColors {
  primary: string;
  secondary: string;
  tertiary: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      cinza_claro: string;
      cinza_escuro: string;
      white: string;
      success: IThemeColors;
      error: IThemeColors;
      warning: IThemeColors;
    };
    backGroundColor: {
      violeta: string;
      roxo: string;
      cinza: string;
    };
  }
}
