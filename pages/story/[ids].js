import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Ids = () => {
    const router = useRouter();
    const id = router.query.ids;
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/${id}?client_id=${process.env.NEXT_PUBLIC_API_KEY}`)
        .then(datas => datas.json())
        .then(res => setData(res))
    }, [])
    

  return (
    <div className='w-screen h-screen flex justify-center'>
        <div className='h-screen w-1/2 relative'>
            <img className='h-screen w-full' src={data?.urls?.regular} />
            <div className='flex items-center justify-start absolute top-2 left-2'>
                <img className='rounded-full mr-4' src={data?.user?.profile_image?.medium} />
                <p className='font-bold'>{data?.user?.name}</p>
            </div>
        </div>
    </div>
  )
}

export default Ids;