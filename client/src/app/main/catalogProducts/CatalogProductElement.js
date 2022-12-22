import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

import "./CatalogProduct.css";

const CatalogProductElement = ({
  viewProductToggle,
  data,
  viewProductDataHandler,
}) => {
  const showViewProduct = () => {
    viewProductDataHandler(data);
    viewProductToggle();
  };
  return (
    <div className="catalogProduct-element">
      <div className="catalogProduct-element-photo">
        <img src={data.imageSrc} />
        <button
          className="catalogProduct-element-viewDeeper"
          onClick={showViewProduct}
        >
          Подробнее
        </button>
      </div>
      <div className="catalogProduct-element-productName">
        <p>{data.name}</p>
      </div>
      <div className="catalogProduct-element-exist">
        {data.amount > 0 ? (
          <AiOutlineCheckCircle color="#444444" />
        ) : (
          <AiOutlineCloseCircle color="red" />
        )}
        <p
          style={data.amount > 0 ? { color: "#249124" } : { color: "#444444" }}
        >
          {data.amount > 0 ? "Есть в наличии" : "Нет в наличии"}{" "}
        </p>
      </div>
      <div className="catalogProduct-element-buy">
        <div className="catalogProduct-element-price">
          <p className="catalogProduct-element-priceValid">
            {data.newPrice != 0 ? data.newPrice : data.price}р
          </p>
          {data.newPrice != 0 && (
            <p className="catalogProduct-element-priceOld">{data.price}р</p>
          )}
        </div>
        <div className="catalogProduct-element-buyButtonWrapper">
          <button className="catalogProduct-element-butButton">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogProductElement;
