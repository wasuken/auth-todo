import React from "react";


export class InputTodo {
  title: string;
  description: string;
  limit: number;
  status: number;
}

export class Todo extends InputTodo {
  id: number;
}

export const todoListInit: Todo = { id: 0, title: "", limit: 0, status: 0 }

export interface TodoListReducerAction {
  type: string;
  todo: Todo;
}

export interface TodoProps {
  list: Todo[];
}

interface ITodoListContextList {
  list: Todo[];
  setList: (list: Todo[]) => void;
  add: (todo: Todo[]) => void;
  remove: (id: number) => void;
  update: (id: number, todo: Todo) => void;
}
interface ITodoListContextInput {
  todo: Todo;
  setTodo: (td: Todo) => void;
}

export interface ITodoListContext {
  list: ITodoListContextList;
  input: ITodoListCOntextInput;
}

export type TodoState = {
  list: Todo[];
  input: TodoInput;
};

export const statusMap = ["todo", "doing", "doit"];
