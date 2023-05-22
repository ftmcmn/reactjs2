import React, { useState } from "react";
import data from "./people.json";
import PersonCard from "./personCard";
import { Button, Container } from "react-bootstrap";

const Birthday = () => {
  const [people, setPeople] = useState(data);

  const deletePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <Container>
      <h1>Bugün Doğanlar</h1>
      <p>Bugün doğan {people.length} kişi bulundu.</p>

      {people.map((person) => {
        return (
          <PersonCard key={person.id} {...person} deletePerson={deletePerson} />
        );
      })}

      <Button variant="danger" onClick={() => setPeople([])}>
        Temizle
      </Button>
      <Button variant="primary" onClick={() => setPeople(data)}>
        Tekrar Getir
      </Button>
    </Container>
  );
};

export default Birthday;
