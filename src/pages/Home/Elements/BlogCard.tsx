'use client';

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@/components/MTComponents/MTComponents';
import colors from '@/ui/PostCategoryColor';
import SocialMedia from '@/ui/SocialMedia';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { GiShare } from 'react-icons/gi';

const BlogCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Generate a random color key from the colors object
  const colorKeys = Object.keys(colors);
  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];
  const selectedColor = colors[randomColorKey as keyof typeof colors];

  return (
    <Card
      data-aos="fade-up"
      className="overflow-hidden dark:bg-transparent border dark:border-gray-700 rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in relative group"
    >
      <Link href="#">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
      </Link>
      <div
        className={`absolute top-1 left-1 ${selectedColor} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
      >
        <AiOutlineHeart />
      </div>
      <CardBody className="relative">
        <Typography
          variant="small"
          className={`text-xs font-medium text-${selectedColor}`}
        >
          Travel.
        </Typography>
        <div
          className={`absolute -top-9 right-1 ${selectedColor} w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          onClick={() => setIsClicked(!isClicked)}
        >
          <GiShare />
        </div>
        {/* Social media icons */}
        {isClicked && (
          <div className="absolute -top-9 right-8 flex items-center justify-between text-white cursor-pointer">
            <SocialMedia />
          </div>
        )}

        <Link href="#">
          <Typography variant="h5" className="text-textcolor">
            Want fluffy Japanese pancakes but can&apos;t fly to Tokyo?
          </Typography>
        </Link>
      </CardBody>
      <CardFooter className="flex items-center lg:justify-between sm:justify-start md:justify-start gap-2">
        <Typography
          variant="small"
          className="font-normal text-xs  text-textcolor"
        >
          Aug 10
        </Typography>
        <Typography
          variant="small"
          className="font-normal capitalize text-xs  text-textcolor"
        >
          12 Mins read
        </Typography>
        <Typography
          variant="small"
          className="font-normal capitalize text-xs  text-textcolor"
        >
          12k views
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
