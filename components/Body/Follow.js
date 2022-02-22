import React,{ useState,useEffect} from 'react';
import Suggestions from './Suggestions';
import { auth } from '../../firebase';
import { TailSpin } from 'react-loader-spinner';

const Follow = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=u-1-a7c5GJ8IqumMMvROC8_zgqtHazH-VIQGXtheMbA')
            .then(datas => datas.json())
            .then(res => setData(res))
    }, []);


    return (
        <div className='mt-4 p-4'>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <img src={auth?.currentUser.photoURL} className='h-12 w-12 rounded-full' />
                    <div className='ml-4'>
                        <p className='font-bold'>@{auth?.currentUser.displayName.toLowerCase()}</p>
                        <p className=' text-gray-400'>{auth?.currentUser.displayName}</p>
                    </div>
                </div>
                <p className='text-[#0797f6] text-xs font-semibold cursor-pointer'>Switch</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center mt-4'>
                    <h4 className='font-bold text-gray-400'>Suggestions for you</h4>
                    <h4 className='text-sm'>See All</h4>
                </div>
                <div>
                {!data ? <TailSpin heigth="100" width="100" color='grey' /> : data.slice(0, 6).map((item, i) => {
                    return (
                        <Suggestions key={i} profile={item?.user.profile_image.medium} name={item?.user.name} username={item?.user.instagram_username}/>
                    );
                })}
                </div>
            </div>
        </div>
    );
};

export default Follow;
