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

// "use client";
// import React from 'react';
// import Cards from '../components/Cards';
// import Charts from '../components/Chart';
// import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
// // import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// // import 'react-circular-progressbar/dist/styles.css';

// const Dashboard = () => {
//   const percentage = 60; // Progress percentage for tasks
//   const pieData = [
//     { name: "Completed", value: 40 },
//     { name: "Pending", value: 25 },
//     { name: "In Progress", value: 35 },
//   ];
//   const COLORS = ["#0088FE", "#FFBB28", "#FF8042"];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen w-full">
//       {/* Top Stats Cards */}
//       <div className="mb-6">
//         <Cards />
//       </div>

//       {/* Middle Section: Line Chart and Task Progress */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Line Chart */}
//         <div className="lg:col-span-2 bg-white p- rounded-lg shadow-md max-w-xl">
//           <Charts />
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
//           <PieChart width={200} height={200}>
//             <Pie
//               data={pieData}
//               cx="50%"
//               cy="50%"
//               outerRadius={80}
//               fill="#8884d8"
//               dataKey="value"
//               label
//             >
//               {pieData.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//             <Legend />
//           </PieChart>
//         </div>

//         {/* Task Progress */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
//           <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
//             {/* <CircularProgressbar
//               value={percentage}
//               text={`${percentage}%`}
//               styles={buildStyles({
//                 textColor: '#333',
//                 pathColor: '#22c55e',
//                 trailColor: '#d1d5db',
//               })}
//             /> */}
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         <div>
//           <h3 className="text-lg font-semibold">Invite to Office Meet-Up</h3>
//           <p className="text-sm text-gray-500">Due date: December 23, 2018</p>
//           <p className="text-sm text-gray-500">Rebecca Moore</p>
//         </div>
//         <div className="text-red-500 font-bold">Ended</div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client";
import React from "react";
import Cards from "../components/Cards";
import Charts from "../components/LineChart";
import PieCharts from "../components/PieChart";
import Barcharts from "../components/BarChart";
const Dashboard = () => {
  const percentage = 60; // Progress percentage for tasks


  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      {/* Top Stats Cards */}
      <div className="mb-6">
        <Cards />
      </div>

      {/* Middle Section: Line Chart, Pie Chart, and Task Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white  rounded-lg shadow-md">
          <Charts />
        </div>

        {/* Pie Chart */}
        <div className="bg-white  rounded-lg shadow-md flex items-center justify-center">
          <PieCharts />
        </div>

        {/* Task Progress */}
        <div className="bg-white  rounded-lg shadow-md flex items-center justify-center">
          <Barcharts />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
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




// "use client"
// import React from 'react';

// import Cards from '../components/Cards'
// import Charts from '../components/Chart'
// // import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// // import 'react-circular-progressbar/dist/styles.css';

// const Dashboard = () => {


//   const percentage = 60; // Progress percentage for tasks

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen w-full">
//       {/* Top Stats Cards */}
//       <Cards />

//       {/* Middle Section: Line Chart */}
//       <div className="grid grid-cols-3 gap-6">
//         <Charts />

//         {/* Task Progress */}
//         <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
//           <div className="w-40 h-40">
//             {/* <CircularProgressbar
//               value={percentage}
//               text={`${percentage}%`}
//               styles={buildStyles({
//                 textColor: '#333',
//                 pathColor: '#22c55e',
//                 trailColor: '#d1d5db',
//               })}
//             /> */}
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="mt-6 bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
//         <div>
//           <h3 className="text-lg font-semibold">Invite to Office Meet-Up</h3>
//           <p className="text-sm text-gray-500">Due date: December 23, 2018</p>
//           <p className="text-sm text-gray-500">Rebecca Moore</p>
//         </div>
//         <div className="text-red-500 font-bold">Ended</div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
