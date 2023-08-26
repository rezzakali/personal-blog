import { Button, Typography } from '@/components/MTComponents/MTComponents';
import SubscribeInput from '@/pages/Home/Elements/SubscribeInput';
import Hr from '@/ui/Hr';
import PostCategoryHeader from '@/ui/PostCategoryHeader';
import SocialMedia from '@/ui/SocialMedia';
import { padding } from '@/utils/padding';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer
        className={`${padding} flex w-full items-center justify-start gap-y-6 gap-x-12 py-6 md:justify-between bg-whitebg dark:bg-[#212529]`}
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div>
            <PostCategoryHeader text={`About Me`} />
            <Hr />
            <Typography variant="small">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              facilis.
            </Typography>
            <Typography variant="paragraph">Address</Typography>
            <Typography variant="small">
              123 Main Street <br />
              New York, NY 10001
            </Typography>
            <Typography variant="paragraph">Follow me</Typography>
            <SocialMedia />
          </div>
          <div>
            <PostCategoryHeader text={`Quick links`} />
            <Hr />
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">Blogs</Link>
              </li>
            </ul>
          </div>
          <div>
            <PostCategoryHeader text={`Tag Cloud`} />
            <Hr />
            <ul>
              <li>
                <Button size="sm">Net Work</Button>
              </li>
              <li>
                <Button size="sm">Beautiful</Button>
              </li>
            </ul>
          </div>
          <div>
            <PostCategoryHeader text={`About Me`} />
            <Hr />
            <Typography variant="small">
              Don&apos;t miss out on the latest news about Travel tips, Hotels
              review, Food guide...
            </Typography>
            <br />
            <SubscribeInput />
          </div>
        </div>
      </footer>
      <div
        className={`${padding} flex w-full flex-col items-center justify-center py-4 md:flex-row md:justify-between`}
      >
        <Typography
          variant="small"
          className="mb-4 text-center font-normal md:mb-0"
        >
          &copy; {currentYear} <Link href="/">Stories</Link>. All Rights
          Reserved.
        </Typography>
        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
