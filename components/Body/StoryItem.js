import React from 'react';
import { useRouter } from 'next/router';

const StoryItem = ({ids,image}) => {

  const router = useRouter();

  return (
  <div onClick={(e) => {router.push(`story/${ids}`)}} className='flex justify-center items-center rounded-full border-2 cursor-pointer border-[#e4187d] mx-2 hover:scale-110 ease-linear duration-700 h-16 w-[55px] min-w-[66px]'>
      <img src={image} className='h-14 w-[60px] rounded-full p-px' />
  </div>
  );
};

export default StoryItem;