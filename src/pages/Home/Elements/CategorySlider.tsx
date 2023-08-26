'use client';

import { padding } from '@/utils/padding';

import Hr from '@/ui/Hr';
import PostCategoryHeader from '@/ui/PostCategoryHeader';
import Slider from 'react-slick';
import Slide from './Slide';

const CategorySlider = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`${padding} bg-whitebg dark:bg-[#1b1f22] mb-8`}>
      <PostCategoryHeader text={`Category`} />
      <Hr />
      <Slider {...settings} className="gap-3">
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Slider>
    </div>
  );
};

export default CategorySlider;
