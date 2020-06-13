interface UserInfo {
  userName: string;
  uid: string;
  pending: boolean;
  error: Error | null;
  isLoggedIn: boolean;
  userCar: {
    [index: string]: any;
    category: null | {
      name: string;
      value: number;
    };
    mark: null | {
      name: string;
      value: number;
    };
    model: null | {
      name: string;
      value: number;
    };
    year_from: string | undefined | null;
    year_to: string | undefined | null;
  };
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

interface UserCarSetAction {
  type: string;
  userCarData: {
    type: string;
    name: string;
    value: number;
  };
}

interface UserCarSetYearAction {
  type: string;
  userCarData: {
    type: string;
    value: string;
  };
}

type UserActionTypes_U =
  | UserLoginAction
  | UserLoginActionFailure
  | UserLoginActionSuccess
  | UserCarSetAction
  | UserCarSetYearAction; // Union Types

type UserActionTypes_I = UserLoginAction &
  UserLoginActionFailure &
  UserLoginActionSuccess &
  UserCarSetAction &
  UserCarSetYearAction; // Intersection Types
