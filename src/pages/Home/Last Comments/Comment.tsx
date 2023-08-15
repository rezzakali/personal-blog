import {
  Avatar,
  Card,
  CardBody,
  Typography,
} from '@/components/MTComponents/MTComponents';

const Comment = () => {
  return (
    <Card className="overflow-hidden dark:bg-transparent border dark:border-gray-700 rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in">
      <CardBody className="flex flex-row-reverse items-center justify-center gap-2">
        <div className="flex flex-col items-start">
          <Typography
            variant="small"
            className="font-normal text-xs  text-textcolor"
          >
            16 Jan 2023 .
          </Typography>
          <Typography className="mb-2 text-sm font-semibold text-textcolor">
            This is awesome
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

export default Comment;
