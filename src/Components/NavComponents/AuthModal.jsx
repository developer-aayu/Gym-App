import React from 'react';
import LoginPage from '../LoginComponents/SignUp.jsx';
import { IoCloseSharp } from "react-icons/io5";

const AuthModal = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg">
                    <button onClick={onClose} className="text-2xl">
                        <IoCloseSharp />
                    </button>
                        <LoginPage />
                    </div>
                </div>
            )}
        </>
    );
};

export default AuthModal;
