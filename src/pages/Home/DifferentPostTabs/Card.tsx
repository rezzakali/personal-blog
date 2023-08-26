import {
  CardBody,
  Card as MTCard,
  Typography,
} from '@/components/MTComponents/MTComponents';
import Image from 'next/image';

const Card = () => {
  return (
    <MTCard className="overflow-hidden dark:bg-transparent rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in shadow-none py-0 m-0">
      <CardBody className="flex flex-row-reverse items-center justify-center sm:justify-start gap-2 py-2 lg:px-0 md:px-0 sm:px-0 m-0">
        <div>
          <Typography className="mb-2 text-sm font-semibold text-textcolor">
            Lorem ipsum, dolor sit amet
          </Typography>
          <div className="flex items-center gap-2">
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
            className="object-cover rounded transition ease-in hover:scale-105 duration-300 w-36 lg:h-auto md:h-auto sm:h-24 sm:w-36"
          />
        </div>
      </CardBody>
    </MTCard>
  );
};

export default Card;
