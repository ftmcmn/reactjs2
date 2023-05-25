import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteForm from "./noteForm";
import Notes from "./notes";

const ToDoApp = () => {
  const [title, setTitle] = useState([]);

  const arrYap = (todo) => {
    setTitle((prev) => [...prev, title]);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <NoteForm arrYap={arrYap} />
        </Col>
        <Col md={8}>
          <Notes />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
