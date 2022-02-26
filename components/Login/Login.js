import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { auth } from '../../firebase';
import { onAuthStateChanged, signInWithPopup, FacebookAuthProvider,signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
    // const [users, setUsers] = useState(null);
    const [user] = useAuthState(auth);
    const router = useRouter();

    const facebookProvider = new FacebookAuthProvider();
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .catch((err) => {
            router.push(`/error/${err}`)
        })
    }



    return (
        <>
            <Head>
                <title>Instagram | Login</title>
                <link rel="icon" href="/insta.ico" />
            </Head>
            <div className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-t from-[#FEDA77] via-[#DD2A7B] to-[#8134AF]'>
                <div>
                    <img src="/insta_png.svg" />
                </div>
                <div className='flex justify-center items-center border border-black p-4 rounded-md my-4 shadow-2xl cursor-pointer'>
                    <FaFacebookF className='h-6 w-6 mr-2' />
                    <button onClick={signInWithFacebook} className='border-none font-semibold text-black-600'>Login With Facebook</button>
                </div>
            </div>
        </>
    );
};

export default Login;
