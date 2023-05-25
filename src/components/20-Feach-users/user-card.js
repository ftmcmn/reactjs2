import React from "react";
import { Card } from "react-bootstrap";

const UserCard = (props) => {
  const { id, avatar, firtName, lastName, email } = props;
  return (
    <Card>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>
          {firtName} {lastName}
        </Card.Title>
        <Card.Subtitle>{email}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
