import React, { useState } from "react";
import ChildComp from "./child-comp";

const ParentComp = () => {
  const [counter, setCounter] = useState(0);

  const handleCounter = (value) => {
    setCounter((prev) => prev + value);
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <ChildComp onCounter={handleCounter} />
    </div>
  );
};

export default ParentComp;
