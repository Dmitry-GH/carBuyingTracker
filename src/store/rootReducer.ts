import {combineReducers} from 'redux';

import user from './user/reducers';
import theme from './theme/reducers';

const rootReducer = combineReducers({
  user,
  theme,
});

export default rootReducer;
