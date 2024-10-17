import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeCarousel.css";


//import homeEntries from '../homeEntries.json';

const responsive = {
  desktop: {
    breakpoint: {max: 10024, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min:0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const sliderImageUrl = [
  //First image url
  {
    mediaURL:"https://placehold.co/1920x1080",
    bigText:"caption 1",
    smallText:"words"
      
  },
  {
    mediaURL:"https://placehold.co/1920x1080",
    bigText:"caption 2",
    smallText:"words"
  },
  //Second image url
  {
    mediaURL:"https://placehold.co/1920x1080",
    bigText:"caption 3",
    smallText:"words"
  },
  //Third image url
  {
    mediaURL:"https://placehold.co/1920x1080",
    bigText:"caption 4",
    smallText:"words"
  },

  //Fourth image url
  {
    mediaURL:"https://placehold.co/1920x1080",
    bigText:"caption 5",
    smallText:"words"
  }
];


const HomeCarousel = () => {

  return (
    <div className="parentContainer">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageEntry) => {
          return (
            <div className="slider" key={imageEntry.smallText}>
              <img src={imageEntry.mediaURL} alt="image" />
              <h1 className="cHText">{imageEntry.bigText}</h1>
              <p className="cPText">{imageEntry.smallText}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;