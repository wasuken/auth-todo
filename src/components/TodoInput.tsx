import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { TodoListContext } from "../context";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

function TodoInput(props) {
  const utl = useContext(TodoListContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [st, setSt] = useState(0);

  function handleAddBtn() {
    const todo: Todo = {
      title: title,
      description: desc,
      limit: 0, // TODO: 後で
      status: st,
      id: uuidv4(),
    };
    utl.list.add(todo);
    setTitle("");
    setDesc("");
    setSt(0)
  }
  function handleSelectChange(e: React.FormEvent<HTMLSelectElement>) {
    const vi = parseInt(e.currentTarget.value);
    setSt(vi);
  }
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          size="lg"
          type="text"
          placeholder="todo"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          value={desc}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setDesc(e.target.value)
          }
          row="3"
          size="lg"
          type="textarea"
          placeholder="description"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>status</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option value="0">todo</option>
          <option value="1">doing</option>
          <option value="2">doit</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={handleAddBtn}>
        登録
      </Button>
    </>
  );
}

export default TodoInput;
