export const CHANGE_THEME = 'CHANGE_THEME';

export const changeAppTheme = (themeVariant: string): ChangeAppTheme => ({
  type: CHANGE_THEME,
  themeVariant,
});
