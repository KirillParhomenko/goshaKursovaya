const HamburgerShopActiveCategory = ({
  categoryName,
  catalogQueryParamHandler,
}) => {
  const setNameToParamHandler = () => {
    catalogQueryParamHandler(categoryName);
  };

  return (
    <div className="burger-shop-element" onClick={setNameToParamHandler}>
      <p>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</p>
    </div>
  );
};

export default HamburgerShopActiveCategory;
