import ProductWrapper from "./ProductWrapper";
import HotProduct from "./HotProduct";
import HotProductInner from "./HotProductInner";

import "./DiscountsStyle.css";

const Discounts = ({ data, viewProductDataHandler, viewProductToggle }) => {
  return (
    <div className="discountsWrapper">
      <div className="discountsTitle">
        <p>Красная цена</p>
      </div>
      {data.map((element, index) => {
        return (
          <ProductWrapper key={index}>
            <HotProduct positionStyle={"absolute"}>
              <HotProductInner
                data={element}
                viewProductDataHandler={viewProductDataHandler}
                viewProductToggle={viewProductToggle}
              />
            </HotProduct>
          </ProductWrapper>
        );
      })}
    </div>
  );
};

export default Discounts;
