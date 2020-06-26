import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAILURE,
  MARK_REQUEST,
  MARK_SUCCESS,
  MARK_FAILURE,
  MODEL_REQUEST,
  MODEL_SUCCESS,
  MODEL_FAILURE,
} from './actions';

const initialState: FiltersState = {
  category: [],
  mark: [],
  model: [],
  pending: false,
  error: null,
};

const categoryENG = [
  {
    name: 'Cars',
    value: 1,
  },
  {
    name: 'Moto',
    value: 2,
  },
  {
    name: 'Water transport',
    value: 3,
  },
  {
    name: 'Special equipment',
    value: 4,
  },
  {
    name: 'Trailers',
    value: 5,
  },
  {
    name: 'Trucks',
    value: 6,
  },
  {
    name: 'Buses',
    value: 7,
  },
  {
    name: 'Motorhomes',
    value: 8,
  },
  {
    name: 'Air transport',
    value: 9,
  },
  {
    name: 'Agricultural machinery',
    value: 10,
  },
];

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
        category: action.category.length === 10 ? categoryENG : action.category,
        mark: [],
        model: [],
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
        model: [],
      };
    case MARK_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case MODEL_REQUEST:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case MODEL_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        model: action.model,
      };
    case MODEL_FAILURE:
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
