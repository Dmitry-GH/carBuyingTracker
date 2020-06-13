import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_REDIRECT_TO_REGISTER,
  USER_CAR_SET,
  USER_CAR_SET_YEAR,
} from './actions';

const initialState: UserState = {
  userName: 'userName',
  uid: '',
  userCar: {
    category: null,
    mark: null,
    model: null,
    year_from: null,
    year_to: null,
  },
  pending: false,
  error: null,
  isLoggedIn: false,
};

const user = (state = initialState, action: UserActionTypes_I): UserState => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
        isLoggedIn: false,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        isLoggedIn: true,
        userName: action.userData.user.displayName,
        uid: action.userData.user.uid,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        isLoggedIn: false,
        error: action.error,
      };
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        pending: true,
        isLoggedIn: false,
        error: null,
      };

    case USER_CAR_SET: {
      switch (action.userCarData.type) {
        case 'category':
          return {
            ...state,
            userCar: {
              ...state.userCar,
              category: {
                name: action.userCarData.name,
                value: action.userCarData.value,
              },
              mark: null,
              model: null,
              year_from: null,
              year_to: null,
            },
          };
        case 'mark':
          return {
            ...state,
            userCar: {
              ...state.userCar,
              mark: {
                name: action.userCarData.name,
                value: action.userCarData.value,
              },
              model: null,
              year_from: null,
              year_to: null,
            },
          };
        case 'model':
          return {
            ...state,
            userCar: {
              ...state.userCar,
              model: {
                name: action.userCarData.name,
                value: action.userCarData.value,
              },
            },
          };
        default:
          return {
            ...state,
          };
      }
    }
    case USER_CAR_SET_YEAR: {
      switch (action.userCarData.type) {
        case 'year_from':
          return {
            ...state,
            userCar: {
              ...state.userCar,
              year_from: action.userCarData.value,
            },
          };
        case 'year_to':
          return {
            ...state,
            userCar: {
              ...state.userCar,
              year_to: action.userCarData.value,
            },
          };
        default:
          return {
            ...state,
          };
      }
    }
    case USER_LOGIN_REDIRECT_TO_REGISTER:
      return {
        ...initialState,
      };
    case USER_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default user;
