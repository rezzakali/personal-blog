import {
  Card,
  CardBody,
  Typography,
} from '@/components/MTComponents/MTComponents';
import Image from 'next/image';

const LatestPostCard = () => {
  return (
    <Card className="overflow-hidden dark:bg-transparent rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in">
      <CardBody className="flex flex-row-reverse items-center justify-center gap-2">
        <div>
          <Typography
            variant="small"
            className="text-xs font-medium text-green-500"
          >
            Food .
          </Typography>
          <Typography className="mb-2 text-sm font-semibold text-textcolor">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            debitis deleniti corrupti.
          </Typography>
          <div className="flex items-center gap-2">
            <Typography
              variant="small"
              className="font-normal text-xs  text-textcolor"
            >
              12 Mins Read .
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-xs  text-textcolor"
            >
              Aug 10 .
            </Typography>
            <Typography
              variant="small"
              className="font-normal capitalize text-xs  text-textcolor"
            >
              12k views .
            </Typography>
          </div>
        </div>
        <div>
          <Image
            src={`/assets/team.jpg`}
            width={200}
            height={200}
            alt="card-image"
            className="object-cover rounded transition ease-in hover:scale-105 duration-300"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default LatestPostCard;
