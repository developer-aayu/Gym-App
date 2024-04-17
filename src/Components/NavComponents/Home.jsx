import React, { useState } from 'react';
import GymImg from "../../assets/gymapp-main-wallpaper.jpg";
import AuthModal from './AuthModal.jsx';
import Card from './FeatureCard.jsx';
import DashImg from '../../assets/dashimg.jpg';
import LeaderImg from '../../assets/leaderboardimg.jpg';
import WorkoutImg from '../../assets/workoutimg.jpg';
import ProfileImg from '../../assets/profileimg.jpg';

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
      <div className="bg-cover bg-center w-full text-white font-mono flex flex-col justify-center px-10" style={{ backgroundImage: `url(${GymImg})`, height: "100vh" }}>
        <div>
        <h2 className="text-5xl font-semibold">IT'S ALL ABOUT WHAT <span className='text-orange-400 text-5xl '>YOU</span> CAN <br/> ACHIEVE</h2>
        <p className="mt-10 text-lg">Empower Yourself to make the changes <span className='text-orange-400 text-lg '>YOU</span> need to make.</p>
        <div className="mt-20 flex gap-10 text-xl">
          <button onClick={handleGetStarted} className="bg-blue-700 px-4 py-2 rounded-md hover:scale-110 duration-300">Let's Get Started</button>
          <button className="bg-transparent px-4 py-2 rounded-md border-2 border-white hover:scale-110 duration-300">Premium</button>
        </div>
        </div>
      </div>
      <AuthModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className='my-20 flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-semibold'>Avialabe Features</h2>
        <div className='flex flex-col w-9/12 md:bg-gray-100 mt-20 py-20'>
          <div className="flex flex-col justify-center items-center gap-20 my-10 md:flex-row">
            <Card imageUrl={DashImg} name="Personalized Dashboard" />
            <Card imageUrl={LeaderImg} name="Leader Board" />
          </div>
          <div className="flex flex-col justify-center items-center gap-20 my-10 md:flex-row">
            <Card imageUrl={WorkoutImg} name="Workout Plan" />
            <Card imageUrl={ProfileImg} name="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;