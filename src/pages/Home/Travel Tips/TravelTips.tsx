import Hr from '@/ui/Hr';
import PostCategoryHeader from '@/ui/PostCategoryHeader';
import { padding } from '@/utils/padding';
import BlogCard from '../Elements/BlogCard';
import MostPopularBlogCard from './Elements/MostPopularBlogCard';
import MyProfile from './Elements/MyProfile';

const TravelTips = () => {
  return (
    <div className={`${padding} bg-whitebg dark:bg-[#1b1f22]`}>
      <div className="flex sm:flex-col md:flex-row lg:flex-row item-center justify-between w-full gap-3">
        <div className="lg:w-2/3 md:w-2/3 sm:w-full my-8">
          <PostCategoryHeader text={`Travel Tips`} />
          <Hr />
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
        <div data-aos="fade-up" className="lg:w-1/3 md:w-1/3 sm:w-full">
          <MyProfile />
          <br />
          <PostCategoryHeader text={`Most Popular`} />
          <Hr />
          <div data-aos="fade-up" className="space-y-3">
            <MostPopularBlogCard />
            <MostPopularBlogCard />
            <MostPopularBlogCard />
            <MostPopularBlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;
