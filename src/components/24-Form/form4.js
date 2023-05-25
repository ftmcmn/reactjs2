import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Form4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  console.log(formData);

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (
        formData.name === "" ||
        formData.surname === "" ||
        formData.email === "" ||
        formData.phone === ""
      )
        throw new Error("Lütfen tüm alanları doldurunuz");
      setTimeout(() => {
        alert("Formunuz başarıyla gönderildi");
      }, 2000);
    } catch (error) {
      alert(error);
    }
  };
  //NoValidate: Formun kendi validasyonunu kullanmasını engeller
  return (
    <Container className="mt-5">
      <Form method="post" onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adınız</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Adınız"
            // value={formData.name}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Soyadınız</Form.Label>
          <Form.Control
            name="surname"
            type="text"
            placeholder="Soyadınız"
            //value={formData.surname}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            //value={formData.email}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            name="phone"
            type="number"
            placeholder="Telefon"
            //value={formData.phone}
            onChange={(e) => handleFormData(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Kaydet
        </Button>
      </Form>
    </Container>
  );
};

export default Form4;
