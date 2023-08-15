import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@/components/MTComponents/MTComponents';

const MyProfile = () => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Avatar
          src={`/assets/team.jpg`}
          width={500}
          height={500}
          alt="profile pic"
          className="object-cover w-7 h-7 rounded-full"
        />
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Hello, I am Steven
        </Typography>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, sit
          possimus qui vitae fuga quam fugit assumenda ab aliquid libero!
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button size="sm" variant="text" className="flex items-center gap-2">
          Follow me :
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MyProfile;
