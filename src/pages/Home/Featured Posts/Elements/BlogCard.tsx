import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@/components/MTComponents/MTComponents';

const BlogCard = () => {
  return (
    <Card className="overflow-hidden h-96 dark:bg-transparent border dark:border-gray-700">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="small" className="text-xs">
          Travel.
        </Typography>
        <Typography variant="h5">
          Want fluffy Japanese pancakes but can’t fly to Tokyo?
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between gap-2">
        <Typography variant="small" className="font-normal text-xs">
          Jan 10
        </Typography>
        <Typography variant="small" className="font-normal uppercase text-xs">
          12 Mins read
        </Typography>
        <Typography variant="small" className="font-normal uppercase text-xs">
          12k views
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
