import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NoteForm from "./noteForm";
import Notes from "./notes";

const ToDoApp = () => {
  const [notes, setNodes] = useState([]);

  const createNote = (message) => {
    const note = {
      id: notes.length + 1,
      message,
      isDone: false,
    };
    setNodes([note, ...notes]);
  };

  const deleteNote = (id) => {
    setNodes(notes.filter((note) => note.id !== id));
  };

  const upDateNote = (id) => {
    notes.map((note) => {
      if (note.id === id) {
        note.isDone = !note.isDone;
      }
      return note;
    });
    setNodes([...notes]);
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <NoteForm createNote={createNote} />
        </Col>
        <Col md={8}>
          <Notes
            notes={notes}
            deleteNote={deleteNote}
            upDateNote={upDateNote}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ToDoApp;
