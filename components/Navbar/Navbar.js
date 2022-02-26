import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { TiHome } from 'react-icons/ti';
import { RiMessengerLine, RiHeart3Line } from 'react-icons/ri';
import { MdOutlineAddBox } from 'react-icons/md';
import { AiOutlineCompass } from 'react-icons/ai';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Upload from '../Upload';

const Navbar = () => {

  const [show, setShow] = useState(false);

  const [users] = useAuthState(auth);
  const signOutAuth = async ()  =>  {
    await signOut(auth);
  }


  return (
    <>
      <div className='w-screen h-16 flex items-center justify-evenly border-2 border-gray-200 relative'>
        <img src='/insta_png.svg' className='hidden md:block h-8' />
        <img src="/instagram.png" className='h-8 md:hidden' />
        <div className='hidden md:flex justify-evenly bg-gray-200 p-2 rounded-md '>
          <HiOutlineSearch className='h-6 w-6 text-gray-400' />
          <input placeholder='Search' className='bg-transparent pl-4 outline-none w-full' />
        </div>
        <div className='flex items-center justify-evenly'>
          <TiHome className='h-6 w-6 m-2 cursor-pointer hover:scale-110 ease-linear duration-700' />
          <RiMessengerLine className='h-6 w-6 m-2 cursor-pointer hover:scale-110 ease-linear duration-700' />
          <MdOutlineAddBox onClick={() => {setShow(!show)}} className='h-6 w-6 m-2 cursor-pointer hover:scale-110 ease-linear duration-700' />
          <AiOutlineCompass className='h-6 w-6 m-2 cursor-pointer hover:scale-110 ease-linear duration-700' />
          <RiHeart3Line className='h-6 w-6 m-2 cursor-pointer hover:scale-110 ease-linear duration-700' />
          <div onClick={signOutAuth} className='profile'>
             <img src={users?.photoURL} className='h-6 w-6 m-2 cursor-pointer rounded-full hover:scale-110 ease-linear duration-700' />
            <ul className='profileData'>
              <li>Profile</li>
              <li>Saved</li>
              <li>Settings</li>
              <li>Switch Accounts</li>
              <li>Log out</li>
            </ul>
          </div>
        </div>
      </div>
      { show && <div className='absolute top-16'>
        <Upload />
      </div>}
    </>
  );
};

export default Navbar;