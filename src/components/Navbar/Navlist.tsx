import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { FaBlog } from 'react-icons/fa';
import { MdOutlineHealthAndSafety, MdOutlineStyle } from 'react-icons/md';
import { PiBowlFood } from 'react-icons/pi';
import { RiHotelLine } from 'react-icons/ri';
import { SiYourtraveldottv } from 'react-icons/si';
import { TbArrowGuide } from 'react-icons/tb';

const Navlist = (
  <div className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5 text-[#808ea3] sm:gap-y-5 sm:p-3 lg:p-0">
    <Link href="/" className="flex items-center sm:p-1 lg:p-0 ">
      <AiOutlineHome className="flex items-center justify-center h-4 w-4 mr-1" />{' '}
      Home
    </Link>
    <Link href="/travel" className="flex items-center sm:p-1 lg:p-0 ">
      <SiYourtraveldottv className="flex items-center justify-center h-4 w-4 mr-1" />{' '}
      Travel
    </Link>
    <Link href="/guides" className="flex items-center sm:p-1 lg:p-0 ">
      <TbArrowGuide className="flex items-center justify-center h-4 w-4 mr-1" />{' '}
      Guides
    </Link>
    <Link href="/food" className="flex items-center sm:p-1 lg:p-0 ">
      <PiBowlFood className="flex items-center justify-center h-4 w-4 mr-1" />{' '}
      Food
    </Link>
    <Link href="/hotels" className="flex items-center sm:p-1 lg:p-0 ">
      <RiHotelLine className="flex items-center justify-center h-4 w-4 mr-1" />{' '}
      Hotels
    </Link>
    <Link href="/healthy" className="flex items-center sm:p-1 lg:p-0 ">
      <MdOutlineHealthAndSafety className="flex items-center justify-center h-4 w-4 mr-1" />{' '}
      Healthy
    </Link>
    <Link href="/life-style" className="flex items-center sm:p-1 lg:p-0 ">
      <MdOutlineStyle className="flex items-center justify-center h-4 w-4 mr-1" />{' '}
      Lifestyle
    </Link>
    <Link href="/blogs" className="flex items-center sm:p-1 lg:p-0 ">
      <FaBlog className="flex items-center justify-center h-4 w-4 mr-1" /> Blogs
    </Link>
  </div>
);

export default Navlist;
