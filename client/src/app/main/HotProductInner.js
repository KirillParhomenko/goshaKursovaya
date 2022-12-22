import "./HotProductInnerStyle.css";

const HotProductInner = ({
  data,
  viewProductDataHandler,
  viewProductToggle,
}) => {
  const showViewProduct = () => {
    viewProductDataHandler(data);
    viewProductToggle();
  };
  return (
    <div className="hotProductInnerWrapper" onClick={showViewProduct}>
      <div className="hotProductInnerElement">
        <p>{data.name}</p>
      </div>
      <div className="hotProductInnerElement">
        <p>
          {data.category[0].name.charAt(0).toUpperCase() +
            data.category[0].name.slice(1)}
        </p>
      </div>
      <div className="hotProductInnerElement">
        <div className="hotProductDiscount">
          <div className="hotProductInnerElement-price">
            <p>{String(data.newPrice).split(".")[0]+'р'}</p>
          </div>
          <div className="hotProductInnerElement-price">
            <p>{String(data.newPrice).split(".")[1]}</p>
          </div>
        </div>
      </div>
      <div className="hotProductInnerElement">
        
      </div>
    </div>
  );
};

export default HotProductInner;
