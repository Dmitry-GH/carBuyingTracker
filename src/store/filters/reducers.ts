import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
  MARK_REQUEST,
  MARK_SUCCESS,
  MARK_FAILURE,
} from './actions';

const initialState: FiltersState = {
  category: [],
  mark: [],
  pending: false,
  error: null,
};

const filters = (state = initialState, action: ActionTypes_I): FiltersState => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        category: action.category,
      };
    case CATEGORY_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case MARK_REQUEST:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case MARK_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        mark: action.mark,
      };
    case MARK_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default filters;
