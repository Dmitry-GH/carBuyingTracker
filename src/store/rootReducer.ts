import {combineReducers} from 'redux';

import user from './user/reducers';
import theme from './theme/reducers';
import filters from './filters/reducers';

const rootReducer = combineReducers({
  user,
  theme,
  filters,
});

export default rootReducer;
