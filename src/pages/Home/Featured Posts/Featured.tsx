import { padding } from '@/utils/padding';
import Header from '../../../ui/PostCategoryHeader';
import BlogCard from '../Elements/BlogCard';
import Tag from '../Elements/Tag';
import BackgroundBlogCard from './Elements/BackgroundBlogCard';

const Featured = () => {
  return (
    <div className={`${padding}  bg-whitebg dark:bg-darkbg`}>
      <div className="my-5 py-5 flex items-center justify-between">
        <Header text={`Featured Posts`} />
        <Tag />
      </div>
      <div className="flex items-center sm:flex-col lg:flex-row gap-3 w-full my-2">
        <div className="w-full">
          <BackgroundBlogCard />
        </div>
        <div className="lg:w-1/3 sm:w-full">
          <BlogCard />
        </div>
      </div>
      <br />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Featured;
