import React, { useState } from 'react';
import Nav from "./Nav.jsx";
import GymImg from "../assets/gymapp-main-wallpaper.jpg";
import AuthModal from './AuthModal';
import Card from './FeatureCard.jsx';
import Footer from './Footer.jsx';

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
      <div className="bg-cover bg-center w-full text-white font-mono pt-60 pl-20 pr-60 shadow-lg" style={{ backgroundImage: `url(${GymImg})`, height: "100vh" }}>
        <h2 className="text-5xl font-semibold">YOU ARE WELCOME HERE</h2>
        <p className="mt-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non veritatis iste nihil, sapiente expedita ipsam repudiandae, dolorum, labore soluta minima. Exercitationem, dolorem ex perspiciatis dolor reiciendis saepe adipisci quia?</p>
        <div className="mt-20 flex gap-10 text-xl">
          <button onClick={handleGetStarted} className="bg-blue-700 px-4 py-2 rounded-md hover:scale-110 duration-300">Get Started</button>
          <button className="bg-transparent px-4 py-2 rounded-md border-2 border-white hover:scale-110 duration-300">Premium</button>
        </div>
      </div>
      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className='my-20 flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-semibold'>Avialabe Features</h2>
        <div className='flex flex-col w-9/12'>
          <div className="flex gap-10 mt-20">
            <Card imageUrl="image1.jpg" name="Card 1" />
            <Card imageUrl="image2.jpg" name="Card 2" />
          </div>
          <div className="flex gap-10 mt-20">
            <Card imageUrl="image3.jpg" name="Card 3" />
            <Card imageUrl="image4.jpg" name="Card 4" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;