import React, { useState, createContext } from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

import { useTodoList } from "../context";
import { Todo } from "../types/todo";
import { todoListReducer, initialTodoListState } from "../reducer/todo"
import { TodoListContext } from "../context";

import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"


function Index() {
  const utl = useTodoList()
  return (
    <TodoListContext.Provider value={utl}>
      <Header />
      <Container>
        <TodoInput />
        <TodoList list={utl.list.list} />
      </Container>
    </TodoListContext.Provider>
  );
}

export default Index;
