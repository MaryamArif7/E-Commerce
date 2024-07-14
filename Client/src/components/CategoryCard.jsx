import React from 'react';

const CategoryCard = ({ imgURL, name }) => {
  return (
    <div className='border border-gray-400 w-44 h-28'>
      <img className='h-20 w-full object-contain' src={imgURL} alt={name} />
      <h1 className='ml-12'>{name}</h1>
    </div>
  );
}

export default CategoryCard;
