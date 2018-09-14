export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Todos = Todo[];

export type TodosAction =
  | {type: "ADD_TODO"; id: number; text: string}
  | {type: "TOGGLE_TODO"; id: number};
