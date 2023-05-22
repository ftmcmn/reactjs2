import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = (props) => {
  const { name, price, desc, image } = props;

  const addToCart = () => {
    alert(`${name} added to cart`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button variant="warning" onClick={addToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
