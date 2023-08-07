'use client';

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@/components/MTComponents/MTComponents';
import moment from 'moment';
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const BackgroundBlogCard = () => {
  const date = new Date();
  const initialContent = [
    {
      title: 'Lorem ipsum dolor site amet!',
      category: 'Travel',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, rem.',
      image: '/assets/bird.jpg',
    },
    {
      title: 'Second Content',
      category: 'Travel',
      content:
        'This is the second content. You can change it using the arrows.',
      image: '/assets/tiger.jpg',
    },
  ];
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const currentContent = initialContent[currentContentIndex];

  const handleNext = () => {
    setCurrentContentIndex(
      (prevIndex) => (prevIndex + 1) % initialContent.length
    );
  };

  const handlePrevious = () => {
    setCurrentContentIndex((prevIndex) =>
      prevIndex === 0 ? initialContent.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card
      shadow={false}
      className="relative grid lg:w-2/3 sm:w-full justify-center overflow-hidden text-center rounded-lg"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        style={{
          backgroundImage: `url('${currentContent.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={`absolute inset-0 m-0 h-full w-full rounded-none`}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative">
        <Typography variant="h2" color="white" className="leading-[1.5]">
          {currentContent.title}
        </Typography>
        <Typography className="flex flex-start text-[#687385]">
          {currentContent.category}
        </Typography>
        <div className="mt-12 flex items-center justify-between">
          <div>{moment(date).startOf('hour').fromNow()}</div>
          <div className="flex items-center">
            <Typography
              variant="h5"
              className="text-gray-400"
              onClick={handlePrevious}
            >
              <BsArrowLeft className="mx-2 cursor-pointer" />
            </Typography>
            <Typography
              variant="h5"
              className="text-gray-400"
              onClick={handleNext}
            >
              <BsArrowRight className="mx-2 cursor-pointer" />
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BackgroundBlogCard;
