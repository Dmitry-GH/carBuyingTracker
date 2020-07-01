import Navigation from '../services/Navigation';
import {
  HOME,
  HOME_EDIT,
  SIGNIN,
  SIGNUP,
  SETTINGS,
  MODAL,
  OVERLAY,
  ACTIVITY_INDICATOR,
} from './index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type ModalProps = {
  title: string;
  type: string;
};

export const ActivityIndicator = (props: ActivityIndicatorProps) => {
  if (props.action) {
    Navigation.showOverlay({
      component: {
        id: 'ACTIVITY_INDICATOR',
        name: ACTIVITY_INDICATOR,
        options: {
          layout: {
            componentBackgroundColor: 'transparent',
          },
          overlay: {
            interceptTouchOutside: true,
          },
        },
        passProps: {
          action: props.action,
        },
      },
    });
  } else {
    Navigation.dismissOverlay('ACTIVITY_INDICATOR');
  }
};

export const openOverlay = (props: OverlayComponentProps) =>
  Navigation.showOverlay({
    component: {
      id: 'OVERLAY',
      name: OVERLAY,
      options: {
        layout: {
          componentBackgroundColor: 'transparent',
        },
        overlay: {
          interceptTouchOutside: true,
        },
      },
      passProps: {
        title: props.title,
        userCar: props.userCar,
      },
    },
  });

export const openModal = (props: ModalProps) =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: 'MODAL',
            name: MODAL,
            options: {
              topBar: {
                title: {
                  fontSize: 30,
                  text: props.title,
                },
              },
            },
            passProps: {
              type: props.type,
            },
          },
        },
      ],
    },
  });

export const openHomeEditModal = () =>
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            id: 'HOME_EDIT',
            name: HOME_EDIT,
            options: {
              topBar: {
                title: {
                  fontSize: 30,
                  text: 'Car select',
                },
              },
            },
          },
        },
      ],
    },
  });

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
  Promise.all([Icon.getImageSource('car', 25), Icon.getImageSource('settings', 25)]).then(
    ([carImg, settingsImg]) => {
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
                        text: 'Home',
                      },
                    },
                    bottomTab: {
                      text: 'Home',
                      icon: carImg,
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
                        text: 'Settings',
                      },
                    },
                    bottomTab: {
                      text: 'Settings',
                      icon: settingsImg,
                    },
                  },
                },
              },
            ],
          },
        },
      });
    },
  );
