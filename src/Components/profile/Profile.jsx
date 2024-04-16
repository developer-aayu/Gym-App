import React, { useState } from 'react';
import { doSignOut } from "../../contexts/authContext/auth";
import { FaEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Profile = () => {

    const WelcomeMessage = ({ username }) => {
        return (
            <p className='text-white text-2xl font-bold'>Welcome, {username}</p>
        );
    };
    const PersonalDetails = ({ age, height, weight, gender, BMI, health, fitnessLevel, goal }) => {
        return (
            <ul className='flex flex-col justify-center items-start gap-5 text-l'>
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

    const personalRecordsData = {
        labels: ['Squats', 'Bench Press', 'Rows', 'Curls', 'Deadlift'],
        datasets: [
            {
                label: 'Personal Records',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.4)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [100, 150, 120, 80, 200], // Personal records for each exercise
            },
        ],
    };


    return (
        <>
            <div className='text-white' style={{ width: "100%" }}>
                <div className='my-10 flex flex-col justify-center items-start gap-5'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <img style={{ width: "150px", height: "150px", borderRadius: "50%", backgroundColor: "gray" }} src='#' alt="profile picture" />
                        <WelcomeMessage username="John" />
                    </div>
                    <hr className='border border-solid border-gray-500 border-b-1 mt-5' />
                    <div className=''>
                        <h2 className='text-xl font-semibold'>Personal Details :</h2>
                        <hr className='border border-solid border-gray-500 border-b-1 mt-5' />
                        <div className='my-5'>
                            <PersonalDetails age="18" height="186" weight="76" gender="Binary" BMI="20" health="excellent" fitnessLevel="Good" goal="Muscle Building" />
                        </div>
                    </div>
                    <div className="mt-5 flex gap-5">
                        <button className='text-white bg-blue-700 text-xl py-2 px-5 rounded-lg flex gap-3 justify-center items-center'> Edit<FaEdit /></button>
                        <button className="bg-gray-500 text-white py-2 px-6 rounded-md flex gap-2 items-center" onClick={doSignOut}>Log out <CiLogout className='text-xl' /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
