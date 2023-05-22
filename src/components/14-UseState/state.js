import React, { useState } from "react";
import { Button } from "react-bootstrap";

const State = () => {
  const [mode, setMode] = useState("light");

  let className = "bg-light text-light p-5";

  if (mode === "dark") {
    className = "bg-dark text-light p-5";
  }

  return (
    <div className={className}>
      <Button onClick={() => setMode("dark")}>Dark Mode</Button>
      <Button onClick={() => setMode("light")}>Light Mode</Button>
    </div>
  );
};

export default State;
