import {TodosAction} from "../types/todos";

let nextTodoId = 0;

export const addTodo = (text: string): TodosAction => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = (id: number): TodosAction => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
