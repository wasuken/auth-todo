import { useEffect, useState, useContext } from "react";
import { Todo, statusMap } from "../types/todo";
import { TodoListContext } from "../context";
import { Modal, Form, Button } from "react-bootstrap";

interface TodoEditProps {
  todo: Todo;
  show: boolean;
  handleClose: () => void;
}

function TodoEdit(props: TodoEditProps) {
  const utl = useContext(TodoListContext);
  console.log(props.todo);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [st, setSt] = useState(0);
  useEffect(() => {
    setTitle(props.todo.title);
    setDesc(props.todo.description);
    setSt(props.todo.status);
  });

  function handleSelectChange(e: React.FormEvent<HTMLSelectElement>) {
    const vi = parseInt(e.currentTarget.value);
    setSt(vi);
  }

  function handleUpdateBtn() {
    const td: Todo = {
      title: title,
      description: desc,
      limit: 0, // TODO: 後で
      status: st,
      id: props.todo.id,
    };
    utl.list.update(props.todo.id, td);
    setTitle("");
    setDesc("");
    setSt(0);
    props.handleClose();
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>編集</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Form.Select value={st} onChange={handleSelectChange}>
              {statusMap.map((x, i) => (
                <option value={i}>{x}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            閉じる
          </Button>
          <Button variant="primary" onClick={handleUpdateBtn}>
            更新
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default TodoEdit;
