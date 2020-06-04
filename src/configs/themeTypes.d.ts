interface ObjectWithStringKey {
  [index: string]: any;
}

type ColorsThemeType = ObjectWithStringKey;

interface ColorsObject {
  [index: string]: any;
  dark: string;
  light: string;
}

/**************************************
 ** Colors used in Raw Colors object **
 **************************************/

interface Colors {
  main_background: ColorsObject;
  second_background: ColorsObject;
  main_highlight: ColorsObject;
  second_highlight: ColorsObject;
  main_accent: ColorsObject;
  main_text: ColorsObject;
  info: ColorsObject;
  success: ColorsObject;
  error: ColorsObject;
  primary: ColorsObject;
  secondary: ColorsObject;
  grey0: ColorsObject;
  grey1: ColorsObject;
  grey2: ColorsObject;
  grey3: ColorsObject;
  grey4: ColorsObject;
  grey5: ColorsObject;
  greyOutline: ColorsObject;
  searchBg: ColorsObject;
  warning: ColorsObject;
  disabled: ColorsObject;
  divider: ColorsObject;
}

/**************************************************************
 **ThemeColors - output from getColors() used in redux store **
 *************************************************************/

interface ThemeColors {
  main_background?: string;
  second_background?: string;
  main_highlight?: string;
  second_highlight?: string;
  main_accent?: string;
  main_text?: string;
  info?: string;
  success?: string;
  error?: string;
  primary?: string;
  secondary?: string;
  grey0?: string;
  grey1?: string;
  grey2?: string;
  grey3?: string;
  grey4?: string;
  grey5?: string;
  greyOutline?: string;
  searchBg?: string;
  warning?: string;
  disabled?: string;
  divider?: string;
  currentTheme?: string;
}

type ThemeType_I = ThemeColors & ColorsThemeType;
type ColorsType_I = Colors & ColorsThemeType;
