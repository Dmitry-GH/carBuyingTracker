/**
 * @format
 */

import Navigation from './src/services/Navigation';
import {googleAuthConfig} from './src/utils/auth';
import {App} from './src/App';
import {initializeDefaultOptions} from './src/services/Options';

googleAuthConfig();

Navigation.events().registerAppLaunchedListener(async () => {
  initializeDefaultOptions();
  App();
});
