import classNames from "classnames";

import HamburgerShopIcon from "./HamburgerShopIcon";
import HamburgerShopActiveCategory from "./HamburgerShopActiveCategory";

import "./HamburgerShopStyle.css";

const HamburgerShopActive = ({
  catalogHandler,
  data,
  isCatalogShowed,
  catalogQueryParamHandler,
}) => {
  return (
    <div
      className={classNames("burger-shop", {
        "burger-shop-active": isCatalogShowed,
      })}
    >
      <div className="burger-shop-wrapper">
        <div className="burger-shop-header">
          <div className="burger-shop-header_logo">
            <p className="burger-shop-header_logoName">Каталог</p>
          </div>
          <HamburgerShopIcon
            iconStyle={"burger-icon-active"}
            wrapperStyle={"burger-iconCross-wrapper"}
            catalogHandler={catalogHandler}
          />
        </div>
        {data.map((category, index) => {
          return (
            <HamburgerShopActiveCategory
              catalogQueryParamHandler={catalogQueryParamHandler}
              categoryName={category.name}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HamburgerShopActive;
