import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://646c80537b42c06c3b2b5fe6.mockapi.io/users")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
          //setLoading(false);
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  return (
    <Container className="mt-5">
      {loading && <Spinner animation="border" variant="primary" />}
      <Row className="g-4">
        {users.map((user) => (
          <Col md={4} sm={6} lg={3} xl={2} key={user.id}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCards;
