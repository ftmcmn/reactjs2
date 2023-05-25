import React, { useState } from "react";
import { Button } from "react-bootstrap";

const NoteForm = (props) => {
  const [todo, setTodo] = useState("");
  return (
    <div>
      <div className="mt-3">Title</div>

      <input
        type="text"
        name=""
        id=""
        className="mt-3 d-block"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button variant="primary" className="mt-3" onClick={props.arrYap(todo)}>
        Create Note
      </Button>
    </div>
  );
};

export default NoteForm;
