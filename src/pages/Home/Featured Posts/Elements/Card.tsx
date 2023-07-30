import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@/components/MTComponents/MTComponents';
import moment from 'moment';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const BackgroundBlogCard = () => {
  const date = new Date();
  return (
    <Card
      shadow={false}
      className="relative grid lg:w-2/3 sm:w-full justify-center overflow-hidden text-center rounded-lg"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/assets/bird.jpg')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative">
        <Typography variant="h2" color="white" className="leading-[1.5]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          rem.
        </Typography>
        <Typography className="flex flex-start text-[#687385]">
          Travel{' '}
        </Typography>
        <div className="mt-12 flex items-center justify-between">
          <div>{moment(date).startOf('hour').fromNow()}</div>
          <div className="flex items-center">
            <Typography variant="h5" className="text-gray-400">
              <BsArrowLeft className="mx-2 cursor-pointer" />
            </Typography>
            <Typography variant="h5" className="text-gray-400">
              <BsArrowRight className="mx-2 cursor-pointer" />
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BackgroundBlogCard;
