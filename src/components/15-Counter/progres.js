import React, { useState } from "react";
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Progres = () => {
  const [now, setNow] = useState(0);

  const handleClick = (type) => {
    if (type < 0) {
      type = 0;
    } else if (type > 100) {
      type = 100;
    }

    setNow(type);
  };

  return (
    <div>
      <ButtonGroup aria-label="Basic example" className="mt-5">
        <Button variant="primary" onClick={() => handleClick(now + 10)}>
          <AiOutlinePlus />
        </Button>
        <Button variant="danger" onClick={() => handleClick(now - 10)}>
          <AiOutlineMinus />
        </Button>
      </ButtonGroup>
      <ProgressBar now={now} label={`${now}%`} className="mt-5" />
    </div>
  );
};

export default Progres;
