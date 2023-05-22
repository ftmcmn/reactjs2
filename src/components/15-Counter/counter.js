import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = (type) => {
    if (type < 0) type = 0;
    setCount(type);
  };

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="info" onClick={() => handleClick(count - 1)}>
          <AiOutlineMinusCircle />
        </Button>
        <Button variant="light">{count}</Button>
        <Button variant="warning" onClick={() => handleClick(count + 1)}>
          <AiOutlinePlusCircle />
        </Button>
        <Button variant="danger" onClick={() => handleClick(0)}>
          <GrPowerReset />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;
