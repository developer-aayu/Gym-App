import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Nav from "../NavComponents/Nav.jsx";
import Footer from "../NavComponents/Footer.jsx";
import { doSignOut } from "../../contexts/authContext/auth";
import { FaEdit } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Profile = () => {

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
            <Nav />
            <div className='flex flex-col gap-20 justify-center items-center'>
                <div className='bg-gray-100 p-10 my-10' style={{ width: "90%" }}>
                    <div className='flex flex-row-reverse justify-between items-center'>
                        <button className='text-white bg-blue-700 text-xl py-2 px-5 rounded-lg flex gap-3 justify-center items-center'> Edit<FaEdit /></button>
                        <div className='flex flex-col justify-center items-center gap-5'>
                            <img style={{ width: "200px", height: "200px", borderRadius: "50%", backgroundColor: "black" }} src="" alt="profile picture" />
                            <WelcomeMessage username="John" />
                        </div>
                    </div>
                    <hr className="border border-solid border-gray-700 border-b-3 mt-10" style={{ width: "50%" }} />
                    <div className='my-20'>
                        <h2 className='text-2xl font-semibold'>Personal Details :</h2>
                        <hr className='border border-solid border-gray-500 border-b-1 mt-5' />
                        <div className='overflow-y-scroll my-5 w-auto bg-gray-200 py-10 border-none' style={{ height: "300px", maxWidth: "1000px" }}>
                            <PersonalDetails age="18" height="186" weight="76" gender="Binary" BMI="20" health="excellent" fitnessLevel="Good" goal="Muscle Building" />
                        </div>
                    </div>
                    <div className='my-20'>
                        <h2 className='text-2xl font-semibold'>Personal Records :</h2>
                        <hr className='border border-solid border-gray-500 border-b-1 mt-5' />
                        <div>
                            <Bar
                                data={personalRecordsData}
                                options={{
                                    maintainAspectRatio: false,
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        }],
                                    },
                                }}
                            />
                        </div>
                    </div>

                    <button className="bg-gray-500 text-white py-2 px-6 rounded-md flex gap-2 items-center" onClick={doSignOut}>Log out <CiLogout className='text-xl' /></button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
