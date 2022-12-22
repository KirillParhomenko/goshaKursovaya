import ProductWrapper from "./ProductWrapper";
import CatalogElement from "./CatalogElement";

import "./CatalogStyle.css";

const Catalog = ({ data, catalogQueryParamHandler }) => {
  return (
    <div className="CatalogWrapper">
      {data.map((element, index) => {
        return (
          <ProductWrapper key={index}>
            <CatalogElement
              data={element}
              catalogQueryParamHandler={catalogQueryParamHandler}
            />
          </ProductWrapper>
        );
      })}
    </div>
  );
};

export default Catalog;
