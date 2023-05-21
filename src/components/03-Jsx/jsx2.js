import React from "react";

const Jsx2 = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };
  return (
    <div>
      Name: {user.firstName}
      <br />
      Last Name: {user.lastName}
    </div>
  );
};

export default Jsx2;
