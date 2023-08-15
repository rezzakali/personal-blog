import Hr from '@/ui/Hr';
import PostCategoryHeader from '@/ui/PostCategoryHeader';
import { padding } from '@/utils/padding';
import LastComments from '../Last Comments/LastComments';
import LatestPostCard from './LatestPostCard';

const LatestPost = () => {
  return (
    <div className={`${padding} bg-whitebg dark:bg-[#1b1f22]`}>
      <div className="flex sm:flex-col md:flex-row lg:flex-row item-center justify-between w-full gap-3 mt-5">
        <div className="lg:w-2/3 md:w-2/3 sm:w-full">
          <PostCategoryHeader text={`Latest Post`} />
          <Hr />
          <div data-aos="fade-up" className="gap-3 flex-row">
            <LatestPostCard />
            <LatestPostCard />
            <LatestPostCard />
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/3 sm:w-full">
          <PostCategoryHeader text={`Last Comments`} />
          <Hr />
          <LastComments />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
