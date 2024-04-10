import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 text-center">
            <div className="container mx-auto">
                <div className="mt-4">
                    <p>Contact us: info@gymapp.com</p>
                    <p>Follow us on social media:</p>
                    <div className="flex justify-center mt-5 text-3xl">
                        <a href="#" className="mr-4 text-white hover:text-gray-300">
                            <FaGithub />
                        </a>
                        <a href="#" className="mr-4 text-white hover:text-gray-300">
                            <FaWhatsapp />
                        </a>
                        <a href="#" className="text-white hover:text-gray-300">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <p className='mt-10'>&copy; 2024 GymApp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
