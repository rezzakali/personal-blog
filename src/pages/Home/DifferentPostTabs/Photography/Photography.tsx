import Hr from '@/ui/Hr';
import PostCategoryHeader from '@/ui/PostCategoryHeader';
import Card from '../Card';

const Photography = () => {
  return (
    <div>
      <PostCategoryHeader text={`Photography`} />
      <Hr />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Photography;
