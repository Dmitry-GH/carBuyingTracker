import {combineReducers} from 'redux';

import user from './auth/reducers';

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
