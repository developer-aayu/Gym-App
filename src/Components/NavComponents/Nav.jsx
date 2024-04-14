import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../profile/Profile.jsx";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const WelcomeMessage = ({ username }) => {
    return (
      <p className='text-black text-3xl font-bold'>Welcome, {username}</p>
    );
  };
  const PersonalDetails = ({ age, height, weight, gender, BMI, health, fitnessLevel, goal }) => {
    return (
      <ul className='flex flex-col justify-center items-center gap-5 text-xl'>
        <li>Age : {age}</li>
        <li>Height : {height} cm</li>
        <li>Weight : {weight} kg</li>
        <li>Gender : {gender}</li>
        <li>BMI : {BMI}</li>
        <li>Health : {health}</li>
        <li>Fitness Level : {fitnessLevel}</li>
        <li>Goal : {goal}</li>
      </ul>
    );
  };


  return (
    <div className="bg-black w-full sticky top-0">
      <nav className="w-4/5 mx-auto py-5 text-white text-lg flex justify-between items-center">
        <div>
          <span className="font-black text-3xl inline-block hover:scale-110 duration-300" style={{ cursor: "pointer" }}><Link to="/">LOGO</Link></span>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            {!isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-black text-white text-center">
              <ul>
                <li className="py-3 border-b border-gray-600"><Link to="/home">Home</Link></li>
                <li className="py-3 border-b border-gray-600">Rankings</li>
                <li className="py-3 border-b border-gray-600">Diet</li>
                <li className="py-3">Profile</li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-10">
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white"><Link to="/home">Home</Link></li>
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white">Rankings</li>
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white">Diet</li>
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white" onClick={() => { setIsProfileOpen(!isProfileOpen); console.log(isProfileOpen) }}>
              Profile
            </li>

            {isProfileOpen && (
              <div className="absolute top-16 right-0 w-1/2 bg-black text-white profile-dropdown">
                <div className='flex flex-col gap-20 justify-center items-center overflow-y-scroll'>
                  <Profile/>
                </div>
                <button onClick={() => setIsProfileOpen(false)} className="text-white py-2 w-full focus:outline-none hover:bg-gray-800">Close</button>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
