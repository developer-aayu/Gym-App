import React from "react";
import BarGraph from "../BarGraph/BarGraph.jsx";
import PieChart from "../BarGraph/PieChart.jsx";
import { FaEdit } from "react-icons/fa";
import { doSignOut } from "../../contexts/authContext/auth";

const Dashboard = () => {
    const SourceData = [
        { label: "Squats", value: 100 },
        { label: "Bench press", value: 60 },
        { label: "Curls", value: 30 },
        { label: "Rows", value: 70 },
        { label: "Deadlift", value: 150 }
      ];
    const PieSourceData = [
        { label: "Protein", value: 40 },
        { label: "Carbohydrates", value: 40 },
        { label: "Fat", value: 30 }
    ];

    return (
        <div className="my-20 m-auto bg-gray-100" style={{width:"95%"}}>
            
            <h2 className="text-4xl font-semibold w-full bg-gray-300 p-5">Activity Overview</h2>
            <div className="my-10 flex flex-col justify-between items-center gap-10 px-5">
                <h3 className="text-2xl font-semibold">Today's nutrition intake :</h3>
                <p>Maintaining a balanced and nutritious diet is essential for overall health and well-being. Understanding our daily food intake allows us to make informed choices and ensures we meet our nutritional needs.</p>
                <PieChart PieSourceData={PieSourceData} />

            </div>
            <div className="my-10 flex flex-col items-center gap-10 px-5">
                <h3 className="text-2xl font-semibold">Your Personal Lift Records</h3>
                <p>Welcome to the Personal Lift Records section, where you can track and analyze your progress in various lifts over time. Whether you're a seasoned lifter or just starting out on your fitness journey, keeping track of your personal lift records can provide valuable insights into your strength gains and overall fitness level.</p>
                <div className="flex justify-around items-start bg-gray-50">
                <BarGraph sourceData={SourceData} />
                <button className='text-white bg-blue-500 text-xl py-2 px-5 rounded-lg '><FaEdit /></button>
                </div>

            </div>
            <button className="bg-gray-500 text-white py-2 px-6 rounded-md flex gap-2 items-center" onClick={doSignOut}>Log out</button>
        </div>
        
    )
};

export default Dashboard;