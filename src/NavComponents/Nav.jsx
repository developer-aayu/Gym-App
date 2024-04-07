import React from "react";

const Nav = () => {
  
  return (
    <>
      <nav className="w-4/5 mx-auto py-5 text-white text-lg flex justify-between items-center">
        <div className="">
          <span className="font-black text-3xl inline-block hover:scale-110 duration-300">Logo</span>
        </div>
        <div>
          <ul className="flex gap-10">
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white">Home</li>
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white">Rakings</li>
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white">Diet</li>
            <li className="opacity-70 border-b border-transparent transition-opacity duration-300 hover:opacity-100 hover:border-white">Profile</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;