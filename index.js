/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('carBuyingTracker', () => App);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'carBuyingTracker',
      },
    },
  });
});
