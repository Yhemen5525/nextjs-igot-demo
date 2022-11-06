/** @format */

import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  //   const prods = [{ id: "1" }, { id: "2" }, { id: "3" }];
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} id={product.id} />
      ))}
    </>
  );
};

export default ProductList;
