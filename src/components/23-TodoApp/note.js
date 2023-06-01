import React from "react";
import { Card } from "react-bootstrap";
import { IoMdTrash } from "react-icons/io";
import { BsSquare } from "react-icons/bs";

const Note = (props) => {
  const { deleteNote, id, message, isDone, upDateNote } = props;
  return (
    <Card border="primary" style={{ width: "300px" }}>
      <Card.Header>
        <BsSquare
          className="me-3"
          onClick={() => {
            upDateNote(id);
          }}
        />
        <IoMdTrash
          color="red"
          onClick={() => {
            deleteNote(id);
          }}
        />
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {message}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Note;
