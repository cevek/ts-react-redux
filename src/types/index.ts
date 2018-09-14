import {Dispatch as ReduxDispatch} from "redux";
import reducers from "../reducers";
import {addTodo, toggleTodo} from "../actions/todos";
import { setVisibilityFilter } from "../actions/visibilityFilter";

export type State = ReturnType<typeof reducers>;
export type ReduxInitAction = {type: "@@INIT"};
export type Action =
  | ReduxInitAction
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof setVisibilityFilter>
export type Dispatch = ReduxDispatch<Action>;

export type VisibilityFilter = "SHOW_ALL" | "SHOW_ACTIVE" | "SHOW_COMPLETED";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
