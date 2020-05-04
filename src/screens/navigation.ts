import Navigation from '../services/Navigation';
import {HOME, SIGNIN, SIGNUP, SETTINGS} from './index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const goToAuth = () =>
  Promise.all([
    Icon.getImageSource('login', 25),
    Icon.getImageSource('account-plus', 25),
  ]).then(([signInImg, signUpImg]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'AUTH_BOTTOM_TABS',
          children: [
            {
              stack: {
                id: 'SIGN_IN_TAB',
                children: [
                  {
                    component: {
                      id: 'SIGN_IN',
                      name: SIGNIN,
                    },
                  },
                ],
                options: {
                  topBar: {
                    title: {
                      fontSize: 30,
                      text: 'Sign In',
                    },
                  },
                  bottomTab: {
                    text: 'Sign In',
                    icon: signInImg,
                  },
                },
              },
            },
            {
              stack: {
                id: 'SIGN_UP_TAB',
                children: [
                  {
                    component: {
                      id: 'SIGN_UP',
                      name: SIGNUP,
                    },
                  },
                ],
                options: {
                  topBar: {
                    title: {
                      fontSize: 30,
                      text: 'Sign Up',
                    },
                  },
                  bottomTab: {
                    text: 'Sign Up',
                    icon: signUpImg,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });

export const goHome = () =>
  Promise.all([
    Icon.getImageSource('login', 25),
    Icon.getImageSource('account-plus', 25),
  ]).then(([signInImg, signUpImg]) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'MAIN_BOTTOM_TABS',
          children: [
            {
              stack: {
                id: 'HOME_TAB',
                children: [
                  {
                    component: {
                      id: 'HOME',
                      name: HOME,
                    },
                  },
                ],
                options: {
                  topBar: {
                    title: {
                      fontSize: 30,
                      text: 'HOME',
                    },
                  },
                  bottomTab: {
                    text: 'HOME',
                    icon: signInImg,
                  },
                },
              },
            },
            {
              stack: {
                id: 'SETTINGS_TAB',
                children: [
                  {
                    component: {
                      id: 'SETTINGS',
                      name: SETTINGS,
                    },
                  },
                ],
                options: {
                  topBar: {
                    title: {
                      fontSize: 30,
                      text: 'SETTINGS',
                    },
                  },
                  bottomTab: {
                    text: 'SETTINGS',
                    icon: signUpImg,
                  },
                },
              },
            },
          ],
        },
      },
    });
  });
