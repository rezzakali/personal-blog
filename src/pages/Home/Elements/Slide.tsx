import {
  Avatar,
  Card,
  CardBody,
  Typography,
} from '@/components/MTComponents/MTComponents';

const Slide = () => {
  return (
    <Card className="overflow-hidden dark:bg-transparent border dark:border-gray-700 rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in m-2">
      <CardBody className="flex flex-row-reverse items-center justify-center gap-2">
        <div className="flex flex-col items-start">
          <Typography className="text-sm font-semibold text-textcolor">
            Foody
          </Typography>
          <Typography variant="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
        </div>
        <Avatar
          src={`/assets/team.jpg`}
          width={100}
          height={100}
          alt="profile pic"
          className="object-cover w-14 h-14 rounded-full"
        />
      </CardBody>
    </Card>
  );
};

export default Slide;
