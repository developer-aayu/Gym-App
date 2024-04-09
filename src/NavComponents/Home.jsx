import React, { useState } from 'react';
import Nav from "./Nav.jsx";
import GymImg from "../assets/gymapp-main-wallpaper.jpg";
import AuthModal from './AuthModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Nav />
      <div className="bg-cover bg-center w-full text-white font-mono pt-40 pl-20 pr-60" style={{ backgroundImage: `url(${GymImg})`, height: "500px" }}>
        <h2 className="text-5xl font-semibold">YOU ARE WELCOME HERE</h2>
        <p className="mt-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non veritatis iste nihil, sapiente expedita ipsam repudiandae, dolorum, labore soluta minima. Exercitationem, dolorem ex perspiciatis dolor reiciendis saepe adipisci quia?</p>
        <div className="mt-20 flex gap-10 text-xl">
          <button onClick={handleGetStarted} className="bg-blue-700 px-4 py-2 rounded-md hover:scale-110 duration-300">Get Started</button>
          <button className="bg-transparent px-4 py-2 rounded-md border-2 border-white hover:scale-110 duration-300">Premium</button>
        </div>
      </div>
      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Home;