import React from "react";

const Style2 = () => {
  const styleTitle = {
    color: "red",
    backgroundColor: "yellow",
    border: "1px solid red",
    textAlign: "center",
    padding: "10px",
    margin: "10px",
    borderRadius: "40px",
  };
  return (
    <div>
      <h2 style={styleTitle}>JSX Loops</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quia
        animi, voluptatem doloribus fugit ut impedit deleniti magnam maxime
        cupiditate ducimus quidem labore excepturi quis aspernatur. Hic dicta
        totam placeat.
      </p>
      <h2 style={{ ...styleTitle, color: "blue" }}>Component Props</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque quia
        animi, voluptatem doloribus fugit ut impedit deleniti magnam maxime
        cupiditate ducimus quidem labore excepturi quis aspernatur. Hic dicta
        totam placeat.
      </p>
    </div>
  );
};

export default Style2;
