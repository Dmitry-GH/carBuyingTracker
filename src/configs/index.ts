export const APP_NAME = 'carBuyingTracker';

interface ObjectWithStringKey {
  [key: string]: any;
}
type ColorsType = ObjectWithStringKey;

export const COLORS: ColorsType = {
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
};

export const getTheme = (theme: string = 'dark') => {
  let SingleTheme: ColorsType = {};

  for (let key in COLORS) {
    SingleTheme[key] = COLORS[key][theme];
  }

  SingleTheme.currentTheme = theme;

  return SingleTheme;
};
