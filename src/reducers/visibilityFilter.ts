import {Action, VisibilityFilter} from "../types";

const visibilityFilter = (
  state: VisibilityFilter = "SHOW_ALL",
  action: Action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export default visibilityFilter;
