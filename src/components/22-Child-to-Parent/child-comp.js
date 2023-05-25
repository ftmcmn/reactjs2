import React from "react";

const ChildComp = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          {
            props.onCounter(10);
          }
        }}
      >
        Button
      </button>
    </div>
  );
};

export default ChildComp;
