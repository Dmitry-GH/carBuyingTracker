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
    year: null | {
      name: string;
      value: number;
    };
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

type UserActionTypes_U =
  | UserLoginAction
  | UserLoginActionFailure
  | UserLoginActionSuccess
  | UserCarSetAction; // Union Types

type UserActionTypes_I = UserLoginAction &
  UserLoginActionFailure &
  UserLoginActionSuccess &
  UserCarSetAction; // Intersection Types
