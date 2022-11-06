/** @format */

import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log(id);
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();

  // return {
  //   props: { ninja: data }
  // }

  return {
    props: { id },
  };
};

const ProductDetail = ({ id }) => {
  //   console.log(product);
  return <div>ProductDetail of product with id of {id}</div>;
};

export default ProductDetail;
