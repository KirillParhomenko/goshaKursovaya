import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import HotProduct from "./HotProduct";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setIndex] = useState(0);
  useEffect(() => {
    let timer = setTimeout(
      () => setIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1),
      5000
    );

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex]);

  const ArrowStyle = {
    width: "10%",
    height: "auto",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    zIndex: "1",
    cursor: "pointer",
  };

  const sliderStyle = {
    display: "flex",
    width: `${slides.length}00%`,
    height: "100%",
    borderRadius: "15px",
    marginLeft: `${currentIndex === 0 ? "0%" : "-" + currentIndex + "00%"}`,
    transition: "0.5s",
  };

  const listOfImage = {
    display: "flex",
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translate(-50%,-5%)",
    zIndex: "10",
  };

  const dotElement = {
    display: "block",
    marginLeft: "2px",
    marginRight: "2px",
    width: "10px",
    height: "10px",
    borderRadius: "100%",
    backgroundColor: "white",
  };

  const nextSlide = () => {
    setIndex(() =>
      currentIndex < slides.length - 1 ? currentIndex + 1 : slides.length - 1
    );
  };

  const previousSlide = () => {
    setIndex(() => (currentIndex > 0 ? currentIndex - 1 : 0));
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: "15px",
        top: "0",
        left: "0",
        overflow: "hidden",
      }}
    >
      <div style={{ ...ArrowStyle, left: "0" }} onClick={previousSlide}>
        <IoIosArrowBack
          style={
            currentIndex !== 0
              ? { color: "white" }
              : { color: "white", opacity: "0.3" }
          }
          size={"100%"}
        />
      </div>
      <div style={sliderStyle}>
        {slides.map((element, index) => {
          return (
            <HotProduct
              slide={element}
              key={index}
              positionStyle={"relative"}
            />
          );
        })}
      </div>
      <div style={{ ...ArrowStyle, right: "0" }} onClick={nextSlide}>
        <IoIosArrowForward
          style={
            currentIndex !== slides.length - 1
              ? { color: "white" }
              : { color: "white", opacity: "0.3" }
          }
          size={"100%"}
        />
      </div>
      <div style={listOfImage}>
        {slides.map((element, key) => (
          <span
            style={{
              ...dotElement,
              border: `${currentIndex === key ? "0.3px solid black" : ""}`,
            }}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
