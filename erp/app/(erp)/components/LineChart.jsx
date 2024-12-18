
// import React from "react";
// import { Fragment } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// export default function Charts() {

//     const visitorData = [
//         { name: 'Dec', last6Months: 40, previous: 25 },
//         { name: 'Jan', last6Months: 80, previous: 45 },
//         { name: 'Feb', last6Months: 45, previous: 35 },
//         { name: 'Mar', last6Months: 100, previous: 70 },
//         { name: 'Apr', last6Months: 65, previous: 60 },
//         { name: 'May', last6Months: 50, previous: 55 },
//         { name: 'Jun', last6Months: 60, previous: 80 },
//     ];
//     return (
//         <Fragment>
//             <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="font-semibold mb-4">Visitor Statistics</h3>
//                 <LineChart width={600} height={300} data={visitorData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="last6Months" stroke="#8884d8" />
//                     <Line type="monotone" dataKey="previous" stroke="#82ca9d" />
//                 </LineChart>
//             </div>
//         </Fragment>
//     )
// }

import React, { Fragment, useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LineCharts() {
    const visitorData = [
        { name: 'Dec', last6Months: 40, previous: 25 },
        { name: 'Jan', last6Months: 80, previous: 45 },
        { name: 'Feb', last6Months: 45, previous: 35 },
        { name: 'Mar', last6Months: 100, previous: 70 },
        { name: 'Apr', last6Months: 65, previous: 60 },
        { name: 'May', last6Months: 50, previous: 55 },
        { name: 'Jun', last6Months: 60, previous: 80 },
    ];

    const [chartWidth, setChartWidth] = useState(600);

    useEffect(() => {
        const updateChartWidth = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setChartWidth(screenWidth - 40); // Small screens
            } else if (screenWidth < 1024) {
                setChartWidth(500); // Medium screens
            } else {
                setChartWidth(600); // Large screens
            }
        };

        // Set initial width and add resize listener
        updateChartWidth();
        window.addEventListener("resize", updateChartWidth);

        return () => {
            window.removeEventListener("resize", updateChartWidth);
        };
    }, []);

    return (
        <Fragment>
            <div className="bg-white p-6 flex flex-col items-center justify-center w-full max-w-xl mx-auto">
                <h3 className="font-semibold mb-4 text-center">Visitor Statistics</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={visitorData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="last6Months" stroke="#8884d8" />
                        <Line type="monotone" dataKey="previous" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Fragment>
    );
}
