import {CHANGE_THEME} from './actions';
import {getTheme} from '../../configs';

const initialState: AppTheme = {
  ...getTheme(),
  currentTheme: 'dark',
};

const theme = (state = initialState, action: ChangeAppTheme): AppTheme => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...getTheme(action.themeVariant),
        currentTheme: action.themeVariant,
      };
    default:
      return state;
  }
};

export default theme;
