import React,{ useState,useEffect} from 'react';
import { TailSpin } from 'react-loader-spinner';
import StoryItem from './StoryItem';

const Story = ({jsonData}) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_API_KEY}`)
    .then(datas => datas.json())
    .then(res => setData(res))
  }, []);
  

  return (
    <div className='flex border p-4 mt-4 w-[600px] overflow-x-auto scroll-bar-container' >
      {console.log(data)}
      {!data ? <TailSpin heigth="100" width="100" color='#dd1ea0'/> : data.map((item,i) => {
        return(
          <StoryItem key={i} image={item?.user.profile_image.medium} />
        );
      })}
    </div>
  );
};

export default Story;
