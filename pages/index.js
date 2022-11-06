/** @format */

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div>Home page</div>
      <Link href="/products"> click me to go to products page</Link>
    </>
  );
};

export default Home;
