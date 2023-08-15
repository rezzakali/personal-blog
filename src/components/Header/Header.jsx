import ThemeChanger from '@/components/Header/ThemeChanger';
import { Typography } from '@/components/MTComponents/MTComponents';
import { padding } from '@/utils/padding';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div
      className={`${padding} flex item-center justify-between py-4 border-b   border-gray-100 dark:border-gray-700 bg-[#fdfeff] dark:bg-[#1b1f22]`}
    >
      <Link href="/">
        <Image
          src={`/assets/logo.png`}
          width={120}
          height={120}
          alt="logo"
          className="object-cover"
          priority
          quality={100}
        />
      </Link>
      <Typography variant="h5">
        <ThemeChanger />
      </Typography>
    </div>
  );
};

export default Header;
