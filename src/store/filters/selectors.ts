export const getCategoryFromStore = (state: GlobalState) =>
  state.user.userCar.category?.value;

export const getMarkFromStore = (state: GlobalState) =>
  state.user.userCar.mark?.value;
