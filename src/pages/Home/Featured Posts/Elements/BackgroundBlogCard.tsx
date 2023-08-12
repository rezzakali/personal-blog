'use client';

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@/components/MTComponents/MTComponents';
import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const BackgroundBlogCard = () => {
  const date = new Date();
  const initialContent = [
    {
      title: '"Rare Bird Species Spotted: A Feathered Marvel Takes Flight!"',
      category: 'Animal',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, rem.',
      image: '/assets/bird.jpg',
      views: '12k',
    },
    {
      title: '"Roaring Victory: Tiger Population Surges to New Heights"',
      category: 'Animal',
      content:
        'This is the second content. You can change it using the arrows.',
      image: '/assets/tiger.jpg',
      views: '10k',
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
    <Link href="#">
      <Card
        shadow={false}
        className="relative grid sm:w-full justify-center overflow-hidden text-center rounded h-96 transition duration-300 ease-in hover:-translate-y-1 hover:ease-in"
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
          <Typography
            variant="h2"
            color="white"
            className="leading-[1.5] flex items-center justify-center lg:h-[50vh] sm:h-auto"
          >
            {currentContent.title}
          </Typography>
          <Typography className="flex flex-start text-[#687385] font-semibold absolute bottom-20">
            {currentContent.category}.
          </Typography>
          <div className="flex items-center justify-between bottom-5 absolute mx-auto w-full">
            <div className="flex items-center gap-5">
              <Typography>{moment(date).startOf('hour').fromNow()}</Typography>
              <Typography>{currentContent.views} views </Typography>
            </div>
            <div className="flex items-center absolute right-12 bottom-0.5">
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
    </Link>
  );
};

export default BackgroundBlogCard;
