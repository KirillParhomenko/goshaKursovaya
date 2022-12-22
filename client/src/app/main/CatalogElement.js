const CatalogElement = ({ data, catalogQueryParamHandler }) => {
  const sendCatalogParam = () => {
    catalogQueryParamHandler(data.name);
  };
  return (
    <div className="CatalogElement-Wrapper" onClick={sendCatalogParam}>
      <div
        className="CatalogElement-photo"
        style={{
          background: `url(${data.imageSrc})`,
          backgroundSize: "12vw 12vw",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="CatalogElement-title">
        <p>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
      </div>
    </div>
  );
};

export default CatalogElement;
