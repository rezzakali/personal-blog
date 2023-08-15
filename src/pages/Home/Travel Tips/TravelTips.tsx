import PostCategoryHeader from '@/ui/PostCategoryHeader';
import { padding } from '@/utils/padding';
import BlogCard from '../Elements/BlogCard';
import MyProfile from './Elements/MyProfile';

const TravelTips = () => {
  return (
    <div className={`${padding} bg-whitebg dark:bg-[#1f2326]`}>
      <div className="flex item-center justify-between w-full gap-3">
        <div className="w-2/3 my-8">
          <PostCategoryHeader text={`Travel Tips`} />
          <hr className="text-gray-100 dark:text-gray-700 my-8" />
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3"
          >
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
        <div className="1/3">
          <MyProfile />
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
