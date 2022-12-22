import React, { useState, useEffect } from "react";
import axios from "axios";

import HotProducts from "./HotProducts";
import Catalog from "./Catalog";
import Discounts from "./Discounts";
import CatalogProduct from "./catalogProducts/CatalogProduct";
import ViewProduct from "./viewProduct/ViewProduct";
import "./MainStyle.css";

const Main = ({
  catalogData,
  viewProductToggle,
  viewProduct,
  showProductCategory,
  productCategoryData,
  catalogQueryParamHandler,
}) => {
  const [hotProductData, setHotProductData] = useState([]);
  const [viewProductData, setViewProductData] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const hotProducts = async () => {
      await axios("http://localhost:3001/api/discount/10", {
        signal: signal,
      })
        .then((data) => {
          setHotProductData(() => data.data);
        })
        .catch((error) => {
          console.log("Catalog fetching data error: " + error.message);
        });
    };
    hotProducts();
    return () => {
      controller.abort();
    };
  }, []);

  const viewProductDataHandler = (data) => {
    setViewProductData(() => data);
  };

  return (
    <div className="mainWrapper">
      <div className="main">
        {showProductCategory ? (
          <CatalogProduct
            productCategoryData={productCategoryData}
            viewProductDataHandler={viewProductDataHandler}
            viewProductToggle={viewProductToggle}
          />
        ) : (
          <React.Fragment>
            <HotProducts />
            <Catalog
              data={catalogData}
              catalogQueryParamHandler={catalogQueryParamHandler}
            />
            <Discounts
              data={hotProductData}
              viewProductDataHandler={viewProductDataHandler}
              viewProductToggle={viewProductToggle}
            />
          </React.Fragment>
        )}
        {viewProduct && (
          <ViewProduct
            viewProductToggle={viewProductToggle}
            productCategoryData={productCategoryData}
            viewProductData={viewProductData}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
