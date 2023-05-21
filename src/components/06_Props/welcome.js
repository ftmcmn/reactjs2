import React from "react";
import "./welcome.scss";

const Welcome = (props) => {
  return (
    <div className="welcome">
      <h1>Welcome Component</h1>
      <h2>
        Welcome {props.name} {props.lastname}
      </h2>
    </div>
  );
};

export default Welcome;
