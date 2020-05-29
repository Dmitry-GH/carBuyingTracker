interface FiltersResponse {
  name: string;
  value: number;
}

interface Filters {
  [index: string]: any;
  pending: boolean;
  error: Error | null;
  category: FiltersResponse[];
  mark: FiltersResponse[];
  model: FiltersResponse[];
}

type FiltersState = Filters;

interface ActionRequest {
  type: string;
}

interface ActionSuccessCategory {
  type: string;
  category: FiltersResponse[];
}

interface ActionSuccessMark {
  type: string;
  mark: FiltersResponse[];
}

interface ActionSuccessModel {
  type: string;
  model: FiltersResponse[];
}

interface ActionFailure {
  type: string;
  error: Error | null;
}

type ActionTypes_U =
  | ActionRequest
  | ActionFailure
  | ActionSuccessCategory
  | ActionSuccessMark
  | ActionSuccessModel; // Union Types

type ActionTypes_I = ActionRequest &
  ActionFailure &
  ActionSuccessCategory &
  ActionSuccessMark &
  ActionSuccessModel; // Intersection Types
