import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@/components/MTComponents/MTComponents';
import SocialMedia from '@/ui/SocialMedia';

const MyProfile = () => {
  return (
    <Card className="mt-6 overflow-hidden dark:bg-transparent border dark:border-gray-700 rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in">
      <CardBody>
        <Avatar
          src={`/assets/team.jpg`}
          width={500}
          height={500}
          alt="profile pic"
          className="object-cover w-16 h-16 rounded-full"
        />
        <Typography variant="h5" className="mb-2">
          Hello, I am Steven
        </Typography>
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, sit
          possimus qui vitae fuga quam fugit assumenda ab aliquid libero!
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        Follow me : <SocialMedia />
      </CardFooter>
    </Card>
  );
};

export default MyProfile;
