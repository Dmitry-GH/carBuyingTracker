export const CATEGORY_REQUEST = 'CATEGORY_REQUEST';
export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_FAILURE = 'CATEGORY_FAILURE';
export const MARK_REQUEST = 'MARK_REQUEST';
export const MARK_SUCCESS = 'MARK_SUCCESS';
export const MARK_FAILURE = 'MARK_FAILURE';
export const MODEL_REQUEST = 'MODEL_REQUEST';
export const MODEL_SUCCESS = 'MODEL_SUCCESS';
export const MODEL_FAILURE = 'MODEL_FAILURE';

export const getCategory = (): ActionRequest => ({
  type: CATEGORY_REQUEST,
});

export const getCategorySuccess = (
  category: FiltersResponse[],
): ActionSuccessCategory => ({
  type: CATEGORY_SUCCESS,
  category,
});

export const getCategoryFailure = (error: Error): ActionFailure => ({
  type: CATEGORY_FAILURE,
  error,
});

export const getMark = (): ActionRequest => ({
  type: MARK_REQUEST,
});

export const getMarkSuccess = (mark: FiltersResponse[]): ActionSuccessMark => ({
  type: MARK_SUCCESS,
  mark,
});

export const getMarkFailure = (error: Error): ActionFailure => ({
  type: MARK_FAILURE,
  error,
});

export const getModel = (): ActionRequest => ({
  type: MODEL_REQUEST,
});

export const getModelSuccess = (
  model: FiltersResponse[],
): ActionSuccessModel => ({
  type: MODEL_SUCCESS,
  model,
});

export const getModelFailure = (error: Error): ActionFailure => ({
  type: MODEL_FAILURE,
  error,
});
