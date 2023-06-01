import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const NoteForm = ({ createNote }) => {
  const [message, setMessage] = useState("");
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ToDo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter ToDo"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button
        variant="warning"
        type="submit"
        onClick={(e) => {
          e.preventDefault();

          createNote(message);

          setMessage("");
        }}
      >
        Add
      </Button>
    </Form>
  );
};

export default NoteForm;
