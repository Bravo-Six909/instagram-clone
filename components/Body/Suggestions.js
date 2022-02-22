import Image from 'next/image';
import React from 'react';

const Suggestions = ({name,username,profile}) => {
    return (
        <>
            <div className='flex justify-between items-center my-2'>
                <div className='flex justify-between items-center'>
                    <Image src={profile} className='rounded-full' height={30} width={30}/>
                    <div className='ml-4'>
                        <p className='font-bold'>{username}</p>
                        <p className='text-sm text-gray-400'>{name}</p>
                    </div>
                </div>
                <p className='text-[#0797f6] text-xs font-semibold cursor-pointer'>Follow</p>
            </div>
        </>
    );
};

export default Suggestions;
