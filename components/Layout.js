/** @format */

import Footer from "./Footer";

import React from "react";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
