import React, { useEffect } from "react";
import Axios from "axios";
import Footer from "./pages/Footer.js/Footer";

function ProductDetailPage(props) {
  const productId = props.match.params.id;

  useEffect(() => {}, []);
  return (
    <div>
      <h1 style={{ marginTop: "100px", marginBottom: "800px" }}>
        DETAILED PAGE OF THE PRODUCT ID: {productId}
      </h1>
      <Footer />
    </div>
  );
}

export default ProductDetailPage;
