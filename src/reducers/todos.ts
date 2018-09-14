import {Action} from "../types";
import {Todo} from "../types/todos";

const todos = (state: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        t => (t.id !== action.id ? t : {...t, completed: !t.completed})
      );
    default:
      return state;
  }
};

export default todos;
