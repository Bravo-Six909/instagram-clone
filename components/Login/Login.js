import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { auth } from '../../firebase';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, FacebookAuthProvider,signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Login = () => {
    const [user, setUser] = useState(null);
    const [loggedUser, setLoggedUser] = useState(null);
    const router = useRouter();

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result);
                router.push("/");
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    const facebookProvider = new FacebookAuthProvider();
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result);
                console.log(result);
                router.push("/");
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    const signOutAuth = async () => {
        await signOut(auth);
        console.log(auth);
    }

    // onAuthStateChanged(auth, (currUser) => {
    //     setLoggedUser(currUser);
    // })


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
                <div className='flex justify-center items-center border border-gray-800 p-4 rounded-md my-4 shadow-xl'>
                    <FcGoogle className='h-6 w-6 mr-2' />
                    <button onClick={signInWithGoogle} className='border-none font-semibold text-black-600'>Login With Google</button>
                </div>
                {/* <div className='flex justify-center items-center border border-gray-300 p-4 rounded-md my-4'>
                    <FaFacebookF className='h-6 w-6 mr-2' />
                    <button onClick={signInWithFacebook} className='border-none font-semibold text-black-600'>Login With Facebook</button>
                </div> */}
                <div>
                    <button onClick={signOutAuth}>Logout</button>
                </div>
            </div>
        </>
    );
};

export default Login;
