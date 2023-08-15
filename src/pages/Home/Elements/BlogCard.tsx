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
import TimeViewsRead from '@/ui/TimeViewsRead';
import Image from 'next/image';
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
    <Card className="overflow-hidden dark:bg-transparent border dark:border-gray-700 rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in relative group">
      <Link href="#">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
        >
          <Image
            src={`/assets/team.jpg`}
            width={500}
            height={500}
            alt="team"
            priority
            className="object-cover"
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
        <TimeViewsRead />
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
