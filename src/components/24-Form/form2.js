import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  console.log(formData);

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adınız</Form.Label>
          <Form.Control
            type="text"
            placeholder="Adınız"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Soyadınız</Form.Label>
          <Form.Control
            type="text"
            placeholder="Soyadınız"
            value={formData.surname}
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            type="number"
            placeholder="Telefon"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Form2;
