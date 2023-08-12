import { Typography } from '@/components/MTComponents/MTComponents';

const Header = ({ text }: { text: string }) => {
  return (
    <Typography variant="lead" className="capitalize text-xl">
      {text}
    </Typography>
  );
};

export default Header;
