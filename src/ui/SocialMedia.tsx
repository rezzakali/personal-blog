import Link from 'next/link';
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { TfiPinterest } from 'react-icons/tfi';

const SocialMedia = () => {
  return (
    <div className="flex items-center space-x-3">
      <Link
        href="#"
        className="h-5 w-5 rounded-full bg-[#3b5999] flex items-center justify-center"
      >
        <BiLogoFacebook />
      </Link>
      <Link
        href="#"
        className="h-5 w-5 rounded-full bg-[#55acee] flex items-center justify-center"
      >
        <BiLogoTwitter />
      </Link>
      <Link
        href="#"
        className="h-5 w-5 rounded-full bg-[#bd081c] flex items-center justify-center"
      >
        <TfiPinterest />
      </Link>
    </div>
  );
};

export default SocialMedia;
