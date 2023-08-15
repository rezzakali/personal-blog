import PostCategoryHeader from '@/ui/PostCategoryHeader';
import { padding } from '@/utils/padding';
import BlogCard from '../Elements/BlogCard';

const TravelTips = () => {
  return (
    <div className={`${padding} bg-whitebg dark:bg-darkbg`}>
      <div className="flex item-center justify-between w-full my-5">
        <div className="w-2/3">
          <PostCategoryHeader text={`Travel Tips`} />
          <hr className="border-b border-gray-100 dark:border-gray-700 my-3" />
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
        <div className="1/3"></div>
      </div>
    </div>
  );
};

export default TravelTips;
