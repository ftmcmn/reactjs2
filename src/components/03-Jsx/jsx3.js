import React from "react";

const Jsx3 = () => {
  const isAdmin = false;
  return (
    <div>
      {isAdmin ? (
        <>
          {" "}
          <h2>Admin Menü</h2>
          <ul>
            <li>Home</li>
            <li>Users</li>
            <li>Products</li>
            <li>Orders</li>
          </ul>{" "}
        </>
      ) : (
        <>
          <h2>User Menü</h2>
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Orders</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Jsx3;
