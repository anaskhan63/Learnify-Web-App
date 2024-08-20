import React from 'react';
import './FeaturesCard.css';

const FeaturesCard = ({ Title, Description, Icon }) => {
  return (
    <div className='feature-card p-5 mt-3 group rounded-md bg-[#90C8F7] '>
      <div className='feature-icon'>
        <i className={`${Icon} text-5xl text-[#47B135]`} />
      </div>
      <h1 className='outfit text-3xl font-medium text-white mt-3'>{Title}</h1>
      <div className="flex-grow group-hover:w-[70%] group-hover:rounded-full group-hover:h-1 group-hover:bg-[#47B135]"></div>
      <p className='raleway text-white mt-4'>{Description}</p>
    </div>
  );
}

export default FeaturesCard;
