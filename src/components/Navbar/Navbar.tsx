'use client';

import {
  Collapse,
  IconButton,
  Navbar,
} from '@/components/MTComponents/MTComponents';
import SocialMedia from '@/components/Navbar/SocialMedia';
import { useEffect, useState } from 'react';
import navList from './Navlist';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="sticky top-0 z-50 w-full rounded-none shadow-none border-none px-5 dark:bg-[#1b1f22] text-xs py-1.5 mx-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden lg:block h-8 items-center mt-3">{navList}</div>
        <div className="hidden lg:block">
          <SocialMedia />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-[#626c7d] dark:text-[#687385]"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <div className="ml-auto">
        <Collapse
          open={openNav}
          className="fixed right-0 top-[40px] overflow-y-auto bg-white dark:bg-[#212529] w-52 z-50"
          animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
          }}
        >
          {navList}
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Nav;
