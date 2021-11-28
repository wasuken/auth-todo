import { useReducer } from "react";
import { Todo, InputTodo, TodoListReducerAction, TodoState } from "../types/todo";

const initialState: InputTodo = {
  title: "",
  description: "",
  limit: 0,
  status: 0,
};

export function todoListReducer(state: TodoState, action: TodoListReducerAction) {
  switch (action.type) {
    case "add":
      fetch("/api/todo", {
        method: "POST",
      });
    case "remove":
      fetch(`/api/todo/${action.todo.id}`, {
        method: "DELETE",
      });
    case "update":
      fetch(`/api/todo/${action.todo.id}`, {
        method: "PUT",
      });
    default:
      throw new Error();
  }
}
