import React from "react";
import HeroSection from "../../HeroSection";
import { products } from "./Data";

function Products() {
  return (
    <>
      <HeroSection {...products} />
    </>
  );
}

export default Products;
