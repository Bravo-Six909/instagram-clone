import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Feed from './Feed';

const TotalFeed = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.unsplash.com/photos/?client_id=u-1-a7c5GJ8IqumMMvROC8_zgqtHazH-VIQGXtheMbA')
            .then(datas => datas.json())
            .then(res => setData(res))
    }, []);


    return (
        <div className='flex flex-column justify-evenly'>
            <div className='flex-0.4 w-full h-screen'>
                {!data ? <TailSpin heigth="100" width="100" color='grey' /> : data.map((item, i) => {
                    return (
                        <Feed key={i} profile={item?.user.profile_image.medium} name={item?.user.name} username={item?.user.instagram_username} image={item?.urls.full}/>
                    );
                })}
                <div className='flex justify-center'>
                    <TailSpin heigth="100" width="100" color='#dd1ea0' />
                </div>
            </div>
        </div>
    );
};

export default TotalFeed;
