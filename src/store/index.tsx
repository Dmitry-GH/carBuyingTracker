import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './configureStore';

export const {store, persistor} = configureStore();

export const withReduxProvider = (C: React.FC) => (props: any) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <C {...props} />
    </PersistGate>
  </Provider>
);
