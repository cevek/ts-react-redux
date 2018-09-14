import {Action, Todo} from "../types";

const todos = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        t => (t.id !== action.payload ? t : {...t, completed: !t.completed})
      );
    default:
      return state;
  }
};

export default todos;
