// export default function Dashboard() {
//     return (
//         <div className="w-full h-screen flex justify-center items-center bg-gray-200">
//             <div className="w-[1400px] h-full flex justify-center items-center flex-col">
//                 <h1>Dashboard</h1>
//                 <div className="w-full h-full flex justify-center items-center flex-col gap-10">
//                     <p className="text-5xl text-gray-500 font-serif animate-pulse">This Area For Dashboard</p>
//                     <p className="text-5xl text-gray-500 font-serif animate-pulse">Welocom To The ERP</p>
//                 </div>
//             </div>
//         </div>
//     )
// }
"use client"
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Cards from '../components/Cards'
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const visitorData = [
    { name: 'Dec', last6Months: 40, previous: 25 },
    { name: 'Jan', last6Months: 80, previous: 45 },
    { name: 'Feb', last6Months: 45, previous: 35 },
    { name: 'Mar', last6Months: 100, previous: 70 },
    { name: 'Apr', last6Months: 65, previous: 60 },
    { name: 'May', last6Months: 50, previous: 55 },
    { name: 'Jun', last6Months: 60, previous: 80 },
  ];

  const percentage = 60; // Progress percentage for tasks

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Stats Cards */}
     <Cards />

      {/* Middle Section: Line Chart */}
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold mb-4">Visitor Statistics</h3>
          <LineChart width={600} height={300} data={visitorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="last6Months" stroke="#8884d8" />
            <Line type="monotone" dataKey="previous" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Task Progress */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <div className="w-40 h-40">
            {/* <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: '#333',
                pathColor: '#22c55e',
                trailColor: '#d1d5db',
              })}
            /> */}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Invite to Office Meet-Up</h3>
          <p className="text-sm text-gray-500">Due date: December 23, 2018</p>
          <p className="text-sm text-gray-500">Rebecca Moore</p>
        </div>
        <div className="text-red-500 font-bold">Ended</div>
      </div>
    </div>
  );
};

export default Dashboard;
