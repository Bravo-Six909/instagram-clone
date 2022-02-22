import React from 'react';
import { BsBookmark } from 'react-icons/bs';
import { FiMoreHorizontal,FiSend } from 'react-icons/fi';
import { RiHeart3Line } from 'react-icons/ri';
import { BiMessageRounded } from 'react-icons/bi';
import Image from 'next/image';
import { TailSpin } from 'react-loader-spinner';

const Feed = ({profile,name,username,image}) => {
  return (
    <div className='w-full my-4 border border-gray-200'>
        <div className='flex justify-between p-4'>
            <div className='flex items-center'>
                {!profile?<TailSpin heigth="100" width="100" color='grey' />:
                <Image src={profile} height={40} width={40} className='rounded-full' />
                }
                <p className='font-bold ml-2'>{username}</p>
            </div>
            <FiMoreHorizontal className='cursor-pointer hover:scale-110 ease-linear duration-700' />
        </div>
        <div className='w-full' >
            <Image width="100%" height="100%" layout="responsive" objectFit="contain" src={image}/>
        </div>
        <div className='flex justify-between p-2'>
            <div className='flex'>
                <RiHeart3Line className='mx-2 text-xl cursor-pointer hover:scale-110 ease-linear duration-700'/>
                <BiMessageRounded className='mx-2 text-xl cursor-pointer hover:scale-110 ease-linear duration-700'/>
                <FiSend className='mx-2 text-xl cursor-pointer hover:scale-110 ease-linear duration-700'/>
            </div>
            <div>
                <BsBookmark className='mx-2 text-xl cursor-pointer hover:scale-110 ease-linear duration-700'/>
            </div>
        </div>
    </div>
  );
};

export default Feed;
