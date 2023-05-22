import React, { useState } from "react";
import { Button } from "react-bootstrap";

const UseEffect = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <h1>{message}</h1>
      <h1>{error}</h1>
      <Button variant="info" onClick={() => setMessage("Hello")}>
        Set Message
      </Button>
      <Button variant="danger" onClick={() => setError("Some errors")}>
        Throw Error
      </Button>
    </div>
  );
};

export default UseEffect;
