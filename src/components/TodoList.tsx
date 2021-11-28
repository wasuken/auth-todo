import React, { useState, useContext } from "react";
import {
  Button,
  Badge,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { statusMap, TodoProps, todoListInit, Todo } from "../types/todo";
import { TodoListContext } from "../context";
import TodoEdit from "./TodoEdit";

function TodoList(props: TodoProps) {
  const utl = useContext(TodoListContext);
  const [todo, setTodo] = useState(todoListInit);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleUpdateBtn(t: Todo) {
    setShow(true);
    setTodo(t);
  }
  return (
    <>
      <ListGroup>
        {props.list.map((t) => (
          <ListGroup.Item>
            <Badge bg="primary" style={{ margin: "10px" }}>
              {statusMap[t.status] ? statusMap[t.status] : "unknown"}
            </Badge>
            <Badge bg="success" style={{ margin: "10px" }}>
              {t.title}
            </Badge>
            <Badge bg="info" style={{ margin: "10px" }}>
              {t.limit}
            </Badge>
            <Button variant="danger" onClick={() => utl.list.remove(t.id)}>
              削除
            </Button>
            <Button variant="warning" onClick={() => handleUpdateBtn(t)}>
              更新
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <TodoEdit show={show} todo={todo} handleClose={handleClose} />
    </>
  );
}

export default TodoList;
