import { padding } from '@/utils/padding';
import Destinations from './Destinations/Destinations';
import LifeStyle from './LifeStyle/LifeStyle';
import Photography from './Photography/Photography';

const DifferentPostTabs = () => {
  return (
    <div
      className={`${padding} bg-whitebg dark:bg-[#1b1f22] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8`}
    >
      <Destinations />
      <LifeStyle />
      <Photography />
    </div>
  );
};

export default DifferentPostTabs;
