import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_REQUEST,
  USER_LOGOUT,
  USER_LOGIN_REDIRECT_TO_REGISTER,
  USER_CAR_SET,
} from './actions';

const initialState: UserState = {
  userName: 'userName',
  uid: '',
  userCar: {
    category: null,
    mark: null,
    model: null,
    year: null,
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
        case 'year':
          return {
            ...state,
            userCar: {
              ...state.userCar,
              year: {
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
