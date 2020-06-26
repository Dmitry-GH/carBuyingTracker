export const COLORS: ColorsType_I = {
  main_background: {
    dark: 'rgba(54, 64, 71, 1)',
    light: 'rgba(201, 191, 184, 1)',
  },
  second_background: {
    dark: 'rgba(26, 35, 43, 1)',
    light: 'rgba(229, 220, 212, 1)',
  },
  second_background_transparent: {
    dark: 'rgba(26, 35, 43, 0.7)',
    light: 'rgba(229, 220, 212, 0.7)',
  },
  main_text: {
    dark: 'rgba(186, 186, 186, 1)',
    light: 'rgba(69, 69, 69, 1)',
  },
  main_text_contrast: {
    dark: 'rgba(255, 255, 255, 1)',
    light: 'rgba(26, 35, 43, 1)',
  },
  main_text_white: {
    dark: 'rgba(255, 255, 255, 1)',
    light: 'rgba(255, 255, 255, 1)',
  },
  primary: {
    dark: 'rgba(224, 97, 14, 1)',
    light: 'rgba(31, 158, 241, 1)',
  },
  primary_dark: {
    dark: 'rgba(179, 78, 13, 1)',
    light: 'rgba(22, 94, 142, 1)',
  },
  secondary: {
    dark: 'rgba(31, 158, 241, 1)',
    light: 'rgba(224, 97, 14, 1)',
  },
  info: {
    dark: 'rgba(96, 106, 125, 1)',
    light: 'rgba(96, 106, 125, 1)',
  },
  success: {
    dark: 'rgba(39, 100, 46, 1)',
    light: 'rgba(39, 100, 46, 1)',
  },
  error: {
    dark: 'rgba(152, 22, 29, 1)',
    light: 'rgba(152, 22, 29, 1)',
  },
  warning: {
    dark: 'rgba(250, 173, 20, 1)',
    light: 'rgba(250, 173, 20, 1)',
  },
  disabled: {
    dark: 'rgba(96, 96, 96, 1)',
    light: 'rgba(159, 159, 159, 1)',
  },
  divider: {
    dark: 'rgba(229, 220, 212, 1)',
    light: 'rgba(26, 35, 43, 1)',
  },
  greyOutline: {
    dark: 'rgba(187, 187, 187, 1)',
    light: 'rgba(187, 187, 187, 1)',
  },
  searchBg: {
    dark: 'rgba(48, 51, 55, 1)',
    light: 'rgba(48, 51, 55, 1)',
  },
  grey0: {
    dark: 'rgba(57, 62, 66, 1)',
    light: 'rgba(57, 62, 66, 1)',
  },
  grey1: {
    dark: 'rgba(67, 72, 77, 1)',
    light: 'rgba(67, 72, 77, 1)',
  },
  grey2: {
    dark: 'rgba(94, 105, 119, 1)',
    light: 'rgba(94, 105, 119, 1)',
  },
  grey3: {
    dark: 'rgba(134, 147, 158, 1)',
    light: 'rgba(134, 147, 158, 1)',
  },
  grey4: {
    dark: 'rgba(189, 198, 207, 1)',
    light: 'rgba(189, 198, 207, 1)',
  },
  grey5: {
    dark: 'rgba(225, 232, 238, 1)',
    light: 'rgba(225, 232, 238, 1)',
  },
};

export default (theme: string = 'dark') => {
  let SingleTheme: ColorsThemeType = {};

  for (let key in COLORS) {
    SingleTheme[key] = COLORS[key][theme];
  }

  SingleTheme.currentTheme = theme;

  return SingleTheme;
};
