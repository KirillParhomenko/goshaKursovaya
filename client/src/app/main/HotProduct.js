import backGroundImg from "./img/backGround.jpg";

const HotProduct = ({ slide, positionStyle, children }) => {
  const backGroundUrl = slide ? slide.url : backGroundImg;

  const sliderStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: `${positionStyle}`,
    top: "0",
    right: "0",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${backGroundUrl})`,
  };

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}>{children}</div>
    </div>
  );
};

export default HotProduct;
