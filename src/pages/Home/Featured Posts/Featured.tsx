import { Typography } from '@/components/MTComponents/MTComponents';
import { AiOutlineTag } from 'react-icons/ai';
import BackgroundBlogCard from './Elements/Card';

const Featured = () => {
  return (
    <div className="px-7 bg-[#fdfeff] dark:bg-[#212529]">
      <div className="my-5 py-5 flex items-center justify-between">
        <Typography variant="lead" className="capitalize text-xl">
          Featured posts
        </Typography>
        <div className="flex lg:flex-row sm:flex-col items-center justify-center">
          <div className="hidden lg:block">
            <Typography className="flex items-center justify-center mt-2">
              {' '}
              <AiOutlineTag className="h-3 w-3 mx-1 mt-1" />{' '}
              <span className="text-xs"> Hot tags : </span>
            </Typography>
          </div>
          <Typography variant="lead" className="capitalize text-xl">
            <span className="text-xs mx-1">#Covid-19 </span>
            <span className="text-xs mx-1">#Inspiration </span>
            <span className="text-xs">#Stay home </span>
          </Typography>
        </div>
      </div>

      <BackgroundBlogCard />
      <br />
    </div>
  );
};

export default Featured;
