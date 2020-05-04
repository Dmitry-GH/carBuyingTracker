interface UserInfo {
  userName: string;
  uid: string;
  pending: boolean;
  error: Error | null;
  isLoggedIn: boolean;
}

type UserState = UserInfo;

interface UserLoginAction {
  type: string;
}

interface UserDataGoogle {
  user: {
    displayName: string;
    uid: string;
  };
}

interface UserLoginActionSuccess {
  type: string;
  userData: UserDataGoogle;
}

interface UserLoginActionFailure {
  type: string;
  error: Error | null;
}

interface UserLogoutAction {
  type: string;
}

type UserActionTypes_U =
  | UserLoginAction
  | UserLoginActionFailure
  | UserLoginActionSuccess; // Union Types

type UserActionTypes_I = UserLoginAction &
  UserLoginActionFailure &
  UserLoginActionSuccess; // Intersection Types
