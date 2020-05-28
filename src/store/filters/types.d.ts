type FiltersTypes = {
  [index: string]: FiltersResponse[];
};

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

interface ActionFailure {
  type: string;
  error: Error | null;
}

type ActionTypes_U =
  | ActionRequest
  | ActionFailure
  | ActionSuccessCategory
  | ActionSuccessMark; // Union Types

type ActionTypes_I = ActionRequest &
  ActionFailure &
  ActionSuccessCategory &
  ActionSuccessMark; // Intersection Types
