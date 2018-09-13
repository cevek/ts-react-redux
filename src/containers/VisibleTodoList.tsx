import {connect} from "react-redux";

import {toggleTodo} from "../actions/todos";
import {visibleTodosSelector} from "../selectors";
import TodoList from "../components/TodoList";

import {State, Dispatch} from "../types";
import {Id} from "../types/todos";

const mapStateToProps = (state: State) => {
  return {
    todos: visibleTodosSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTodoClick(id: Id) {
      dispatch(toggleTodo(id));
    }
  };
};

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(TodoList);
