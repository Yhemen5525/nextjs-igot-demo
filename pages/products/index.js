/** @format */

import React from "react";
import ProductList from "../../components/ProductList";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  //   console.log(products);

  return {
    props: { products },
  };
};

const Products = ({ products }) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Products;
