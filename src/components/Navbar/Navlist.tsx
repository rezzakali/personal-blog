import Link from 'next/link';

const navList = (
  <div className="mb-4 mt-2 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5 text-[#808ea3] sm:gap-y-5 sm:p-3 lg:p-0">
    <Link
      href="/"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Home
    </Link>
    <Link
      href="/travel"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Travel
    </Link>
    <Link
      href="/guides"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Guides
    </Link>
    <Link
      href="/food"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Food
    </Link>
    <Link
      href="/hotels"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Hotels
    </Link>
    <Link
      href="/healthy"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Healthy
    </Link>
    <Link
      href="/life-style"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Lifestyle
    </Link>
    <Link
      href="/blogs"
      className="flex items-center sm:p-1 lg:p-0 dark:sm:hover:bg-[#2c3137] lg:hover:bg-transparent"
    >
      Blogs
    </Link>
  </div>
);

export default navList;
