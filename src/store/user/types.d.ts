interface UserInfo {
  userName: string;
  uid: string;
  pending: boolean;
  error: Error | null;
  isLoggedIn: boolean;
  userCar: UserCar;
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

interface UserCar {
  [index: string]: any;
  changed: boolean;
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
  average_price: null | UserAveragePrice;
  average_price_timestamp: null | number;
}

interface UserAveragePriceAction {
  type: string;
}

interface UserAveragePriceActionSuccess {
  type: string;
  averagePrice: UserAveragePrice;
}

interface UserAveragePriceActionFailure {
  type: string;
  error: Error | null;
}

interface UserAveragePrice {
  total: 17;
  arithmeticMean: number;
  interQuartileMean: number;
  percentiles: {
    1.0: number;
    5.0: number;
    25.0: number;
    50.0: number;
    75.0: number;
    95.0: number;
    99.0: number;
  };
  prices: Array;
  classifieds: Array;
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
  | UserCarSetYearAction
  | UserAveragePriceAction
  | UserAveragePriceActionSuccess
  | UserAveragePriceActionFailure; // Union Types

type UserActionTypes_I = UserLoginAction &
  UserLoginActionFailure &
  UserLoginActionSuccess &
  UserCarSetAction &
  UserCarSetYearAction &
  UserAveragePriceAction &
  UserAveragePriceActionSuccess &
  UserAveragePriceActionFailure; // Intersection Types
