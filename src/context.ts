import { createContext, useState } from "react";
import { Todo, TodoInput, ITodoListContext } from "./types/todo";

export const TodoListContext = createContext<ITodoListCOntext>({
  list: {
    list: [],
    setList: () => {},
    add: (td: Todo) => {},
    remove: (id: number) => {},
    update: (id: number, todo: Todo) => {},
    clear: () => {},
  },
  input: {
    todo: { id: 0, title: "", limit: 0, status: 0 },
    setTodo: (td: Todo) => {},
  },
});

export const useTodoList = function (): TodoListContext {
  const [list, setList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({});
  function addList(todo: Todo) {
    setList([...list, todo]);
  }
  function removeList(id: number) {
    let nList = [...list];
    list.forEach((t, i) => {
      if (t.id === id) {
        nList.splice(i, 1);
      }
    });
    setList(nList);
  }
  function updateList(id: number, todo: Todo) {
    let nList = [...list];
    list.forEach((t, i) => {
      if (t.id === id) {
        nList[i] = todo;
      }
    });
    setList(nList);
  }
  function clearList() {
    setList([]);
  }

  return {
    list: {
      list: list,
      setList: setList,
      add: addList,
      remove: removeList,
      update: updateList,
      clear: clearList,
    },
    input: {
      todo: todo,
      setTodo: setTodo,
    },
  };
};
