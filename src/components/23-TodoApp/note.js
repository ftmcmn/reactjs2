import React from "react";
import { Card } from "react-bootstrap";
import { IoMdTrash } from "react-icons/io";
import { BsSquare } from "react-icons/bs";

const Note = () => {
  return (
    <Card border="primary" style={{ width: "300px" }}>
      <Card.Header>
        <BsSquare className="me-3" />
        <IoMdTrash color="red" />
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Note;
