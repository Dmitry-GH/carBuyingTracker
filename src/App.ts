import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {withReduxProvider} from './store';
import Screens from './screens/Screens';
import {INITIALIZING} from './screens/index';

// Register screens
Screens.forEach((C, key) => {
  Navigation.registerComponent(
    key,
    () => gestureHandlerRootHOC(withReduxProvider(C)),
    () => C,
  );
});

export const App = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: INITIALIZING,
      },
    },
  });
};
