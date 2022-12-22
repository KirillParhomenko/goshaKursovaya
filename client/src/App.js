import React, { useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";

import Header from "./app/header/Header";
import Main from "./app/main/Main";
import Footer from "./app/footer/Footer";

import "./App.css";

function App() {
  const [catalog, setCatalog] = useState(false);
  const [catalogData, setCatalogData] = useState([]);
  const [viewProduct, setViewProduct] = useState(false);
  const [catalogQueryParam, setCatalogQueryParam] = useState("");
  const [showProductCategory, setShowProductCategory] = useState(false);
  const [productCategoryData, setProductCategoryData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const catalogList = async () => {
      await axios("http://localhost:3001/api/catalog", {
        signal: signal,
      })
        .then((data) => {
          setCatalogData(() => data.data);
        })
        .catch((error) => {
          console.log("Catalog fetching data error: " + error.message);
        });
    };
    catalogList();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (catalogQueryParam !== "") {
      const controller = new AbortController();
      const signal = controller.signal;
      const productCategoryData = async () => {
        await axios(`http://localhost:3001/api/data/${catalogQueryParam}`, {
          signal: signal,
        })
          .then((data) => {
            setProductCategoryData(() => [catalogQueryParam, ...data.data]);
            setCatalog(false);
            window.scrollTo(0, 0);
            if (data.data.length !== 0) {
              setShowProductCategory(() => true);
            } else {
              setShowProductCategory(() => false);
            }
          })
          .catch((error) => {
            console.log("Catalog fetching data error: " + error.message);
          });
      };
      productCategoryData();
      return () => {
        controller.abort();
      };
    }
  }, [catalogQueryParam]);

  const catalogToggle = () => {
    setCatalog(!catalog);
  };

  const viewProductToggle = () => {
    setViewProduct(!viewProduct);
  };

  const catalogQueryParamHandler = (name) => {
    setCatalogQueryParam(() => name);
  };

  const disableShowProductCategory = () => {
    setShowProductCategory(() => false);
    setCatalogQueryParam("");
  };
  return (
    <div className={classNames("App")}>
      <Header
        isCatalogShowed={catalog}
        catalogHandler={catalogToggle}
        catalogData={catalogData}
        catalogQueryParamHandler={catalogQueryParamHandler}
        disableShowProductCategory={disableShowProductCategory}
      />
      <Main
        catalogData={catalogData}
        viewProductToggle={viewProductToggle}
        viewProduct={viewProduct}
        showProductCategory={showProductCategory}
        productCategoryData={productCategoryData}
        catalogQueryParamHandler={catalogQueryParamHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
