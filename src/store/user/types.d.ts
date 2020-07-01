interface UserInfo {
  userName: string;
  uid: string;
  pending: boolean;
  error: Error | null;
  isLoggedIn: boolean;
  userCar: UserCar;
  collectedMoney: number;
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
  isYearRange: boolean;
  average_price: null | UserAveragePrice;
  average_price_timestamp: null | number;
  average_price_type: 'interquartile' | 'arithmetic';
}

interface UserToggleAvaragePriceType {
  type: string;
  average_price_type: UserCar['average_price_type'];
}

interface UserAveragePriceAction {
  type: string;
}

interface IsYearRange {
  type: string;
  isYearRange: boolean;
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
  years: {
    year_from: string;
    year_to: string;
  };
}

interface UserSetCollectedMoney {
  type: string;
  collectedMoney: number;
}

type UserActionTypes_U =
  | UserLoginAction
  | UserLoginActionFailure
  | UserLoginActionSuccess
  | UserCarSetAction
  | UserCarSetYearAction
  | UserAveragePriceAction
  | UserAveragePriceActionSuccess
  | UserAveragePriceActionFailure
  | UserSetCollectedMoney
  | IsYearRange
  | UserToggleAvaragePriceType; // Union Types

type UserActionTypes_I = UserLoginAction &
  UserLoginActionFailure &
  UserLoginActionSuccess &
  UserCarSetAction &
  UserCarSetYearAction &
  UserAveragePriceAction &
  UserAveragePriceActionSuccess &
  UserAveragePriceActionFailure &
  UserSetCollectedMoney &
  IsYearRange &
  UserToggleAvaragePriceType; // Intersection Types
