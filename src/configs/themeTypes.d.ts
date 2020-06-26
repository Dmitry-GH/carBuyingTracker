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
  second_background_transparent: ColorsObject;
  main_text: ColorsObject;
  main_text_contrast: ColorsObject;
  main_text_white: ColorsObject;
  primary: ColorsObject;
  primary_dark: ColorsObject;
  secondary: ColorsObject;
  info: ColorsObject;
  success: ColorsObject;
  error: ColorsObject;
  warning: ColorsObject;
  disabled: ColorsObject;
  divider: ColorsObject;
  greyOutline: ColorsObject;
  searchBg: ColorsObject;
  grey0: ColorsObject;
  grey1: ColorsObject;
  grey2: ColorsObject;
  grey3: ColorsObject;
  grey4: ColorsObject;
  grey5: ColorsObject;
}

/**************************************************************
 **ThemeColors - output from getColors() used in redux store **
 *************************************************************/

interface ThemeColors {
  main_background?: string;
  second_background?: string;
  second_background_transparent?: string;
  main_text?: string;
  main_text_contrast?: string;
  main_text_white?: string;
  primary?: string;
  primary_dark?: string;
  secondary?: string;
  info?: string;
  success?: string;
  error?: string;
  warning?: string;
  disabled?: string;
  divider?: string;
  greyOutline?: string;
  searchBg?: string;
  grey0?: string;
  grey1?: string;
  grey2?: string;
  grey3?: string;
  grey4?: string;
  grey5?: string;
  currentTheme?: string;
}

type ThemeType_I = ThemeColors & ColorsThemeType;
type ColorsType_I = Colors & ColorsThemeType;
