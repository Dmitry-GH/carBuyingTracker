import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './configureStore';
import {ThemeProvider as ThemeProviderRNE} from 'react-native-elements';
import {ThemeProvider as ThemeProviderSC} from 'styled-components/native';
import {StyledSafeAreaView} from '../configs/stylesGlobal';
export const {store, persistor} = configureStore();

export const withReduxProvider = (C: React.FC) => (props: any) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProviderRNE theme={{colors: store.getState().theme}}>
        <ThemeProviderSC theme={store.getState().theme}>
          <StyledSafeAreaView>
            <C {...props} />
          </StyledSafeAreaView>
        </ThemeProviderSC>
      </ThemeProviderRNE>
    </PersistGate>
  </Provider>
);
