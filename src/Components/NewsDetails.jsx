import React from 'react';
import { useLocation } from 'react-router-dom';
import Comments from './Comments';

const NewsDetails = () => {
  const location = useLocation();
  const data = location.state?.data;

  if (!data) {
    return (
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='font-extrabold text-2xl'>Loading...</h1>
        </div>
      </div>
    );
  }

  const { title, description, urlToImage } = data;

  return (
    <div className='grid grid-cols-2'>
      <div className='p-5'>
        <h1 className='font-extrabold text-2xl'>{title}</h1>
        <p>{description}</p>
        <img className="w-full" src={urlToImage} />
      </div>
      <div>
       
        <Comments url={location.state.data.url}/>
      </div>
    </div>
  );
};

export default NewsDetails;
