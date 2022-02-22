import React from 'react'
import { auth } from '../../firebase';
import { useRouter } from 'next/router';

const Err = ({errs}) => {
    const router  = useRouter();
  return (
    <>
    <div className='h-screen w-screen'>
        <div className='w-screen shadow-lg py-4 px-20 flex justify-between items-center'>
            <img className='h-10 cursor-pointer' onClick={() => router.push("/")} src="/insta_png.svg" />
            <img src={auth?.currentUser?.photoURL} className='h-10 w-10 m-2 cursor-pointer rounded-full hover:scale-110 ease-linear duration-700' />
        </div>
        <div className='flex flex-col justify-center items-center h-3/4'>
            <img className='h-20 w-20 mb-10' src="/logo.png" />
            <h1 className='text-4xl font-bold'>Error</h1>
            <p className='my-4'>{errs}</p>
            <button className='border rounded-lg p-2'>Go back to Home Page</button>
        </div>
        </div>
    </>

  )
}

export default Err;