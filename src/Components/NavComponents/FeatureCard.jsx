import React from 'react';

const Card = ({ imageUrl, name }) => {
  return (
    <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:scale-105 trasition duration-300 z-index-10" style={{ width: "300px", height: "500px" }}>
      <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={name} />
      <div className="p-4 flex flex-col justify-start">
        <h2 className="text-xl font-semibold my-2">{name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt velit rerum laboriosam enim quod voluptatibus.</p>
      </div>
    </div>
  );
};

export default Card;