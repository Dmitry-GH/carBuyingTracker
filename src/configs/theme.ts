export const COLORS: ColorsType_I = {
  main_background: {
    dark: 'rgba(54, 64, 71, 1)',
    light: 'rgba(201, 191, 184, 1)',
  },
  second_background: {
    dark: 'rgba(26, 35, 43, 1)',
    light: 'rgba(229, 220, 212, 1)',
  },
  main_highlight: {
    dark: 'rgba(96, 96, 96, 1)',
    light: 'rgba(159, 159, 159, 1)',
  },
  second_highlight: {
    dark: 'rgba(149, 149, 149, 1)',
    light: 'rgba(106, 106, 106, 1)',
  },
  main_accent: {
    dark: 'rgba(224, 97, 14, 1)',
    light: 'rgba(31, 158, 241, 1)',
  },
  main_text: {
    dark: 'rgba(186, 186, 186, 1)',
    light: 'rgba(69, 69, 69, 1)',
  },
  main_text_contrast: {
    dark: 'rgba(229, 220, 212, 1)',
    light: 'rgba(26, 35, 43, 1)',
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
  primary: {
    dark: 'rgba(224, 97, 14, 1)',
    light: 'rgba(31, 158, 241, 1)',
  },
  secondary: {
    dark: '#8F0CE8',
    light: '#8F0CE8',
  },
  grey0: {
    dark: '#393e42',
    light: '#393e42',
  },
  grey1: {
    dark: '#43484d',
    light: '#43484d',
  },
  grey2: {
    dark: '#5e6977',
    light: '#5e6977',
  },
  grey3: {
    dark: '#86939e',
    light: '#86939e',
  },
  grey4: {
    dark: '#bdc6cf',
    light: '#bdc6cf',
  },
  grey5: {
    dark: '#e1e8ee',
    light: '#e1e8ee',
  },
  greyOutline: {
    dark: '#bbb',
    light: '#bbb',
  },
  searchBg: {
    dark: '#303337',
    light: '#303337',
  },
  warning: {
    dark: '#faad14',
    light: '#faad14',
  },
  disabled: {
    dark: 'rgba(96, 96, 96, 1)',
    light: 'rgba(159, 159, 159, 1)',
  },
  divider: {
    dark: 'rgba(229, 220, 212, 1)',
    light: 'rgba(26, 35, 43, 1)',
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
