import React, { useLayoutEffect, useState, useEffect } from "react";
var axios = require("axios");

function ProductListDataLoader() {
  const [allCollectionItems, setData] = useState([{}]);
  useEffect(() => {
    axios
      .get(
        "https://sunyk-msc-backend.herokuapp.com/collection/item/get_all/with_collection_info/"
      )
      .then(function (response) {
        if (response.status == 200) {
          if (response.data.res_code == 1) {
            console.log(
              "Successfully connected to API for all data..." +
                response.data.res_msg
            );
            console.log(response.data.results);
            setData(response.data.results);
          } else {
            console.log("other than res_code 1...");
          }
        } else {
          console.log("Some connection error status not 200...");
        }
      })
      .catch(function (error) {
        console.log("code 0" + error);
      });
  }, []);
  // END OF LOADING DATA
}

export default ProductListDataLoader;
