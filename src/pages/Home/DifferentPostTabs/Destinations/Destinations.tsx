import Hr from '@/ui/Hr';
import PostCategoryHeader from '@/ui/PostCategoryHeader';
import Card from '../Card';

const Destinations = () => {
  return (
    <div>
      <PostCategoryHeader text={`Destinations`} />
      <Hr />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  );
};

export default Destinations;
