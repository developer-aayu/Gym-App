import React, { useState } from "react";
import { Link } from "react-router-dom";
import Profile from "../profile/Profile";
import { useAuth } from "../../contexts/authContext";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { userLoggedIn, } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const WelcomeMessage = ({ username }) => {
    return (
      <p className='text-black text-3xl font-bold'>Welcome, {username}</p>
    );
  };

  const navTabsStyle = "opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white";

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
            <li className={navTabsStyle}><Link to="/home">Home</Link></li>
            <li className={navTabsStyle}>Rankings</li>
            <li className={navTabsStyle}>Diet</li>
            <li className={navTabsStyle} style={{cursor:"pointer"}} onClick={() => 
            { 
              if(userLoggedIn)
                setIsProfileOpen(!isProfileOpen);
              // else
              
            }}>
              Profile
            </li>

            {isProfileOpen && (
              <div className="absolute top-full right-0 bg-black text-white profile-dropdown px-20 py-10 overflow-y-auto max-h-[90vh] z-10">
                <Profile />
              </div>

            )}

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
