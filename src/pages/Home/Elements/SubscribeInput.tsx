'use client';

import { Button, Input } from '@material-tailwind/react';
import { ChangeEvent, useState } from 'react';

const SubscribeInput = () => {
  const [email, setEmail] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="relative flex w-full max-w-[26rem]">
      <Input
        size="md"
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20 rounded-full border-none ring-1 dark:ring-gray-700 ring-gray-300 text-[#687385] dark:text-[#adb5bd]"
        placeholder="Enter Your Email"
        labelProps={{ className: 'hidden' }}
        containerProps={{
          className: 'min-w-0',
        }}
      />
      <Button
        size="md"
        disabled={!email}
        className="!absolute right-0 rounded-r-full bg-[#5869da] hover:bg-red-400 hover:shadow-none dark:hover:shadow-none capitalize"
      >
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeInput;
