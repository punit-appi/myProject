import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
      slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div><img src="https://i.pinimg.com/736x/23/80/5c/23805c2c6645c7b3dc02c2db9486f0d3.jpg" alt="aa" /></div>
      <div><img src="https://i.pinimg.com/736x/23/80/5c/23805c2c6645c7b3dc02c2db9486f0d3.jpg" alt="" /></div>
      <div><img src="https://i.pinimg.com/736x/23/80/5c/23805c2c6645c7b3dc02c2db9486f0d3.jpg" alt="" /></div>
    </Slider>
  );
};

export default Carousel;
