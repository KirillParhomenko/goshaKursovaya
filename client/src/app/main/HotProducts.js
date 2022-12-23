import ImageSlider from "./ImageSlider";
import HotProductWrapper from "./HotProductWrapper";
import HotProduct from "./HotProduct";

import first from "./img/first.jpg";
import second from "./img/second.jpg";
import third from "./img/third.jpg";
import fourth from "./img/fourth.jpg";
const HotProducts = () => {
  return (
    <div className="hotProducts">
      <HotProductWrapper>
        <ImageSlider
          slides={[
            {
              url: `${first}`,
            },
            {
              url: `${fourth}`,
            },
          ]}
        />
      </HotProductWrapper>
      <HotProductWrapper>
        <HotProduct
          slide={{
            url: `${second}`,
          }}
          positionStyle={"absolute"}
        />
      </HotProductWrapper>
      <HotProductWrapper>
        <HotProduct
          slide={{
            url: `${third}`,
          }}
          positionStyle={"absolute"}
        />
      </HotProductWrapper>
    </div>
  );
};

export default HotProducts;
