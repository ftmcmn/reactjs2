import React from "react";
import Welcome from "./welcome";

const Gretings = () => {
  return (
    <div>
      <h1>Gretings component</h1>
      <Welcome name="John" lastname="Doe" />
      <Welcome name="Jack" lastname="Mer" />
    </div>
  );
};

export default Gretings;
