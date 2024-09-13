import React from "react";
import Slider from "react-slick";
import { images } from "../../constant";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}></div>
  );
}

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="slider-container overflow-hidden h-[100vh] pt-10">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={images.imgCarousel1}
            className="h-[85vh] object-cover"
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  ">
            <p className="text-white text-[20px] text-center text-2xl font-mono ">
              Women Collection 2018
            </p>
            <p className="text-white text-[60px] font-bold text-center ">
              NEW ARRIVALS
            </p>
            <button className="bg-white py-3 px-12 m-auto rounded-full mt-7 ">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={images.imgCarousel2}
            className="h-[85vh] object-cover"
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  ">
            <p className="text-white text-[20px] text-center text-2xl font-mono ">
              Women Collection 2018
            </p>
            <p className="text-white text-[60px] font-bold text-center ">
              NEW ARRIVALS
            </p>
            <button className="bg-white py-3 px-12 m-auto rounded-full mt-7 ">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={images.imgCarousel3}
            className="h-[85vh] object-cover"
            alt=""
          />
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  ">
            <p className="text-white text-[20px] text-center text-2xl font-mono ">
              Women Collection 2018
            </p>
            <p className="text-white text-[60px] font-bold text-center ">
              NEW ARRIVALS
            </p>
            <button className="bg-white py-3 px-12 m-auto rounded-full mt-7 ">
              SHOP NOW
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
