type AppTheme = {
  [key: string]: string;
};

interface ChangeAppTheme {
  type: string;
  theme?: AppTheme;
  themeVariant: string;
}
