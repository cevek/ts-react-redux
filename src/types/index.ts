import {Dispatch as ReduxDispatch} from "redux";

import {TodosAction} from "./todos";
import {VisibilityFilterAction} from "./visibilityFilter";

import reducers from "../reducers";
export type State = ReturnType<typeof reducers>;

export type ReduxInitAction = {type: "@@INIT"};
export type Action = ReduxInitAction | TodosAction | VisibilityFilterAction;
export type Dispatch = ReduxDispatch<Action>;
