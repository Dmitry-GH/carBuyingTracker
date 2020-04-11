/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {googleAuthConfig} from './src/utils/auth';
import {App} from './src/App';

googleAuthConfig();

Navigation.events().registerAppLaunchedListener(() => {
  App();
});
