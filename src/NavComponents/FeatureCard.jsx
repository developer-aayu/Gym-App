import React from 'react';

const Card = ({ imageUrl, name }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 trasition duration-300">
      <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt velit rerum laboriosam enim quod voluptatibus.</p>
      </div>
    </div>
  );
};

export default Card;