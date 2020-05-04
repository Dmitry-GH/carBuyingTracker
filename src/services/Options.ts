import {Navigation} from 'react-native-navigation';
import {goHome} from '../screens/navigation';
import {store} from '../store';

export const initializeDefaultOptions = () => {
  let currentValue = false;
  let unsubscribe: Function;

  function handleChange() {
    let previousValue = currentValue;
    currentValue = store.getState()._persist.rehydrated;

    if (previousValue !== currentValue) {
      setDefaultOptions();
      unsubscribe();
    }
  }

  unsubscribe = store.subscribe(handleChange);
};

export const refreshAppTheme = () => {
  setDefaultOptions();
  goHome().then(() =>
    Navigation.mergeOptions('MAIN_BOTTOM_TABS', {
      bottomTabs: {
        currentTabId: 'SETTINGS_TAB',
      },
    }),
  );
};

const setDefaultOptions = () => {
  const theme = store.getState().theme;

  Navigation.setDefaultOptions({
    layout: {
      componentBackgroundColor: theme.main_background,
      orientation: ['portrait'],
    },
    statusBar: {
      backgroundColor: theme.second_background,
      style: theme.currentTheme === 'dark' ? 'light' : 'dark',
    },
    topBar: {
      title: {
        color: theme.main_text,
      },
      background: {
        color: theme.second_background,
      },
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      backgroundColor: theme.second_background,
    },
    bottomTab: {
      fontSize: 14,
      selectedFontSize: 14,
      iconColor: theme.main_highlight,
      selectedIconColor: theme.main_accent,
      textColor: theme.main_highlight,
      selectedTextColor: theme.main_accent,
    },
  });
};

export default setDefaultOptions;
