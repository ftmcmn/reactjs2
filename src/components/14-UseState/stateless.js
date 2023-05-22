import React from "react";
import { Button } from "react-bootstrap";

const Stateless = () => {
  let mode = "light";

  let className = "";

  const changeMode = (m) => {
    mode = m;

    if (mode === "dark") {
      className = "bg-dark text-light p-5";
    } else {
      className = "bg-light text-light p-5";
    }
    document.getElementById("switch").setAttribute("class", className);
  };

  return (
    <div id="switch" className={className}>
      <Button onClick={() => changeMode("dark")}>Dark Mode</Button>
      <Button onClick={() => changeMode("light")}>Light Mode</Button>
    </div>
  );
};

export default Stateless;
