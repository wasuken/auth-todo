import React, { useState, useContext } from "react";
import {
  Button,
  Badge,
  Container,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { TodoProps } from "../types/todo";
import { TodoListContext } from "../context";

// 他でも参照されるようなら別ファイルへ抽出する。
const statusMap = ["todo", "doint", "doit"];

function TodoList(props: TodoProps) {
  const utl = useContext(TodoListContext);
  return (
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
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
