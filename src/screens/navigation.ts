import Navigation from '../services/Navigation';
import {HOME, SIGNIN, SIGNUP} from './index';

export const goToAuth = () =>
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [
          {
            component: {
              name: SIGNIN,
              options: {
                bottomTab: {
                  fontSize: 16,
                  text: 'Sign In',
                },
              },
            },
          },
          {
            component: {
              name: SIGNUP,
              options: {
                bottomTab: {
                  text: 'Sign Up',
                  fontSize: 16,
                },
              },
            },
          },
        ],
      },
    },
  });

export const goHome = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: HOME,
            },
          },
        ],
      },
    },
  });
