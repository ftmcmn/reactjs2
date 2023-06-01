import React from "react";
import Note from "./note";
import { Col, Container, Row } from "react-bootstrap";

const Notes = (props) => {
  const { notes, deleteNote, upDateNote } = props;
  return (
    <Container>
      <Row>
        {notes.map((note, index) => (
          <Col key={index}>
            <Note {...note} deleteNote={deleteNote} upDateNote={upDateNote} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Notes;
