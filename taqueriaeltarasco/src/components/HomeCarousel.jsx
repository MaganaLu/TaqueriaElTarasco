import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeCarousel.css";

import carouselImage1 from "../assets/carouselImage1.jpg";
import carouselImage2 from "../assets/carouselImage2.jpg";
import carouselImage3 from "../assets/carouselImage3.jpg";



//import homeEntries from '../homeEntries.json';

const responsive = {
  desktop: {
    breakpoint: { max: 10024, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  //First image url
  {
    mediaURL: carouselImage1,
  },
  //Second image url
  {
    mediaURL: carouselImage2,
  },
  //Third image url
  {
    mediaURL: carouselImage3,
  },
];


const HomeCarousel = () => {

  return (
    <div className="parentOuterContainer">
      <div className="parentContainer">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false} 
          arrows={false}
          dotListClass="custom-dot-list-style"
        >
          {sliderImageUrl.map((imageEntry) => {
            return (
              <div className="slider" key={imageEntry.smallText}>
                <img src={imageEntry.mediaURL} alt="image" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default HomeCarousel;