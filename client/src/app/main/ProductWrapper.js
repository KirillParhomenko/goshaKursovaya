import "./MainStyle.css";

const ProductWrapper = ({ children, styleProduct }) => {
  return (
    <div className="ProductWrapper" style={styleProduct}>
      {children}
    </div>
  );
};

export default ProductWrapper;
