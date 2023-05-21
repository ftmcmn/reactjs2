import React from "react";
import ProductCard from "./product-card";

const Products = () => {
  return (
    <div>
      <ProductCard>
        <h1>Product 1</h1>
        <p>Product 1 description</p>
      </ProductCard>
      <ProductCard>
        <h1>Product 1</h1>
        <p>Product 1 description</p>
      </ProductCard>
    </div>
  );
};

export default Products;
