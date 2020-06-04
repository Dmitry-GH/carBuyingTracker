export const CHANGE_THEME = 'CHANGE_THEME';

export const changeAppTheme = (
  themeVariant: ChangeAppTheme['themeVariant'],
): ChangeAppTheme => ({
  type: CHANGE_THEME,
  themeVariant,
});
