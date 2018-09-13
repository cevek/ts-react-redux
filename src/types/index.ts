import  { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import  { TodosState, TodosAction } from './todos';
import  {
  VisibilityFilterState,
  VisibilityFilterAction
} from './visibilityFilter';


export type State = TodosState & VisibilityFilterState;

export type ReduxInitAction = { type: '@@INIT' };

export type Action = ReduxInitAction | TodosAction | VisibilityFilterAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;
