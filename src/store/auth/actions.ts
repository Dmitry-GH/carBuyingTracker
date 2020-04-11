export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLoginRequest = (): UserLoginAction => ({
  type: USER_LOGIN_REQUEST,
});

export const userLogout = (): UserLogoutAction => ({
  type: USER_LOGOUT,
});

export const userLoginSuccess = (
  accessToken: string,
  idToken: string,
  userData: UserDataGoogle,
): UserLoginActionSuccess => ({
  type: USER_LOGIN_SUCCESS,
  accessToken,
  idToken,
  userData,
});

export const userLoginFailure = (error: Error): UserLoginActionFailure => ({
  type: USER_LOGIN_FAILURE,
  error,
});
