import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import reducer from './rootReducer';
import saga from './rootSaga';

export default () => {
  const persistConfig = {
    key: 'rootKeyPersist',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  };

  const persistedReducer = persistReducer(persistConfig, reducer);
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  let persistor = persistStore(store);

  sagaMiddleware.run(saga);
  return {store, persistor};
};
