/** @format */

import React from "react";
import Link from "next/link";

const Product = ({ id }) => {
  return (
    <div>
      <p>product id : {id}</p>
      <p>product title</p>
      <p>prod description</p>
      <Link href={`/products/${id}`}>read more</Link>
      <hr />
    </div>
  );
};

export default Product;
