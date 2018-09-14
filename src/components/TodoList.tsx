import React from "react";
import Todo from "./Todo";
import {Todo as TodoModel} from "../types/todos";

export type Props = {
  todos: TodoModel[];
  onTodoClick: (id: number) => void;
};

const TodoList = ({todos, onTodoClick}: Props) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
