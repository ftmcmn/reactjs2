import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form1 = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);

  useEffect(() => {
    setNumber3(Number(number) + Number(number2));
  }, [number, number2]);

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            placeholder="sayı1"
            onChange={(e) => setNumber(e.target.value)}
            //value={number}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            placeholder="sayı2"
            onChange={(e) => setNumber2(e.target.value)}
            // value={number2}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="number" placeholder="sayı3" value={number3} />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form1;
