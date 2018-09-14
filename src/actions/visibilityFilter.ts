import {createAction} from "./createAction";
import {VisibilityFilter} from "../types";

export const setVisibilityFilter = createAction(
  "SET_VISIBILITY_FILTER",
  (filter: VisibilityFilter) => filter
);
