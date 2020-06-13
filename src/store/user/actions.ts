export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';

export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_REDIRECT_TO_REGISTER =
  'USER_LOGIN_REDIRECT_TO_REGISTER';
export const USER_CAR_SET = 'USER_CAR_SET';
export const USER_CAR_SET_YEAR = 'USER_CAR_SET_YEAR';

export const userLoginRequest = (): UserLoginAction => ({
  type: USER_LOGIN_REQUEST,
});

export const userRegisterRequest = (): UserLoginAction => ({
  type: USER_REGISTER_REQUEST,
});

export const userLogout = (): UserLogoutAction => ({
  type: USER_LOGOUT,
});

export const userLoginSuccess = (
  userData: UserDataGoogle,
): UserLoginActionSuccess => ({
  type: USER_LOGIN_SUCCESS,
  userData,
});

export const userLoginFailure = (error: Error): UserLoginActionFailure => ({
  type: USER_LOGIN_FAILURE,
  error,
});

export const userLoginRedirectToRegister = (): UserLoginAction => ({
  type: USER_LOGIN_REDIRECT_TO_REGISTER,
});

export const userCarSet = (
  type: string,
  name: string,
  value: number,
): UserCarSetAction => ({
  type: USER_CAR_SET,
  userCarData: {
    type,
    name,
    value,
  },
});

export const userCarSetYear = (
  type: string,
  value: string,
): UserCarSetYearAction => ({
  type: USER_CAR_SET_YEAR,
  userCarData: {
    type,
    value,
  },
});
