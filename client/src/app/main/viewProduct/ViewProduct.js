import { useState } from "react";

import HamburgerShopIcon from "./../../header/menu/HamburgerShopIcon";

import "./ViewProduct.css";

const ViewProduct = ({ viewProductToggle, viewProductData }) => {
  const [value, setValue] = useState(1);

  const changeValue = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };

  return (
    <div className="viewProductWrapper">
      <div className="viewProduct-photo">
        <img src={viewProductData.imageSrc} />
      </div>
      <div className="viewProduct-info">
        <div
          className="viewProduct-info-close-window"
          onClick={viewProductToggle}
        >
          <HamburgerShopIcon
            iconStyle={"burger-icon-active"}
            wrapperStyle={"burger-iconCross-wrapper"}
          />
        </div>
        <div className="viewProduct-info-name">
          <p style={{ borderBottom: "0.1px solid #444444" }}>
            {viewProductData.name}
          </p>
        </div>
        <div className="viewProduct-info-wrapper">
          <div style={{ flex: "0 0 50%", position: "relative" }}>
            <div className="viewProduct-info-description">
              <p>Описание:</p>
              <p>{viewProductData.description}</p>
            </div>
            <div className="viewProduct-info-generalCount">
              <p>Всего на складе = {viewProductData.amount - value}</p>
            </div>
            <div className="viewProduct-info-count">
              <button
                onClick={() => {
                  return value == 0 ? null : setValue(value - 1);
                }}
              >
                -
              </button>
              <input value={value} onChange={changeValue} />
              <button onClick={() => setValue(value + 1)}>+</button>
            </div>
          </div>
          <div style={{ flex: "0 0 50%", position: "relative" }}>
            <div className="viewProduct-info-price">
              <p>Цена</p>
              <p>
                {viewProductData.newPrice !== 0
                  ? viewProductData.newPrice+'p'
                  : viewProductData.price+'р'}
              </p>
            </div>
            <div className="viewProduct-info-buttonAddToBasket">
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
