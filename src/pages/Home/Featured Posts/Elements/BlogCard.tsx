import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@/components/MTComponents/MTComponents';
import colors from '@/ui/PostCategoryColor';
import Link from 'next/link';

const BlogCard = () => {
  // Generate a random color key from the colors object
  const colorKeys = Object.keys(colors);
  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];
  const selectedColor = colors[randomColorKey as keyof typeof colors];

  return (
    <Link href="#">
      <Card className="overflow-hidden h-96 dark:bg-transparent border dark:border-gray-700 rounded transition duration-300 ease-in hover:-translate-y-1 hover:ease-in">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none relative"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardHeader>
        <div
          className={`absolute top-1 right-1 ${selectedColor} w-8 h-8 rounded-full flex items-center justify-center`}
        >
          L
        </div>
        <CardBody className="relative">
          <Typography
            variant="small"
            className={`text-xs font-medium text-${selectedColor}`}
          >
            Travel.
          </Typography>
          <div
            className={`absolute -top-9 right-1 ${selectedColor} w-8 h-8 rounded-full flex items-center justify-center`}
          >
            S
          </div>
          <Typography variant="h5">
            Want fluffy Japanese pancakes but can&apos;t fly to Tokyo?
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between gap-2">
          <Typography variant="small" className="font-normal text-xs">
            Aug 10
          </Typography>
          <Typography
            variant="small"
            className="font-normal capitalize text-xs"
          >
            12 Mins read
          </Typography>
          <Typography
            variant="small"
            className="font-normal capitalize text-xs"
          >
            12k views
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
