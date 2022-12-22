import CatalogProductElement from "./CatalogProductElement";

import "./CatalogProduct.css";

const CatalogProduct = ({
  viewProductToggle,
  productCategoryData,
  viewProductDataHandler,
}) => {
  return (
    <div className="catalogProductWrapper">
      <div className="catalogProduct-title">
        <p>
          {productCategoryData[0].charAt(0).toUpperCase() +
            productCategoryData[0].slice(1) +
            ":"}
        </p>
      </div>
      <div className="catalogProduct-products">
        {productCategoryData.map(
          (data, index) =>
            index !== 0 && (
              <CatalogProductElement
                key={index}
                viewProductToggle={viewProductToggle}
                data={data}
                viewProductDataHandler={viewProductDataHandler}
              />
            )
        )}
      </div>
    </div>
  );
};

export default CatalogProduct;
