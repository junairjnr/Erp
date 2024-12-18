import { Fragment } from "react";
import { Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

export default function BarCharts() {
    const barData = [
        { name: "Task 1", progress: 80 },
        { name: "Task 2", progress: 50 },
        { name: "Task 3", progress: 70 },
        { name: "Task 4", progress: 40 },
        { name: "Task 5", progress: 90 },
    ];


    return (
        <Fragment>
            <div className="bg-white flex items-center justify-center w-full max-w-xl mx-auto">
                {/* <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center"> */}
                    <BarChart
                        width={300}
                        height={200}
                        data={barData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="progress" fill="#82ca9d" />
                    </BarChart>
                {/* </div> */}
            </div>
        </Fragment>
    )
}