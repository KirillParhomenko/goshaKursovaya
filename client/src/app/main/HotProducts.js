
import ImageSlider from "./ImageSlider";
import HotProductWrapper from "./HotProductWrapper";


const HotProducts = () => {

  return (
    <div className="hotProducts">
      <HotProductWrapper>
        <ImageSlider
          slides={[
            {
              url: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
            },
            {
              url: "http://www.rosphoto.com/images/u/articles/1510/7_5.jpg",
            },
            {
              url: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
            },
          ]}
        />
      </HotProductWrapper>
    </div>
  );
};

export default HotProducts;
