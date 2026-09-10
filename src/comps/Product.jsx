import React from "react";

const Product = (props) => {
  const { name, price } = props;
  return (
    <div>
      <h1>Product Name: {name}</h1>
      <h2>Product Price: ${price.toFixed(2)}</h2>
    </div>
  );
};

export default Product;
