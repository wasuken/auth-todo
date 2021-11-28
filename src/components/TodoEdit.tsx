import { useState } from "react";

interface TodoEditProps {
  title: string;
  description: string;
  limit: number;
  status: number;
}

function TodoEdit(props: TodoEditProps){
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
          <option>please choise status</option>
          <option value="0">todo</option>
          <option value="1">doing</option>
          <option value="2">doit</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={handleAddBtn}>
        登録
      </Button>
    </>
  )
}
